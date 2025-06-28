import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.content}>
      <h1 className={`${styles.greeting} heading`}>Schön, dass du da bist.</h1>
      <p className={`${styles.intro} text`}>
        Probier heute aus, was dir gefällt: Volumen? Glanz? Locken? Glatt?
      </p>
      <p className={`${styles.intro} text`}>
        Stell dir deine Pflege zusammen - sie ist in deiner heutigen Behandlung
        inklusive
      </p>
      <a className={`${styles.beginButton} link-button`}>Los Gehts</a>
    </main>
  );
}
