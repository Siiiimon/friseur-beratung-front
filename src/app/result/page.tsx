"use client";
import { useEffect, useState } from "react";
import { ID_KEY, RESPONSES_KEY } from "@/constants";

export default function ResultPage() {
  const [result, setResult] = useState({});

  if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
    throw new Error("no backend url has been configured");
  }

  const storedResponses = sessionStorage.getItem(RESPONSES_KEY);
  if (!storedResponses) {
    throw new Error("no responses have been set");
  }

  const id = sessionStorage.getItem(ID_KEY);
  if (!id) {
    throw new Error("id has not been set");
  }

  const responses: Record<string, string[] | null> =
    JSON.parse(storedResponses);
  if (Object.values(responses).some((res) => res == null)) {
    throw new Error("not all questions have been given an answer");
  }

  const answerSheet = Object.entries(responses).map(
    ([id, selectedChoices]) => ({
      id,
      selectedChoices: selectedChoices || [],
    }),
  );

  useEffect(() => {
    async function submit() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/questionnaire/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
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
  });

  return <pre>{JSON.stringify(result)}</pre>;
}
