import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EazyClassroom",
  description: "How EazyClassroom collects, uses, and protects your academy's data.",
};

const sections = [
  { id: "collect", num: "01", title: "Information we collect" },
  { id: "use", num: "02", title: "How we use your data" },
  { id: "ai", num: "03", title: "AI & third-party services" },
  { id: "storage", num: "04", title: "Data storage & retention" },
  { id: "rights", num: "05", title: "Your rights" },
  { id: "security", num: "06", title: "Security" },
  { id: "children", num: "07", title: "Children's privacy" },
  { id: "contact", num: "08", title: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "68px", background: "#FEFEFE", fontFamily: "Georgia, 'Times New Roman', serif" }}>

        {/* ============ HERO (Editorial) ============ */}
        <section style={{ padding: "120px 24px 60px", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "40px" }}>
              Legal Document
            </div>
            <h1 style={{ fontSize: "clamp(56px, 8vw, 96px)", fontWeight: 400, color: "#111827", letterSpacing: "-0.04em", lineHeight: 0.95, margin: "0 0 40px", fontStyle: "italic" }}>
              Privacy Policy
            </h1>
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", fontFamily: "system-ui, sans-serif" }}>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                  Effective
                </div>
                <div style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>
                  November 7, 2026
                </div>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                  Jurisdictions
                </div>
                <div style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>
                  GDPR · CCPA · COPPA
                </div>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                  Read time
                </div>
                <div style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>
                  ~6 minutes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PREFACE ============ */}
        <section style={{ padding: "60px 24px 40px" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <p style={{ fontSize: "22px", lineHeight: 1.6, color: "#374151", margin: 0, fontWeight: 400 }}>
              Your academy&apos;s data belongs to you. <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, verticalAlign: "middle", marginLeft: "4px" }}>§ 00</span> This document explains what we collect, why we collect it, how long we keep it, and how you can control it. We&apos;ve written it in plain English — no legal jargon, no traps.
            </p>
          </div>
        </section>

        {/* ============ TABLE OF CONTENTS ============ */}
        <section style={{ padding: "40px 24px 80px" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
              Contents
            </div>
            <div className="row g-3">
              {sections.map((s) => (
                <div key={s.id} className="col-md-6">
                  <a href={`#${s.id}`} style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    padding: "12px 0",
                    borderBottom: "1px solid #F3F4F6",
                    textDecoration: "none",
                    fontFamily: "system-ui, sans-serif",
                    color: "#111827",
                  }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.05em", flexShrink: 0 }}>
                      {s.num}
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: 500 }}>
                      {s.title}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTIONS ============ */}
        <section style={{ padding: "20px 24px 120px" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>

            {/* 01 */}
            <div id="collect" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 01
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Information we collect
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>We only collect what we need to run your academy. Specifically:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Account information</strong> — your name, email, password (hashed with bcrypt), and academy name.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Academy content</strong> — room names, schedules, course materials (PDFs, images), and any branding you upload.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Tutor and student data</strong> — names, emails, and room logins that you create inside your dashboard.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Session recordings</strong> — video, audio, and screen-share from live classes. Stored locally on the tutor&apos;s PC and in your cloud via MediaMTX.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>AI analysis data</strong> — transcripts, engagement metrics, and off-topic detection events. Processed via your own Google Gemini key.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Billing information</strong> — processed entirely by Stripe. We never see or store your card number.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Usage data</strong> — IP address, browser type, device, and pages visited. Used for security and product improvement.</p>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div id="use" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 02
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                How we use your data
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>Your data is used only for the following purposes:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <p style={{ margin: 0 }}>Providing the EazyClassroom service — hosting rooms, processing schedules, delivering recordings, generating AI reports.</p>
                  <p style={{ margin: 0 }}>Processing payments through Stripe and issuing invoices.</p>
                  <p style={{ margin: 0 }}>Sending transactional emails — password resets, booking confirmations, disconnection alerts.</p>
                  <p style={{ margin: 0 }}>Detecting fraud, abuse, and security threats.</p>
                  <p style={{ margin: 0 }}>Improving the product — aggregated, anonymized usage statistics only.</p>
                </div>
                <p style={{ marginTop: "24px", fontStyle: "italic", color: "#111827" }}>
                  <strong>We never sell your data.</strong> We do not run ads. We do not share your academy&apos;s content with any third party except as required to operate the service (see Section 03).
                </p>
              </div>
            </div>

            {/* 03 */}
            <div id="ai" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 03
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                AI &amp; third-party services
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>EazyClassroom integrates with several services to deliver its features. Each is governed by its own privacy policy:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Google Gemini</strong> — our AI analysis uses <em>your own API key</em>. All AI requests are sent directly from EazyClassroom&apos;s backend to Google using your key. Google&apos;s privacy policy applies to that processing. You can revoke access anytime by removing the key.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Stripe</strong> — payment processing. Stripe stores your card and handles all PCI compliance. We never touch card data.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>QLERS</strong> — social media OAuth. Used only when you connect Facebook, Instagram, YouTube, LinkedIn, Pinterest, or TikTok. QLERS stores your access tokens and relays posts on your behalf.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Zoom, Google Meet, Microsoft Teams</strong> — if you link an external room, the meeting is hosted on their infrastructure. Their policies govern the meeting itself.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>MediaMTX / cloud storage</strong> — recordings are stored in your EazyClassroom cloud account, encrypted in transit and at rest.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Firebase (notifications)</strong> — used to deliver in-app and browser push notifications for disconnection and keyword alerts.</p>
                </div>
                <p style={{ marginTop: "24px" }}>We only share the minimum data required for each integration to function. No other third party has access to your data.</p>
              </div>
            </div>

            {/* 04 */}
            <div id="storage" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 04
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Data storage &amp; retention
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>We keep your data only as long as needed:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Account data</strong> — retained while your account is active. Deleted within 30 days of account closure.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Recordings</strong> — stored up to your 50 GB per-room limit. When the limit is reached, FIFO auto-deletes the oldest recordings first.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Local recordings on tutor PCs</strong> — stored on the tutor&apos;s device until they are deleted by the tutor (if permitted) or by an admin with the Windows administrator password.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>AI reports</strong> — kept for 90 days, then archived. You can delete them manually at any time.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Billing history</strong> — kept for 7 years to comply with tax and accounting laws.</p>
                </div>
                <p style={{ marginTop: "24px" }}>If you delete your account, everything except billing history is permanently removed within 30 days.</p>
              </div>
            </div>

            {/* 05 */}
            <div id="rights" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 05
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Your rights
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>You have full control over your academy&apos;s data. You can:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Access</strong> — export a full copy of your data from the Settings page at any time.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Correct</strong> — update any information in your dashboard immediately.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Delete</strong> — request permanent deletion of your account and all associated data.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Restrict</strong> — turn off AI analysis, recording, or specific integrations at the room or academy level.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Object</strong> — contact us if you disagree with any data processing.</p>
                </div>
                <p style={{ marginTop: "24px" }}>If you are in the EU, UK, or California, you have additional rights under GDPR and CCPA. Email <a href="mailto:privacy@eazyclassroom.net" style={{ color: "#111827", textDecoration: "underline", fontWeight: 600 }}>privacy@eazyclassroom.net</a> and we will respond within 30 days.</p>
              </div>
            </div>

            {/* 06 */}
            <div id="security" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 06
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Security
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>We take security seriously, both on our servers and on tutor PCs:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Encryption in transit</strong> — all connections use TLS 1.2 or higher.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Encryption at rest</strong> — recordings, databases, and backups are encrypted.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Password hashing</strong> — passwords are hashed with bcrypt, never stored in plaintext.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Admin lockdown on local PCs</strong> — if EazyRecorder is installed on a standard Windows account, only the Windows administrator can access or delete local recordings.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Access controls</strong> — only authorized EazyClassroom engineers can access production systems, and every access is logged.</p>
                  <p style={{ margin: 0 }}><strong style={{ color: "#111827", fontWeight: 600 }}>Regular audits</strong> — we run automated security scans and periodic third-party penetration tests.</p>
                </div>
                <p style={{ marginTop: "24px" }}>If you believe your account has been compromised, email <a href="mailto:security@eazyclassroom.net" style={{ color: "#111827", textDecoration: "underline", fontWeight: 600 }}>security@eazyclassroom.net</a> immediately.</p>
              </div>
            </div>

            {/* 07 */}
            <div id="children" style={{ scrollMarginTop: "100px", marginBottom: "80px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 07
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Children&apos;s privacy
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>EazyClassroom is used by academies to teach students of all ages, including minors. We take this responsibility seriously:</p>
                <div style={{ paddingLeft: "24px", borderLeft: "2px solid #F3F4F6", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <p style={{ margin: 0 }}>Academies are responsible for obtaining parental consent before creating student accounts.</p>
                  <p style={{ margin: 0 }}>Student data is only visible to the academy that created the account — never shared across tenants.</p>
                  <p style={{ margin: 0 }}>Parent Portal accounts (where enabled) let parents see their own child&apos;s activity, recordings, and AI reports.</p>
                  <p style={{ margin: 0 }}>We do not run ads, sell data, or use children&apos;s data for any purpose other than providing the service.</p>
                  <p style={{ margin: 0 }}>We comply with COPPA (US) and GDPR Article 8 (EU) requirements for educational platforms.</p>
                </div>
                <p style={{ marginTop: "24px" }}>If you believe a child&apos;s data has been collected in violation of these rules, contact us immediately and we will investigate within 24 hours.</p>
              </div>
            </div>

            {/* 08 */}
            <div id="contact" style={{ scrollMarginTop: "100px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                Section 08
              </div>
              <h2 style={{ fontSize: "36px", fontWeight: 400, color: "#111827", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 32px" }}>
                Contact us
              </h2>
              <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151" }}>
                <p style={{ marginBottom: "24px" }}>Questions about this policy? Reach out:</p>
                <div style={{ borderTop: "1px solid #E5E7EB" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E5E7EB", fontFamily: "system-ui, sans-serif", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", minWidth: "120px" }}>Privacy</span>
                    <a href="mailto:privacy@eazyclassroom.net" style={{ fontSize: "16px", color: "#111827", fontWeight: 500, textDecoration: "underline" }}>privacy@eazyclassroom.net</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", padding: "20px 0", borderBottom: "1px solid #E5E7EB", fontFamily: "system-ui, sans-serif", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", minWidth: "120px" }}>Security</span>
                    <a href="mailto:security@eazyclassroom.net" style={{ fontSize: "16px", color: "#111827", fontWeight: 500, textDecoration: "underline" }}>security@eazyclassroom.net</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "24px", padding: "20px 0", fontFamily: "system-ui, sans-serif", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.15em", textTransform: "uppercase", minWidth: "120px" }}>Response</span>
                    <span style={{ fontSize: "16px", color: "#111827", fontWeight: 500 }}>Within 48 hours · 24 hours for security</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============ FOOTNOTE ============ */}
        <section style={{ padding: "40px 24px 100px", borderTop: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9CA3AF", lineHeight: 1.7, letterSpacing: "0.02em" }}>
            This policy is effective as of November 7, 2026. We may update it periodically and will notify you by email of any material changes. Continued use of EazyClassroom after changes take effect constitutes acceptance.
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section style={{ padding: "80px 24px", background: "#0A0A0A" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0, fontStyle: "italic" }}>
              Questions about your data?
            </h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#FFFFFF", color: "#0A0A0A", padding: "14px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "13px", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>
                Contact →
              </Link>
              <Link href="/terms" style={{ display: "inline-block", background: "transparent", color: "#FFFFFF", padding: "14px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "13px", textDecoration: "none", border: "1px solid #333333", fontFamily: "system-ui, sans-serif" }}>
                Terms
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterFour />
    </>
  );
}