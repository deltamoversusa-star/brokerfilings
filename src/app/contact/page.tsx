"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen bg-[#080C14] text-white overflow-x-hidden"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-15%", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", background: "rgba(8,12,20,0.8)", position: "sticky", top: 0, zIndex: 50 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #F59E0B, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>✦</div>
          <span style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "-0.02em", color: "white" }}>BrokerFilings</span>
        </Link>
        <Link href="/" style={{ fontSize: "13px", fontWeight: "700", color: "#000", padding: "9px 20px", borderRadius: "8px", textDecoration: "none", background: "linear-gradient(135deg, #F59E0B, #D97706)", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}>
          Get Started →
        </Link>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", padding: "80px 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#F59E0B", fontSize: "11px", fontWeight: "700", padding: "6px 16px", borderRadius: "100px", marginBottom: "24px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            ✦ Get in Touch
          </div>
          <h1 style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: "800", lineHeight: "1.05", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            We're here to help.
          </h1>
          <p style={{ fontSize: "17px", color: "#94A3B8", maxWidth: "500px", margin: "0 auto", lineHeight: "1.7" }}>
            Whether you're starting a new brokerage or need help with your FMCSA filing — reach out and we'll get back to you within 2 hours on business days.
          </p>
        </div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "40px", alignItems: "start" }}>

          {/* ── LEFT: Contact info cards ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Email */}
            <a href="mailto:info@brokerfilings.com" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(15,20,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px", display: "flex", gap: "18px", alignItems: "flex-start", transition: "border-color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>✉️</div>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Email us</p>
                  <p style={{ fontSize: "15px", fontWeight: "700", color: "#fff", marginBottom: "4px" }}>info@brokerfilings.com</p>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6" }}>We reply within 2 hours on business days.</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+1-407-603-1835" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(15,20,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px", display: "flex", gap: "18px", alignItems: "flex-start", transition: "border-color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>📞</div>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Call us</p>
                  <p style={{ fontSize: "15px", fontWeight: "700", color: "#fff", marginBottom: "4px" }}>(407) 603-1835</p>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6" }}>Mon – Fri, 9 AM – 6 PM EST.</p>
                </div>
              </div>
            </a>

            {/* Who this is for */}
            <div style={{ background: "rgba(15,20,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Who we support</p>
              {[
                { icon: "📋", role: "New Broker Applicants", note: "FMCSA authority, MC number, filing questions" },
                { icon: "🚚", role: "Existing Brokers",       note: "Renewals, updates, compliance questions" },
                { icon: "💼", role: "General Inquiries",      note: "Pricing, timelines, process questions" },
              ].map(({ icon, role, note }) => (
                <div key={role} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: "#fff", marginBottom: "2px" }}>{role}</p>
                    <p style={{ fontSize: "12px", color: "#64748B" }}>{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Contact form ── */}
          <div style={{ background: "rgba(15,20,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "40px 36px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em", marginBottom: "6px" }}>Send us a message</h2>
            <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "32px" }}>Fill out the form and we'll get back to you shortly.</p>

            <form
              action="https://formsubmit.co/info@brokerfilings.com"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Honeypot + redirect */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://brokerfilings.com/contact/thank-you" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    Full name <span style={{ color: "#F59E0B" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Marcus T."
                    style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "white", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    Email <span style={{ color: "#F59E0B" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "white", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "white", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Role */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                  Inquiry type <span style={{ color: "#F59E0B" }}>*</span>
                </label>
                <select
                  name="role"
                  required
                  defaultValue=""
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "#94A3B8", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif", appearance: "none" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <option value="" disabled>Select your inquiry type</option>
                  <option value="new-filing">New FMCSA Broker Filing</option>
                  <option value="renewal">Renewal or Update</option>
                  <option value="status">Filing Status Check</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                  Subject <span style={{ color: "#F59E0B" }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Question about my FMCSA filing"
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "white", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                  Message <span style={{ color: "#F59E0B" }}>*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need help with…"
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px 14px", fontSize: "14px", color: "white", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(245,158,11,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{ padding: "14px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#000", fontWeight: "800", fontSize: "15px", border: "none", cursor: "pointer", boxShadow: "0 8px 32px rgba(245,158,11,0.35)", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.01em" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Send message →
              </button>

              <p style={{ fontSize: "12px", color: "#475569", textAlign: "center", marginTop: "-4px" }}>
                We typically reply within 2 hours · Mon – Fri, 9 AM – 6 PM EST
              </p>
            </form>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div style={{ marginTop: "80px", textAlign: "center", padding: "48px", background: "rgba(15,20,30,0.6)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: "24px" }}>
          <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "12px" }}>Ready to get your broker authority?</p>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "10px", background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#000", fontWeight: "800", fontSize: "14px", textDecoration: "none", boxShadow: "0 8px 32px rgba(245,158,11,0.3)" }}>
            Start your filing →
          </Link>
          <p style={{ fontSize: "12px", color: "#475569", marginTop: "10px" }}>Fast processing · FMCSA compliant · Expert support</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 48px", maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "linear-gradient(135deg, #F59E0B, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>✦</div>
          <span style={{ fontSize: "13px", color: "#8B9CB6" }}>© 2026 BrokerFilings. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[["Home", "/"], ["Pricing", "/pricing"], ["Contact", "/contact"], ["Terms", "/terms"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: "13px", color: "#8B9CB6", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
