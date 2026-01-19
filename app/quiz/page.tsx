"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuizCard } from "@/components/QuizCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useProgress } from "@/hooks/useProgress";
import { questionSets } from "@/data/questions";

type QuizState = "idle" | "question" | "result";
type QuestionPhase = 0 | 1 | 2;

export default function QuizPage() {
  const {
    recordQuizAnswer,
    getRandomQuizSet,
    isMastered,
    stats,
    isLoaded,
    getQuizHistory,
  } = useProgress();

  const [quizState, setQuizState] = useState<QuizState>("idle");
  const [currentSetId, setCurrentSetId] = useState<number | null>(null);
  const [questionPhase, setQuestionPhase] = useState<QuestionPhase>(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [setsCompleted, setSetsCompleted] = useState(0);
  const [recentSets, setRecentSets] = useState<number[]>([]); // Cooldown: last 5 sets

  const COOLDOWN_SIZE = 5; // Number of sets to exclude from selection

  const allSetIds = useMemo(() => questionSets.map((s) => s.id), []);
  const currentSet = currentSetId
    ? questionSets.find((s) => s.id === currentSetId)
    : null;

  const startNewSet = useCallback(() => {
    const setId = getRandomQuizSet(allSetIds, recentSets);
    setCurrentSetId(setId);
    setQuestionPhase(0);
    setAnswers([]);
    setQuizState("question");

    // Add to recent sets (keep last COOLDOWN_SIZE)
    setRecentSets((prev) => {
      const updated = [...prev, setId];
      return updated.slice(-COOLDOWN_SIZE);
    });
  }, [allSetIds, getRandomQuizSet, recentSets]);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      const newAnswers = [...answers, isCorrect];
      setAnswers(newAnswers);

      if (questionPhase < 2) {
        setQuestionPhase((prev) => (prev + 1) as QuestionPhase);
      } else {
        const allCorrect = newAnswers.every((a) => a);
        if (currentSetId) {
          recordQuizAnswer(currentSetId, allCorrect);
        }
        setSetsCompleted((prev) => prev + 1);
        setQuizState("result");
      }
    },
    [answers, questionPhase, currentSetId, recordQuizAnswer]
  );

  const getQuestionData = useCallback(() => {
    if (!currentSet) return null;

    switch (questionPhase) {
      case 0:
        return {
          type: currentSet.verification.type as "VI" | "VE",
          question: currentSet.verification.question,
          answer: currentSet.verification.answer,
          keywords: undefined,
        };
      case 1:
        return {
          type: "QSER" as const,
          question: currentSet.securite.question,
          answer: currentSet.securite.answer,
          keywords: currentSet.securite.keywords,
        };
      case 2:
        return {
          type: "SECOURS" as const,
          question: currentSet.secours.question,
          answer: currentSet.secours.answer,
          keywords: currentSet.secours.keywords,
        };
    }
  }, [currentSet, questionPhase]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  // Idle state
  if (quizState === "idle") {
    const notMasteredCount = allSetIds.filter((id) => !isMastered(id)).length;

    return (
      <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Retour
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-2">Mode Quiz</h1>
          <p className="text-muted-foreground mb-8 max-w-xs">
            Réponds aux 3 questions comme lors de l'examen réel. Si tu réponds
            correctement 3 fois de suite, la fiche est maîtrisée.
          </p>

          <Card className="w-full mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">
                    {stats.totalMastered}
                  </div>
                  <div className="text-xs text-muted-foreground">Maîtrisées</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {notMasteredCount}
                  </div>
                  <div className="text-xs text-muted-foreground">À réviser</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button size="lg" className="w-full max-w-xs" onClick={startNewSet}>
            Commencer le Quiz
          </Button>
        </div>
      </main>
    );
  }

  // Question state
  if (quizState === "question" && currentSet) {
    const questionData = getQuestionData();
    if (!questionData) return null;

    return (
      <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Quitter
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {isMastered(currentSetId!) && (
              <Badge variant="secondary">Maîtrisé</Badge>
            )}
            <span className="text-sm text-muted-foreground">
              Set #{setsCompleted + 1}
            </span>
            <ThemeToggle />
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < questionPhase
                  ? answers[i]
                    ? "bg-primary"
                    : "bg-destructive"
                  : i === questionPhase
                    ? "bg-primary"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <QuizCard
            type={questionData.type}
            question={questionData.question}
            answer={questionData.answer}
            keywords={questionData.keywords}
            setNumber={currentSet.id}
            questionIndex={questionPhase + 1}
            onCorrect={() => handleAnswer(true)}
            onIncorrect={() => handleAnswer(false)}
          />
        </div>
      </main>
    );
  }

  // Result state
  if (quizState === "result" && currentSet) {
    const correctCount = answers.filter((a) => a).length;
    const allCorrect = correctCount === 3;
    const history = getQuizHistory(currentSetId!);

    return (
      <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-2">
            {allCorrect ? "Parfait !" : "Continue !"}
          </h1>
          <p className="text-muted-foreground mb-2">
            Set #{currentSet.id.toString().padStart(2, "0")}
          </p>

          {/* Score */}
          <div className="flex gap-2 mb-6">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${
                  correct ? "bg-primary/20 border-primary" : "bg-destructive/20 border-destructive"
                }`}
              >
                {correct ? "✓" : "✗"}
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold mb-2">
            {correctCount}/3 bonnes réponses
          </p>

          {allCorrect && isMastered(currentSetId!) && (
            <Badge variant="secondary" className="mb-4">
              Fiche maîtrisée !
            </Badge>
          )}

          {history && (
            <p className="text-sm text-muted-foreground mb-6">
              Série actuelle : {history.streak}/3
            </p>
          )}

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button size="lg" onClick={startNewSet}>
              Set suivant
            </Button>
            <Link href="/" className="block">
              <Button variant="outline" size="lg" className="w-full">
                Terminer
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground pb-4">
          Cette session : {setsCompleted} sets complétés
        </div>
      </main>
    );
  }

  return null;
}
