import type { RecommendationType } from "@/types/submissionResult";
import styles from "./recommendation.module.css";

export default function Recommendation({
  recommendation,
}: {
  recommendation: RecommendationType;
}) {
  return (
    <div className={styles.card}>
      <h3 className={`${styles.name} heading`}>{recommendation.name}</h3>
      <h5 className={`${styles.category} heading`}>{recommendation.tag}</h5>
      <p className={`${styles.description} text`}>
        {recommendation.description}
      </p>
    </div>
  );
}
