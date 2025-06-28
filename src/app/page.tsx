import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.content}>
      <h1 className="heading">Schön, dass du da bist.</h1>
      <p className="text">
        Probier heute aus, was dir gefällt: Volumen? Glanz? Locken? Glatt? Stell
        dir deine Pflege zusammen - sie ist in deiner heutigen Behaldnung
        inklusive
      </p>
      <a className="link-button">Los Gehts</a>
    </main>
  );
}
