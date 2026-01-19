"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StudyCard } from "@/components/StudyCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useProgress } from "@/hooks/useProgress";
import { questionSets } from "@/data/questions";

export default function LearnPage() {
  const { markLearned, isMastered, getSetsToReview, stats, isLoaded } =
    useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMastered, setShowMastered] = useState(false);

  const allSetIds = useMemo(() => questionSets.map((s) => s.id), []);

  const setsToShow = useMemo(() => {
    if (showMastered) {
      return allSetIds;
    }
    const toReview = getSetsToReview(allSetIds);
    if (toReview.length === 0) {
      return allSetIds;
    }
    return toReview;
  }, [allSetIds, getSetsToReview, showMastered]);

  const currentSetId = setsToShow[currentIndex];
  const currentSet = questionSets.find((s) => s.id === currentSetId);

  const handleNext = () => {
    if (currentSetId) {
      markLearned(currentSetId);
    }
    setCurrentIndex((prev) =>
      prev < setsToShow.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : setsToShow.length - 1
    );
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  if (!currentSet) {
    return (
      <div className="min-h-screen p-4 max-w-md mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-2">Aucune fiche</h1>
        <Link href="/">
          <Button>Retour</Button>
        </Link>
      </div>
    );
  }

  const progressPercent = ((currentIndex + 1) / setsToShow.length) * 100;

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/">
          <Button variant="ghost" size="sm">
            ← Retour
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-mono">
            {currentIndex + 1}/{setsToShow.length}
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Progress */}
      <Progress value={progressPercent} className="h-1 mb-4" />

      {/* Filter toggle */}
      <div className="flex justify-center mb-4">
        <Button
          variant={showMastered ? "outline" : "secondary"}
          size="sm"
          onClick={() => {
            setShowMastered(!showMastered);
            setCurrentIndex(0);
          }}
        >
          {showMastered ? "Voir toutes les fiches" : "Masquer les maîtrisées"}
        </Button>
      </div>

      {/* Study Card */}
      <div className="flex-1 overflow-auto py-4">
        <StudyCard
          questionSet={currentSet}
          isMastered={isMastered(currentSetId)}
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-3 py-4">
        <Button variant="outline" className="flex-1" onClick={handlePrevious}>
          ← Précédent
        </Button>
        <Button className="flex-1" onClick={handleNext}>
          Suivant →
        </Button>
      </div>

      {/* Stats */}
      <div className="text-center text-xs text-muted-foreground pb-2">
        {stats.totalMastered}/100 maîtrisés
      </div>
    </main>
  );
}
