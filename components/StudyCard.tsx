"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { QuestionSet } from "@/data/questions";

interface StudyCardProps {
  questionSet: QuestionSet;
  isMastered?: boolean;
}

// Highlight keywords in text with primary color
function highlightKeywords(text: string, keywords: string[]): React.ReactNode {
  if (!keywords || keywords.length === 0) return text;

  // Create regex pattern for all keywords (case insensitive)
  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const isKeyword = keywords.some(
      (k) => k.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <span key={i} className="font-bold text-primary">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function StudyCard({ questionSet, isMastered }: StudyCardProps) {
  const { id, verification, securite, secours } = questionSet;

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-mono">
            Fiche #{id.toString().padStart(2, "0")}
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">
              {verification.type === "VI" ? "Vérif. Intérieure" : "Vérif. Extérieure"}
            </Badge>
            {isMastered && <Badge variant="secondary">Maîtrisé</Badge>}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Question 1: Vérification */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge className="text-xs">1</Badge>
            <span className="text-sm font-medium">
              {verification.type === "VI" ? "Vérification Intérieure" : "Vérification Extérieure"}
            </span>
          </div>
          <p className="text-base font-medium">{verification.question}</p>
          <div className="p-3 rounded-md bg-muted">
            <p className="text-sm">{verification.answer}</p>
          </div>
          {verification.tip && (
            <div className="p-3 rounded-md border border-primary/30 bg-primary/5">
              <p className="text-xs font-medium text-primary mb-1">💡 Astuce</p>
              <p className="text-sm">{verification.tip}</p>
            </div>
          )}
        </div>

        <Separator />

        {/* Question 2: Sécurité Routière */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge className="text-xs">2</Badge>
            <span className="text-sm font-medium">Sécurité Routière</span>
          </div>
          <p className="text-base font-medium">{securite.question}</p>
          <div className="p-3 rounded-md bg-muted">
            <p className="text-sm">
              {highlightKeywords(securite.answer, securite.keywords)}
            </p>
          </div>
          {securite.tip && (
            <div className="p-3 rounded-md border border-primary/30 bg-primary/5">
              <p className="text-xs font-medium text-primary mb-1">💡 Astuce</p>
              <p className="text-sm">{securite.tip}</p>
            </div>
          )}
          {securite.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {securite.keywords.map((keyword, i) => (
                <Badge key={i} variant="outline" className="text-xs text-primary border-primary/30">
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Question 3: Premiers Secours */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge className="text-xs">3</Badge>
            <span className="text-sm font-medium">Premiers Secours</span>
          </div>
          <p className="text-base font-medium">{secours.question}</p>
          <div className="p-3 rounded-md bg-muted">
            <p className="text-sm">
              {highlightKeywords(secours.answer, secours.keywords)}
            </p>
          </div>
          {secours.tip && (
            <div className="p-3 rounded-md border border-primary/30 bg-primary/5">
              <p className="text-xs font-medium text-primary mb-1">💡 Astuce</p>
              <p className="text-sm">{secours.tip}</p>
            </div>
          )}
          {secours.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {secours.keywords.map((keyword, i) => (
                <Badge key={i} variant="outline" className="text-xs text-primary border-primary/30">
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
