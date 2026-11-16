import Link from "next/link";

export const metadata = {
  title: "Page Not Found | EazyClassroom",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC", fontFamily: "system-ui, -apple-system, sans-serif", padding: "24px" }}>
      <div style={{ textAlign: "center", maxWidth: "560px" }}>
        <div style={{ fontSize: "120px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "16px" }}>404</div>
        <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", margin: "0 0 12px" }}>Page not found</h1>
        <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.6, margin: "0 0 32px" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Back to Home</Link>
          <Link href="/contact" style={{ display: "inline-block", background: "#FFFFFF", color: "#0F172A", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none", border: "1px solid #CBD5E1" }}>Contact Support</Link>
        </div>
      </div>
    </main>
  );
}
