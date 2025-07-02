"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  sessionStorage.clear();

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
      <Link href="/consultation" className={`${styles.beginButton} button`}>
        Los Geht&apos;s
      </Link>
    </main>
  );
}
