"use client";

import { useState, useEffect, useCallback } from "react";

interface QuizHistoryEntry {
  correct: number;
  incorrect: number;
  streak: number; // Consecutive correct answers
  lastAttempt: string;
}

interface AppState {
  learned: Record<number, number>; // setId -> viewCount
  quizHistory: Record<number, QuizHistoryEntry>;
  mastered: number[];
}

const STORAGE_KEY = "permis-revision-progress";
const MASTERY_THRESHOLD = 3; // 3 correct in a row to master

const defaultState: AppState = {
  learned: {},
  quizHistory: {},
  mastered: [],
};

function loadState(): AppState {
  if (typeof window === "undefined") return defaultState;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load progress:", e);
  }
  return defaultState;
}

function saveState(state: AppState): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

export function useProgress() {
  const [state, setState] = useState<AppState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    setState(loadState());
    setIsLoaded(true);
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    if (isLoaded) {
      saveState(state);
    }
  }, [state, isLoaded]);

  // Mark a set as viewed in learning mode
  const markLearned = useCallback((setId: number) => {
    setState((prev) => ({
      ...prev,
      learned: {
        ...prev.learned,
        [setId]: (prev.learned[setId] || 0) + 1,
      },
    }));
  }, []);

  // Record quiz answer
  const recordQuizAnswer = useCallback((setId: number, isCorrect: boolean) => {
    setState((prev) => {
      const currentHistory = prev.quizHistory[setId] || {
        correct: 0,
        incorrect: 0,
        streak: 0,
        lastAttempt: "",
      };

      const newStreak = isCorrect ? currentHistory.streak + 1 : 0;
      const newHistory: QuizHistoryEntry = {
        correct: currentHistory.correct + (isCorrect ? 1 : 0),
        incorrect: currentHistory.incorrect + (isCorrect ? 0 : 1),
        streak: newStreak,
        lastAttempt: new Date().toISOString(),
      };

      // Check if mastered
      let newMastered = [...prev.mastered];
      if (newStreak >= MASTERY_THRESHOLD && !prev.mastered.includes(setId)) {
        newMastered.push(setId);
      }

      return {
        ...prev,
        quizHistory: {
          ...prev.quizHistory,
          [setId]: newHistory,
        },
        mastered: newMastered,
      };
    });
  }, []);

  // Reset a specific set (remove from mastered, reset streak)
  const resetSet = useCallback((setId: number) => {
    setState((prev) => ({
      ...prev,
      mastered: prev.mastered.filter((id) => id !== setId),
      quizHistory: {
        ...prev.quizHistory,
        [setId]: {
          ...prev.quizHistory[setId],
          streak: 0,
        },
      },
    }));
  }, []);

  // Reset all progress
  const resetAll = useCallback(() => {
    setState(defaultState);
  }, []);

  // Get sets to review (not mastered, prioritize those with wrong answers)
  const getSetsToReview = useCallback(
    (allSetIds: number[]) => {
      const notMastered = allSetIds.filter((id) => !state.mastered.includes(id));

      // Shuffle first for randomness among equal priorities
      const shuffled = [...notMastered].sort(() => Math.random() - 0.5);

      // Sort by: 1) has wrong answers (priority), 2) never attempted, 3) least streak
      return shuffled.sort((a, b) => {
        const historyA = state.quizHistory[a];
        const historyB = state.quizHistory[b];

        // Prioritize sets with wrong answers
        const wrongA = historyA?.incorrect || 0;
        const wrongB = historyB?.incorrect || 0;
        if (wrongA !== wrongB) return wrongB - wrongA;

        // Then prioritize never attempted
        if (!historyA && historyB) return -1;
        if (historyA && !historyB) return 1;

        // Then by streak (lower streak = needs more practice)
        const streakA = historyA?.streak || 0;
        const streakB = historyB?.streak || 0;
        if (streakA !== streakB) return streakA - streakB;

        // Equal priority: keep random order from shuffle
        return 0;
      });
    },
    [state.mastered, state.quizHistory]
  );

  // Get random set for quiz (prioritize non-mastered, exclude recent sets)
  const getRandomQuizSet = useCallback(
    (allSetIds: number[], excludeSetIds: number[] = []) => {
      const toReview = getSetsToReview(allSetIds);

      // Filter out recently played sets for cooldown
      const availableForReview = toReview.filter(id => !excludeSetIds.includes(id));

      if (availableForReview.length === 0) {
        // All sets are either mastered or in cooldown
        // Fall back to any non-excluded set, or any set if all excluded
        const fallbackPool = allSetIds.filter(id => !excludeSetIds.includes(id));
        if (fallbackPool.length > 0) {
          return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
        }
        // Last resort: pick any random set
        return allSetIds[Math.floor(Math.random() * allSetIds.length)];
      }

      // Pick from top 10 priority sets for variety
      const pool = availableForReview.slice(0, Math.min(10, availableForReview.length));
      return pool[Math.floor(Math.random() * pool.length)];
    },
    [getSetsToReview]
  );

  // Stats
  const stats = {
    totalMastered: state.mastered.length,
    totalLearned: Object.keys(state.learned).length,
    totalAttempted: Object.keys(state.quizHistory).length,
    totalCorrect: Object.values(state.quizHistory).reduce(
      (sum, h) => sum + h.correct,
      0
    ),
    totalIncorrect: Object.values(state.quizHistory).reduce(
      (sum, h) => sum + h.incorrect,
      0
    ),
  };

  return {
    state,
    isLoaded,
    stats,
    markLearned,
    recordQuizAnswer,
    resetSet,
    resetAll,
    getSetsToReview,
    getRandomQuizSet,
    isMastered: (setId: number) => state.mastered.includes(setId),
    getLearnedCount: (setId: number) => state.learned[setId] || 0,
    getQuizHistory: (setId: number) => state.quizHistory[setId],
  };
}
