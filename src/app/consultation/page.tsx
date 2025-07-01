import Question from "../ui/consultation/question";

export default async function ConsultationPage() {
  const res = await fetch(`${process.env.BACKEND_URL}/questionnaire/new`);
  const { _id, questions } = await res.json();

  return <Question question={questions[0]}></Question>;
}
