"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
type QuizMode = "full" | "secours" | "discovery";

function QuizContent() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const mode: QuizMode = modeParam === "secours" ? "secours" : modeParam === "discovery" ? "discovery" : "full";
  const isSecoursMode = mode === "secours";
  const isDiscoveryQuiz = mode === "discovery";

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
  const [discoveryMode, setDiscoveryMode] = useState(true); // Start with discovery mode

  const COOLDOWN_SIZE = 10; // Number of sets to exclude from selection
  const maxPhase = isSecoursMode ? 0 : 2; // 1 question for secours, 3 for full

  const allSetIds = useMemo(() => questionSets.map((s) => s.id), []);

  // Get never-attempted sets for discovery quiz mode
  const neverAttemptedSets = useMemo(() => {
    return allSetIds.filter(id => !getQuizHistory(id));
  }, [allSetIds, getQuizHistory]);
  const currentSet = currentSetId
    ? questionSets.find((s) => s.id === currentSetId)
    : null;

  // Count sets never attempted in quiz
  const attemptedSetIds = useMemo(() => {
    const attempted = new Set<number>();
    allSetIds.forEach(id => {
      if (getQuizHistory(id)) attempted.add(id);
    });
    return attempted;
  }, [allSetIds, getQuizHistory]);

  const neverAttemptedCount = allSetIds.length - attemptedSetIds.size;

  const startNewSet = useCallback(() => {
    let setId: number;

    if (isDiscoveryQuiz) {
      // Discovery quiz mode: only pick from never-attempted sets
      const available = neverAttemptedSets.filter(id => !recentSets.includes(id));
      if (available.length === 0) {
        // All sets have been attempted
        return;
      }
      setId = available[Math.floor(Math.random() * available.length)];
    } else {
      setId = getRandomQuizSet(allSetIds, recentSets, discoveryMode);
    }

    setCurrentSetId(setId);
    setQuestionPhase(0);
    setAnswers([]);
    setQuizState("question");

    // Add to recent sets (keep last COOLDOWN_SIZE)
    setRecentSets((prev) => {
      const updated = [...prev, setId];
      return updated.slice(-COOLDOWN_SIZE);
    });
  }, [allSetIds, getRandomQuizSet, recentSets, discoveryMode, isDiscoveryQuiz, neverAttemptedSets]);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      const newAnswers = [...answers, isCorrect];
      setAnswers(newAnswers);

      if (questionPhase < maxPhase) {
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
    [answers, questionPhase, currentSetId, recordQuizAnswer, maxPhase]
  );

  const getQuestionData = useCallback(() => {
    if (!currentSet) return null;

    // In secours mode, always show the secours question
    if (isSecoursMode) {
      return {
        type: "SECOURS" as const,
        question: currentSet.secours.question,
        answer: currentSet.secours.answer,
        keywords: currentSet.secours.keywords,
      };
    }

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
  }, [currentSet, questionPhase, isSecoursMode]);

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

    // Discovery quiz mode - dedicated first pass through all 100 sets
    if (isDiscoveryQuiz) {
      const remaining = neverAttemptedSets.length;
      const completed = allSetIds.length - remaining;
      const allDone = remaining === 0;

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
            <h1 className="text-2xl font-bold mb-2">
              {allDone ? "Bravo !" : "Premier Passage"}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xs">
              {allDone
                ? "Tu as parcouru tous les 100 sets ! Tu peux maintenant passer en mode révision."
                : "Parcours tous les sets une première fois pour les découvrir."}
            </p>

            <Card className="w-full mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{completed}</div>
                    <div className="text-xs text-muted-foreground">Complétés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{remaining}</div>
                    <div className="text-xs text-muted-foreground">Restants</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {allDone ? (
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <Link href="/quiz" className="block">
                  <Button size="lg" className="w-full">
                    Mode Révision
                  </Button>
                </Link>
                <Link href="/" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Accueil
                  </Button>
                </Link>
              </div>
            ) : (
              <Button size="lg" className="w-full max-w-xs" onClick={startNewSet}>
                Continuer ({remaining} restants)
              </Button>
            )}
          </div>
        </main>
      );
    }

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
          <h1 className="text-2xl font-bold mb-2">
            {isSecoursMode ? "Premiers Secours" : "Mode Quiz"}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xs">
            {isSecoursMode
              ? "Révise les questions de premiers secours. 3 bonnes réponses de suite = maîtrisé."
              : "Réponds aux 3 questions comme lors de l'examen réel. Si tu réponds correctement 3 fois de suite, la fiche est maîtrisée."}
          </p>

          <Card className="w-full mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">
                    {stats.totalMastered}
                  </div>
                  <div className="text-xs text-muted-foreground">Maîtrisées</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {neverAttemptedCount}
                  </div>
                  <div className="text-xs text-muted-foreground">Non vues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {notMasteredCount - neverAttemptedCount}
                  </div>
                  <div className="text-xs text-muted-foreground">En cours</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mode toggle */}
          <div className="flex gap-2 mb-6 w-full max-w-xs">
            <Button
              variant={discoveryMode ? "secondary" : "outline"}
              size="sm"
              className="flex-1"
              onClick={() => setDiscoveryMode(true)}
            >
              Découverte
            </Button>
            <Button
              variant={!discoveryMode ? "secondary" : "outline"}
              size="sm"
              className="flex-1"
              onClick={() => setDiscoveryMode(false)}
            >
              Révision
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mb-4 max-w-xs">
            {discoveryMode
              ? "Voir tous les sets avant de répéter"
              : "Prioriser les sets proches de la maîtrise"}
          </p>

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
    const currentHistory = getQuizHistory(currentSetId!);
    const currentStreak = currentHistory?.streak || 0;

    return (
      <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Quitter
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="text-muted-foreground">
            Maîtrisés: <span className="font-bold text-foreground">{stats.totalMastered}/100</span>
          </span>
          <span className="text-muted-foreground">
            Set #{currentSet.id} · Série: <span className="font-bold text-foreground">{currentStreak}/3</span>
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: maxPhase + 1 }, (_, i) => (
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
    const totalQuestions = maxPhase + 1;
    const allCorrect = correctCount === totalQuestions;
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
            {correctCount}/{totalQuestions} {totalQuestions === 1 ? "bonne réponse" : "bonnes réponses"}
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
            {isDiscoveryQuiz && neverAttemptedSets.length === 0 ? (
              <>
                <Link href="/quiz" className="block">
                  <Button size="lg" className="w-full">
                    Mode Révision
                  </Button>
                </Link>
                <Link href="/" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Accueil
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Button size="lg" onClick={startNewSet}>
                  Set suivant {isDiscoveryQuiz && `(${neverAttemptedSets.length} restants)`}
                </Button>
                <Link href="/" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Terminer
                  </Button>
                </Link>
              </>
            )}
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

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}
