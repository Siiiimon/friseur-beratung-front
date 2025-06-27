import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.content}>
      <h1>Schön, dass du da bist.</h1>
      <p>
        Probier heute aus, was dir gefällt: Volumen? Glanz? Locken? Glatt? Stell
        dir deine Pflege zusammen - sie ist in deiner heutigen Behaldnung
        inklusive
      </p>
      <a>Los Gehts</a>
    </main>
  );
}
