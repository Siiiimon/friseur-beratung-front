import styles from "./question.module.css";
import type { QuestionType } from "@/types/questionnaire";

type QuestionProps = {
  question: QuestionType;
  onAnswer: (questionId: string, choiceId: string) => void;
};

export default function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className={styles.question}>
      <h1 className={`${styles.label} heading`}>{question.label}</h1>
      <ul className={styles.choiceList}>
        {question.choices.map((choice) => (
          <li key={choice.id}>
            <button
              className={`${styles.choice} button`}
              onClick={() => onAnswer(question.id, choice.id)}
            >
              {choice.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
