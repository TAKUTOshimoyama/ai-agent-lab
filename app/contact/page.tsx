"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "-apple-system, BlinkMacSystemFont, 'Noto Sans JP', sans-serif" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 3rem",
        borderBottom: "1px solid #e5e7eb",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}>
        <Link href="/">
          <Image src="/logo.png" alt="仁株式会社" width={130} height={40} style={{ objectFit: "contain" }} priority />
        </Link>
        <Link href="/" style={{ fontSize: "0.75rem", color: "#6b7280", textDecoration: "none", letterSpacing: "0.08em" }}>
          ← トップへ戻る
        </Link>
      </nav>

      {/* Header */}
      <div style={{
        background: "#f3f4f6",
        padding: "100px 24px 56px",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          お問い合わせ
        </h1>
        <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
          現在大変多くのお問い合わせをいただいております。<br />
          特にお急ぎの方はお早めのお問い合わせをお願いいたします。
        </p>
      </div>

      {/* Form */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px 80px" }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "80px 24px" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "24px" }}>✓</div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "12px" }}>
              送信が完了しました
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
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
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                style={inputStyle}
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label style={labelStyle}>
                メールアドレス <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="taro@example.com"
                style={inputStyle}
              />
            </div>

            {/* 会社名 / 役職名 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>会社名 <span style={{ color: "#9ca3af", fontWeight: 400 }}>（任意）</span></label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>役職名 <span style={{ color: "#9ca3af", fontWeight: 400 }}>（任意）</span></label>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="代表取締役"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* 備考 */}
            <div>
              <label style={labelStyle}>備考 <span style={{ color: "#9ca3af", fontWeight: 400 }}>（任意）</span></label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="ご相談内容やご要望があればご記入ください"
                rows={4}
                style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
              />
            </div>

            {/* Google Calendar */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111" }}>日程を選択</span>
                <span style={{ fontSize: "0.78rem", color: "#6b7280" }}>準備は何もいりません。気軽にお話しましょう。</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: "0 0 12px" }}>
                ご都合のよい日時を選択してください（各20分間）・任意
              </p>
              {/* Google Calendar Appointment Scheduling begin */}
              <iframe
                src="https://calendar.google.com/calendar/appointments/AcZssZ1Ptz1sPcfcYbQ2Cv1v82j4UG-Zq0yLrsV-ni8=?gv=true"
                style={{ border: 0, borderRadius: "8px", width: "100%" }}
                width="100%"
                height="600"
                frameBorder={0}
              />
              {/* end Google Calendar Appointment Scheduling */}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "18px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2563eb"; }}
              >
                問い合わせを確定
              </button>
              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#9ca3af", marginTop: "12px" }}>
                送信後、確認メールをお送りいたします。
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "#111",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "0.9rem",
  color: "#111",
  background: "#fff",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Noto Sans JP', sans-serif",
};
