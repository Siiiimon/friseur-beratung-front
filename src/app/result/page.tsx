"use client";
import { useEffect, useState } from "react";
import { ID_KEY, RESPONSES_KEY } from "@/constants";
import Link from "next/link";
import styles from "./page.module.css";
import { ResultType } from "@/types/submissionResult";
import Recommendation from "../ui/recommendation/recommendation";

if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  throw new Error("no backend url has been configured");
}

export default function ResultPage() {
  const [result, setResult] = useState<ResultType | null>(null);
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [answerSheet, setAnswerSheet] = useState<
    { id: string; selectedChoices: string[] }[] | null
  >(null);

  useEffect(() => {
    const storedResponses = sessionStorage.getItem(RESPONSES_KEY);
    if (!storedResponses) {
      throw new Error("no responses have been set");
    }

    const id = sessionStorage.getItem(ID_KEY);
    if (!id) {
      throw new Error("id has not been set");
    }
    setQuestionId(id);

    const responses: Record<string, string[] | null> =
      JSON.parse(storedResponses);
    if (Object.values(responses).some((res) => res == null)) {
      throw new Error("not all questions have been given an answer");
    }

    const sheet = Object.entries(responses).map(([id, selectedChoices]) => ({
      id,
      selectedChoices: selectedChoices || [],
    }));

    setAnswerSheet(sheet);
  }, []);

  useEffect(() => {
    async function submit() {
      if (!questionId || !answerSheet) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/questionnaire/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            questionId,
            responses: answerSheet,
          }),
        },
      );

      if (!res.ok) {
        throw new Error(
          `failed to submit answer sheet: ${res.status} - ${res.statusText}`,
        );
      }

      setResult(await res.json());
    }
    submit();
  }, [answerSheet, questionId]);

  return (
    <div className={`${styles.content}`}>
      <h1 className={`${styles.title} heading`}>
        Wir empfehlen folgende Produkte
      </h1>
      <div className={styles.recommendations}>
        {result != null &&
          result.recommendations.map((recommendation) => (
            <Recommendation
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
      </div>
      <Link href="/" className={`${styles.returnButton} button`}>
        zum Start
      </Link>
    </div>
  );
}
