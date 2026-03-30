"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Tab = "online" | "text";

export default function ContactPage() {
  const [tab, setTab] = useState<Tab>("online");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Noto Sans JP', sans-serif",
    }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 3rem",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}>
        <Link href="/">
          <Image src="/logo.png" alt="仁株式会社" width={130} height={40}
            style={{ filter: "invert(1)", objectFit: "contain" }} priority />
        </Link>
        <Link href="/" style={{
          fontSize: "0.75rem", color: "rgba(255,255,255,0.4)",
          textDecoration: "none", letterSpacing: "0.08em",
          transition: "color 0.2s",
        }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.9)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)"; }}
        >
          ← トップへ戻る
        </Link>
      </nav>

      {/* Header */}
      <div style={{ padding: "110px 24px 48px", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.3)", marginBottom: "16px", textTransform: "uppercase" }}>
          Contact
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, margin: "0 0 16px", letterSpacing: "0.05em" }}>
          お問い合わせ
        </h1>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>
          現在大変多くのお問い合わせをいただいております。<br />
          特にお急ぎの方はお早めのお問い合わせをお願いいたします。
        </p>
      </div>

      {/* Tab switcher */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
        <div style={{
          display: "inline-flex",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "50px",
          padding: "4px",
          gap: "4px",
        }}>
          {([
            { key: "online", label: "オンライン相談" },
            { key: "text",   label: "文面でのご相談" },
          ] as { key: Tab; label: string }[]).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setTab(key); setSubmitted(false); }}
              style={{
                padding: "10px 28px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: tab === key ? 600 : 400,
                letterSpacing: "0.05em",
                transition: "all 0.25s",
                background: tab === key ? "#fff" : "transparent",
                color: tab === key ? "#000" : "rgba(255,255,255,0.45)",
                fontFamily: "inherit",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* ── Online tab ── */}
        {tab === "online" && (
          <div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: "28px", lineHeight: 1.8 }}>
              ご都合のよい日時を選択してください（30分間）<br />
              準備は何もいりません。気軽にお話しましょう。
            </p>
            {/* Google Calendar Appointment Scheduling begin */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/AcZssZ1Ptz1sPcfcYbQ2Cv1v82j4UG-Zq0yLrsV-ni8=?gv=true"
              style={{
                border: 0,
                width: "100%",
                display: "block",
                borderRadius: "12px",
                background: "#fff",
              }}
              width="100%"
              height="900"
              frameBorder={0}
            />
            {/* end Google Calendar Appointment Scheduling */}
          </div>
        )}

        {/* ── Text form tab ── */}
        {tab === "text" && (
          submitted ? (
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "24px" }}>✓</div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 300, marginBottom: "12px", letterSpacing: "0.05em" }}>
                送信が完了しました
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                確認メールをお送りいたします。しばらくお待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

              {/* お名前 */}
              <div>
                <label style={labelStyle}>
                  お名前 <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input name="name" required value={form.name} onChange={handleChange}
                  placeholder="山田 太郎" style={inputStyle}
                  onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label style={labelStyle}>
                  メールアドレス <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="taro@example.com" style={inputStyle}
                  onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
              </div>

              {/* 会社名 / 役職名 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>会社名 <span style={optStyle}>（任意）</span></label>
                  <input name="company" value={form.company} onChange={handleChange}
                    placeholder="株式会社〇〇" style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>役職名 <span style={optStyle}>（任意）</span></label>
                  <input name="position" value={form.position} onChange={handleChange}
                    placeholder="代表取締役" style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                  />
                </div>
              </div>

              {/* ご相談内容（必須） */}
              <div>
                <label style={labelStyle}>
                  ご相談内容 <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea name="note" required value={form.note} onChange={handleChange}
                  placeholder="ご相談内容やご要望をご記入ください"
                  rows={6}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                  onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                />
              </div>

              {/* Submit */}
              <div>
                <button type="submit" style={btnStyle}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e5e7eb"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
                >
                  送信する
                </button>
                <p style={{ textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", marginTop: "12px" }}>
                  送信後、確認メールをお送りいたします。
                </p>
              </div>

            </form>
          )
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.82rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.75)",
  marginBottom: "8px",
  letterSpacing: "0.03em",
};

const optStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.3)",
  fontWeight: 400,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "10px",
  fontSize: "0.88rem",
  color: "#fff",
  background: "rgba(255,255,255,0.04)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Noto Sans JP', sans-serif",
};

const btnStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "50px",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  letterSpacing: "0.08em",
  transition: "background 0.2s",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Noto Sans JP', sans-serif",
};
