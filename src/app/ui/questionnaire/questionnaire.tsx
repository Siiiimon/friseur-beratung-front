"use client";
import { use, useCallback, useEffect, useState } from "react";
import Question from "../consultation/question";
import type { QuestionType } from "@/types/questionnaire";
import { useSessionStoredResponses } from "@/hooks/useSessionStage";
import { useRouter } from "next/navigation";
import { ID_KEY } from "@/constants";

export default function Questionnaire({
  questionnaire,
}: {
  questionnaire: Promise<{ id: string; questions: QuestionType[] }>;
}) {
  const router = useRouter();
  const { id, questions } = use(questionnaire);
  const [responses, setResponses] = useSessionStoredResponses(
    Object.fromEntries(questions.map((q) => [q.id, null])),
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  sessionStorage.setItem(ID_KEY, id);

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

  useEffect(() => {
    if (currentIndex >= questions.length - 1) {
      if (Object.values(responses).some((res) => res != null)) {
        router.push("/result");
      }
    }
  });

  return (
    <main>
      {currentIndex < questions.length && (
        <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
      )}
    </main>
  );
}
