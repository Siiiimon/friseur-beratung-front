import { Suspense } from "react";
import Questionnaire from "../ui/questionnaire/questionnaire";

export default async function ConsultationPage() {
  if (!process.env.BACKEND_URL) {
    throw new Error("no backend url has been configured");
  }

  const res = await fetch(`${process.env.BACKEND_URL}/questionnaire/new`);

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
