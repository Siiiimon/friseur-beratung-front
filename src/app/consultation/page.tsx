import { Suspense } from "react";
import Questionnaire from "../ui/questionnaire/questionnaire";

export default async function ConsultationPage() {
  const res = await fetch(`${process.env.BACKEND_URL}/questionnaire/new`);
  const questionnaire = res.json();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Questionnaire questionnaire={questionnaire} />
    </Suspense>
  );
}
