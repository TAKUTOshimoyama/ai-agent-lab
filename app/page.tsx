"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SplashScreen } from "@/components/ui/splash-screen";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const RESULTS = [
  "仕入れ業務の改善\n年間250万のコスト削減",
  "製造業の機械トラブルを即時解決\n年間200万のコスト削減",
  "現場監督の事務作業を激減\n年間720万のコスト削減",
];

const SOLUTIONS = [
  {
    label: "RAG",
    title: "RAG",
    desc: "社内ドキュメントや業務データをナレッジ化。AIが即座に正確な情報を検索・回答し、問い合わせ対応を自動化します。",
    icon: "◈",
  },
  {
    label: "DATA",
    title: "データサイエンス",
    desc: "蓄積されたビジネスデータを解析し、需要予測・異常検知・経営判断を支援する予測モデルを構築します。",
    icon: "◉",
  },
  {
    label: "AUTO",
    title: "業務の自動化",
    desc: "繰り返し発生する事務処理・承認フロー・レポート生成をAIが自律実行。人的リソースをコア業務へ集中させます。",
    icon: "◎",
  },
];

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />

      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.9s ease-out",
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* ── Navigation ── */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 3rem",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <Image
            src="/logo.png"
            alt="仁株式会社"
            width={160}
            height={48}
            style={{ filter: "invert(1)", objectFit: "contain" }}
            priority
          />
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {["ユースケース", "ソリューション"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                }}
              >
                {item}
              </a>
            ))}
            <Link
              href="/contact"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
              }}
            >
              お問い合わせ
            </Link>
          </div>
        </nav>

        {/* ── Hero / Results Section ── */}
        <section
          id="ユースケース"
          className="dot-grid"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "8rem 2rem 6rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60vw",
              height: "60vw",
              maxWidth: 600,
              maxHeight: 600,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              textAlign: "center",
              maxWidth: 900,
              width: "100%",
              position: "relative",
            }}
          >
            <p className="section-label" style={{ marginBottom: "3rem" }}>
              ユースケース
            </p>

            {/* GooeyText container — fixed height so absolute spans have space */}
            <div style={{ height: "clamp(220px, 28vw, 320px)", width: "100%", position: "relative" }}>
              <GooeyText
                texts={RESULTS}
                morphTime={1.2}
                cooldownTime={4}
                className="absolute inset-0 w-full h-full"
                textClassName="text-2xl md:text-3xl lg:text-4xl font-light whitespace-pre-line leading-[1.7] max-w-[820px]"
              />
            </div>

            {/* Divider */}
            <div
              style={{
                marginTop: "4rem",
                width: 40,
                height: 1,
                background: "rgba(255,255,255,0.15)",
                margin: "4rem auto 0",
              }}
            />

            {/* Stats row */}
            <div
              style={{
                marginTop: "3.5rem",
                display: "flex",
                justifyContent: "center",
                gap: "4rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "250万", unit: "円", label: "仕入れコスト削減" },
                { value: "200万", unit: "円", label: "製造トラブル削減" },
                { value: "720万", unit: "円", label: "現場事務作業削減" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 200,
                      letterSpacing: "0.05em",
                      color: "#fff",
                    }}
                  >
                    年間
                    <span style={{ fontSize: "2rem", fontWeight: 300 }}>{s.value}</span>
                    {s.unit}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "0.4rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solutions Section ── */}
        <section
          id="ソリューション"
          style={{
            padding: "8rem 2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "#000",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <p className="section-label" style={{ marginBottom: "1.2rem" }}>
                Services
              </p>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 200,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                ソリューション
              </h2>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                RAG・データサイエンス・業務の自動化を手がける会社
              </p>
            </div>

            {/* AI Architecture visual */}
            <div
              style={{
                position: "relative",
                margin: "0 auto 5rem",
                maxWidth: 700,
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.015)",
              }}
            >
              {/* Subtle label */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                AI Architecture
              </div>

              <CpuArchitecture
                text="AI"
                width="100%"
                height="220px"
                className="text-white/20"
              />
            </div>

            {/* Solution cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {SOLUTIONS.map((sol) => (
                <div
                  key={sol.label}
                  style={{
                    background: "#000",
                    padding: "2.5rem",
                    transition: "background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#0a0a0a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#000";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.35em",
                      color: "rgba(255,255,255,0.2)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {sol.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "1.2rem",
                      opacity: 0.6,
                    }}
                  >
                    {sol.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 300,
                      letterSpacing: "0.08em",
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    {sol.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section
          id="お問い合わせ"
          style={{
            padding: "8rem 2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <p className="section-label" style={{ marginBottom: "2rem" }}>
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 200,
              letterSpacing: "0.15em",
              marginBottom: "1.5rem",
            }}
          >
            お問い合わせ
          </h2>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              marginBottom: "3rem",
            }}
          >
            導入のご相談・ご質問はお気軽にどうぞ
          </p>
          <a
            href="mailto:info@ai-agent-lab.jp"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "4px",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.05)";
              el.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            お問い合わせはこちら
          </a>
        </section>

        {/* ── Footer ── */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "2rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Image
            src="/logo.png"
            alt="仁株式会社"
            width={100}
            height={30}
            style={{ filter: "invert(1) opacity(0.35)", objectFit: "contain" }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            © 2026 仁株式会社. All rights reserved.
          </span>
        </footer>
      </div>
    </>
  );
}
