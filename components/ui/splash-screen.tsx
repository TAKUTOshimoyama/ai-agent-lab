"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

const STYLES = `
  @keyframes splash-cw {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes splash-ccw {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes splash-logo {
    0%   { opacity: 0; letter-spacing: 0.4em; }
    100% { opacity: 1; letter-spacing: 0.25em; }
  }
  .splash-ring {
    position: absolute;
    border-radius: 50%;
    transform-origin: center center;
  }
  .splash-ring-1 { animation: splash-cw  16s linear infinite; }
  .splash-ring-2 { animation: splash-ccw 10s linear infinite; }
  .splash-ring-3 { animation: splash-cw   6s linear infinite; }
  .splash-ring-4 { animation: splash-ccw  8s linear infinite; }
  .splash-logo-anim { animation: splash-logo 1.2s ease-out forwards; }
`;

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"show" | "fadeout" | "done">("show");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fadeout"), 3000);
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
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
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
        {/* Ring container */}
        <div style={{ position: "relative", width: 280, height: 280 }}>

          {/* Ring 1 – outermost */}
          <div
            className="splash-ring splash-ring-1"
            style={{
              inset: 0,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          />

          {/* Ring 2 */}
          <div
            className="splash-ring splash-ring-2"
            style={{
              inset: 22,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />

          {/* Ring 3 – dashed */}
          <div
            className="splash-ring splash-ring-3"
            style={{
              inset: 48,
              border: "1px dashed rgba(255,255,255,0.18)",
            }}
          />

          {/* Ring 4 – inner glow */}
          <div
            className="splash-ring splash-ring-4"
            style={{
              inset: 76,
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 0 20px rgba(255,255,255,0.06), inset 0 0 20px rgba(255,255,255,0.03)",
            }}
          />

          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 12px rgba(255,255,255,0.9), 0 0 28px rgba(255,255,255,0.3)",
            }}
          />

          {/* Logo */}
          <div
            className="splash-logo-anim"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo.png"
              alt="仁株式会社"
              width={200}
              height={60}
              style={{ filter: "invert(1)", objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
