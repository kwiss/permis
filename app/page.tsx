"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useProgress } from "@/hooks/useProgress";
import { questionSets } from "@/data/questions";
import { useState } from "react";

export default function HomePage() {
  const { stats, isLoaded, resetAll } = useProgress();
  const [showResetDialog, setShowResetDialog] = useState(false);

  const totalSets = questionSets.length;
  const progressPercent = (stats.totalMastered / totalSets) * 100;

  const handleReset = () => {
    resetAll();
    setShowResetDialog(false);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="flex justify-end mb-2">
        <ThemeToggle />
      </div>
      <div className="text-center pb-8">
        <h1 className="text-2xl font-bold mb-2">Permis B</h1>
        <p className="text-muted-foreground">
          Révise les vérifications du permis de conduire
        </p>
      </div>

      {/* Progress Stats */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">Progression</span>
            <span className="font-mono font-bold">
              {stats.totalMastered}/{totalSets}
            </span>
          </div>
          <Progress value={progressPercent} className="h-3 mb-4" />

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.totalLearned}</div>
              <div className="text-xs text-muted-foreground">Vues</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalCorrect}</div>
              <div className="text-xs text-muted-foreground">Bonnes</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalIncorrect}</div>
              <div className="text-xs text-muted-foreground">Erreurs</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mode Selection */}
      <div className="flex-1 flex flex-col gap-4">
        <Link href="/learn" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl">
                  1
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Apprentissage</h2>
                  <p className="text-sm text-muted-foreground">
                    Fiches complètes avec questions et réponses
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/quiz" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl">
                  2
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Quiz</h2>
                  <p className="text-sm text-muted-foreground">
                    Simule l'examen avec 3 questions par set
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Reset Button */}
      <div className="py-6">
        <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full text-muted-foreground">
              Réinitialiser la progression
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Réinitialiser ?</DialogTitle>
              <DialogDescription>
                Cette action effacera toute ta progression. Tu devras tout
                recommencer depuis le début.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button
                variant="outline"
                onClick={() => setShowResetDialog(false)}
              >
                Annuler
              </Button>
              <Button variant="destructive" onClick={handleReset}>
                Réinitialiser
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground pb-4">
        100 fiches de vérifications officielles
      </p>
    </main>
  );
}
