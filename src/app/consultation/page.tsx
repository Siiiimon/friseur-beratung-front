import { Suspense } from "react";
import Questionnaire from "../ui/questionnaire/questionnaire";

if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  throw new Error("no backend url has been configured");
}

export default async function ConsultationPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/questionnaire/new`,
  );

  if (!res.ok) {
    throw new Error(
      `failed to fetch questionnaire: ${res.status} - ${res.statusText}`,
    );
  }

  const questionnaire = res.json();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Questionnaire questionnaire={questionnaire} />
    </Suspense>
  );
}
