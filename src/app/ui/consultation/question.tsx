import styles from "./question.module.css";

type Choice = {
  id: string;
  label: string;
};

type QuestionProps = {
  question: {
    id: string;
    label: string;
    choices: Choice[];
  };
};

export default function Question({ question }: QuestionProps) {
  return (
    <div className={styles.question}>
      <h1 className={`${styles.label} heading`}>{question.label}</h1>
      <ul className={styles.choiceList}>
        {question.choices.map((choice) => (
          <li className={`${styles.choice} button`} key={choice.id}>
            {choice.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
