"use client";
import { use, useCallback, useState } from "react";
import Question from "../consultation/question";
import type { QuestionType } from "@/types/questionnaire";
import { useSessionStoredResponses } from "@/hooks/useSessionStage";

export default function Questionnaire({
  questionnaire,
}: {
  questionnaire: Promise<{ id: string; questions: QuestionType[] }>;
}) {
  const { id, questions } = use(questionnaire);
  const [responses, setResponses] = useSessionStoredResponses(
    Object.fromEntries(questions.map((q) => [q.id, null])),
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = useCallback(
    (questionId: string, choiceId: string[]) => {
      setResponses((prev) => ({ ...prev, [questionId]: choiceId }));
      setCurrentIndex((i) => {
        if (i + 1 < questions.length) {
          i++;
        }
        return i;
      });
    },
    [questions.length, setResponses],
  );

  return (
    <main>
      {currentIndex < questions.length && (
        <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
      )}
    </main>
  );
}
