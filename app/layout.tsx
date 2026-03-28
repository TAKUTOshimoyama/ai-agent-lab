import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "仁株式会社",
  description: "RAG・データサイエンス・業務の自動化を手がける会社",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
