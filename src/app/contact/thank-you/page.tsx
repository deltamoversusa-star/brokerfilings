import Link from "next/link";

export const metadata = {
  title: "Message Sent — BrokerFilings",
};

export default function ContactThankYouPage() {
  return (
    <main
      className="min-h-screen bg-[#080C14] text-white flex items-center justify-center"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "480px", padding: "48px 32px" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg, #F59E0B, #D97706)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", margin: "0 auto 24px", boxShadow: "0 8px 32px rgba(245,158,11,0.35)" }}>
          ✓
        </div>
        <h1 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "12px" }}>
          Message received.
        </h1>
        <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: "1.7", marginBottom: "32px" }}>
          We'll get back to you within 2 hours on business days. Check your inbox — we reply from <span style={{ color: "#F59E0B" }}>info@brokerfilings.com</span>.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ padding: "12px 24px", borderRadius: "10px", background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#000", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
            Back to home
          </Link>
          <Link href="/get-started" style={{ padding: "12px 24px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>
            Start your filing →
          </Link>
        </div>
      </div>
    </main>
  );
}
