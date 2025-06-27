import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friseur Produktberatung",
  description: "dialogbasiertes Frage-Antwort-System zur Produktempfehlung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
