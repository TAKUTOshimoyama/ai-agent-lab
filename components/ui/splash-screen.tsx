"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"show" | "fadeout" | "done">("show");

  useEffect(() => {
    // Start fade-out after 3s
    const fadeTimer = setTimeout(() => setPhase("fadeout"), 3000);
    // Fully done after 3s + 1.4s transition
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 4400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 1.4s ease-out",
        opacity: phase === "fadeout" ? 0 : 1,
        pointerEvents: phase === "fadeout" ? "none" : "all",
      }}
    >
      {/* Ring system */}
      <div style={{ position: "relative", width: 280, height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Ring 1 – outermost, slowest */}
        <div
          className="ring-cw-slow"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />

        {/* Ring 2 */}
        <div
          className="ring-ccw-med"
          style={{
            position: "absolute",
            inset: 20,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />

        {/* Ring 3 – dashed */}
        <div
          className="ring-cw-fast"
          style={{
            position: "absolute",
            inset: 44,
            borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.15)",
          }}
        />

        {/* Ring 4 – inner glow ring */}
        <div
          className="ring-ccw-med"
          style={{
            position: "absolute",
            inset: 70,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 0 18px rgba(255,255,255,0.07), inset 0 0 18px rgba(255,255,255,0.03)",
          }}
        />

        {/* Center glow */}
        <div
          style={{
            position: "absolute",
            inset: 100,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Center dot */}
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 12px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.3)",
          }}
        />

        {/* Logo centered over rings */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: "logo-appear 1.2s ease-out forwards",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 200,
              letterSpacing: "0.25em",
              fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            AIエージェント研究所
          </span>
        </div>
      </div>
    </div>
  );
}
