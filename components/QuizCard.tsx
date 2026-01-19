"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface QuizCardProps {
  type: "VI" | "VE" | "QSER" | "SECOURS";
  question: string;
  answer: string;
  keywords?: string[];
  setNumber: number;
  questionIndex: number;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const typeLabels = {
  VI: "Vérif. Intérieure",
  VE: "Vérif. Extérieure",
  QSER: "Sécurité Routière",
  SECOURS: "1ers Secours",
};

export function QuizCard({
  type,
  question,
  answer,
  keywords,
  setNumber,
  questionIndex,
  onCorrect,
  onIncorrect,
}: QuizCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Reset showAnswer when question changes
  useEffect(() => {
    setShowAnswer(false);
  }, [question, questionIndex]);

  const handleCorrect = () => {
    setShowAnswer(false);
    onCorrect();
  };

  const handleIncorrect = () => {
    setShowAnswer(false);
    onIncorrect();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col min-h-[450px] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">{typeLabels[type]}</Badge>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Question {questionIndex}/3
            </span>
            <span className="text-sm text-muted-foreground font-mono">
              #{setNumber.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col">
          <div className="mb-6">
            <p className="text-lg leading-relaxed">{question}</p>
          </div>

          {/* Answer section */}
          {showAnswer ? (
            <div className="flex-1 flex flex-col">
              <div className="p-4 rounded-lg bg-muted border mb-4">
                <p className="text-sm text-muted-foreground mb-2">Réponse :</p>
                <p className="leading-relaxed">{answer}</p>

                {keywords && keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {keywords.map((keyword, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-sm text-muted-foreground text-center mb-4">
                As-tu donné la bonne réponse ?
              </p>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handleIncorrect}
                >
                  Non
                </Button>
                <Button className="flex-1 h-12" onClick={handleCorrect}>
                  Oui
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-end">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Réponds mentalement, puis vérifie ta réponse
              </p>
              <Button className="w-full h-12" onClick={() => setShowAnswer(true)}>
                Voir la réponse
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
