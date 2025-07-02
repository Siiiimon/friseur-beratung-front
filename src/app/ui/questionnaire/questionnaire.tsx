"use client";
import { use, useCallback, useState } from "react";
import Question from "../consultation/question";
import type { QuestionType } from "@/types/questionnaire";

export default function Questionnaire({
  questionnaire,
}: {
  questionnaire: Promise<{ id: string; questions: QuestionType[] }>;
}) {
  const { id, questions } = use(questionnaire);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = useCallback(
    (questionId: string, choiceId: string) => {
      setResponses((prev) => ({ ...prev, [questionId]: choiceId }));
      setCurrentIndex((i) => {
        if (i + 1 < questions.length) {
          i++;
        }
        return i;
      });
    },
    [questions.length],
  );

  return (
    <main>
      {currentIndex < questions.length ? (
        <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
      ) : (
        <div>
          <h1>done :)</h1>
          <h5>{id}</h5>
          <pre>{JSON.stringify(responses, null, 4)}</pre>
        </div>
      )}
    </main>
  );
}
