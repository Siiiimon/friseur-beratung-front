"use client";
import { RESPONSES_KEY } from "@/constants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useSessionStoredResponses(
  initial: Record<string, string[] | null>,
): [
  Record<string, string[] | null>,
  Dispatch<SetStateAction<Record<string, string[] | null>>>,
] {
  const [responses, setResponses] = useState<Record<string, string[] | null>>(
    () => {
      try {
        const r = sessionStorage.getItem(RESPONSES_KEY);
        return r ? JSON.parse(r) : initial;
      } catch {
        return initial;
      }
    },
  );

  useEffect(() => {
    try {
      sessionStorage.setItem("responses", JSON.stringify(responses));
    } catch {}
  }, [responses]);

  return [responses, setResponses];
}
