import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Pricing | EazyClassroom",
  description: "Start free. Pay as you grow. Per-room licensing with volume discounts, flat-rate AI, and no surprise overage bills.",
};

export default function PricingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "68px" }}>

        {/* HERO */}
        <section style={{ padding: "100px 0 60px", background: "#FFFFFF", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <span className="sp-badge">Pricing</span>
            <h1 className="sp-hero-title-new" style={{ marginTop: "16px" }}>
              Start free.<br />
              <span className="text-blue">Pay as you grow.</span>
            </h1>
            <p className="sp-hero-sub-new" style={{ margin: "0 auto 32px" }}>
              No per-seat AI markups. No surprise storage bills. Per-room licensing that gets cheaper as you scale.
              Everything you need to run an academy — nothing you don&apos;t.
            </p>
          </div>
        </section>

        {/* 3-TIER CARDS */}
        <section style={{ padding: "40px 0 100px", background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="row g-4">

              {/* Free */}
              <div className="col-lg-4">
                <div style={{ height: "100%", padding: "40px 32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Free Forever</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "48px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1 }}>$0</span>
                    <span style={{ fontSize: "16px", color: "#64748B", fontWeight: 600 }}>forever</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "32px", lineHeight: 1.6 }}>Everything you need to try EazyClassroom. No credit card.</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "14px", flexGrow: 1 }}>
                    {["1 native room", "1 external room (Zoom/Meet/Teams)", "2 GB cloud storage", "2 users", "1 social publishing account", "1 YouTube streaming room", "Basic features only"].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#334155" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" style={{ display: "block", textAlign: "center", padding: "14px", background: "#FFFFFF", color: "#0F172A", border: "1px solid #CBD5E1", borderRadius: "10px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>Start Free</Link>
                </div>
              </div>

              {/* Trial */}
              <div className="col-lg-4">
                <div style={{ height: "100%", padding: "40px 32px", background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)", border: "1px solid #1E40AF", borderRadius: "20px", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 20px 40px -20px rgba(37, 99, 235, 0.4)" }}>
                  <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#F59E0B", color: "#0F172A", fontSize: "11px", fontWeight: 800, padding: "6px 16px", borderRadius: "100px", letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#BFDBFE", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>14-Day Trial</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "48px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1 }}>$0</span>
                    <span style={{ fontSize: "16px", color: "#BFDBFE", fontWeight: 600 }}>for 14 days</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#DBEAFE", marginBottom: "32px", lineHeight: 1.6 }}>Full access to every feature. No card required.</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "14px", flexGrow: 1 }}>
                    {["3 native rooms", "5 external rooms", "Full AI analysis (BYOK)", "All add-ons unlocked", "Custom CRM redirect", "Live monitoring & alerts", "Unlimited social publishing"].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#FFFFFF" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" style={{ display: "block", textAlign: "center", padding: "14px", background: "#FFFFFF", color: "#1E40AF", borderRadius: "10px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>Start Free Trial</Link>
                </div>
              </div>

              {/* Pay-as-you-grow */}
              <div className="col-lg-4">
                <div style={{ height: "100%", padding: "40px 32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Pay As You Grow</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "20px", color: "#64748B", fontWeight: 600 }}>from</span>
                    <span style={{ fontSize: "48px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1 }}>$5</span>
                    <span style={{ fontSize: "16px", color: "#64748B", fontWeight: 600 }}>/room/mo</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "32px", lineHeight: 1.6 }}>Only pay for what you use. Prices drop automatically as you scale.</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "14px", flexGrow: 1 }}>
                    {["Unlimited rooms", "50 GB cloud storage per room", "FIFO auto-cleanup (no overage)", "Full AI, CRM, monitoring", "Volume discounts on rooms", "Yearly saves 2 months", "Everything in Trial"].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#334155" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" style={{ display: "block", textAlign: "center", padding: "14px", background: "#0F172A", color: "#FFFFFF", borderRadius: "10px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>Get Started</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* VOLUME TIERS */}
        <section style={{ padding: "100px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="sp-badge">Volume discounts</span>
              <h2 className="sp-access-title" style={{ marginTop: "16px" }}>The more you grow, the less you pay.</h2>
              <p className="sp-access-sub mx-auto">Volume discounts apply to your <strong>whole bill</strong> the moment you cross a tier — not just the extra rooms.</p>
            </div>
            <div className="row g-4">
              {[
                { tier: "Tier 1", range: "1 – 9 rooms", price: "$5.00", unit: "/room/mo", save: "", active: false },
                { tier: "Tier 2", range: "10 – 29 rooms", price: "$4.50", unit: "/room/mo", save: "Save 10%", active: true },
                { tier: "Tier 3", range: "30+ rooms", price: "$4.00", unit: "/room/mo", save: "Save 20%", active: true },
              ].map((row) => (
                <div key={row.tier} className="col-lg-4">
                  <div style={{ padding: "32px", background: "#FFFFFF", border: row.active ? "2px solid #2563EB" : "1px solid #E2E8F0", borderRadius: "16px", textAlign: "center", position: "relative" }}>
                    {row.save && (<div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#10B981", color: "#FFFFFF", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "100px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{row.save}</div>)}
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>{row.tier}</div>
                    <div style={{ fontSize: "14px", color: "#64748B", marginBottom: "16px" }}>{row.range}</div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "4px" }}>
                      <span style={{ fontSize: "36px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em" }}>{row.price}</span>
                      <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 600 }}>{row.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px", padding: "24px 32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ width: "48px", height: "48px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>💸</div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>Yearly saves 2 months</div>
                <div style={{ fontSize: "13px", color: "#64748B" }}>Pay for 10 months, use it for 12. Same volume discounts apply.</div>
              </div>
              <div style={{ fontSize: "20px", fontWeight: 900, color: "#10B981" }}>−16.7%</div>
            </div>
          </div>
        </section>

        {/* ADD-ONS */}
        <section style={{ padding: "100px 0", background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1100px" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="sp-badge">Add-ons</span>
              <h2 className="sp-access-title" style={{ marginTop: "16px" }}>Pick only what you need.</h2>
              <p className="sp-access-sub mx-auto">Flat-rate pricing. No per-seat AI markups. No hidden fees.</p>
            </div>
            <div className="row g-4">
              {[
                { icon: "AI", color: "#8B5CF6", bg: "#F5F3FF", price: "$10", per: "/mo", alt: "or $100/yr", name: "Eazy AI", desc: "Live AI analysis, session ratings, off-topic detection across audio, chat, screen, and drawing. Bring your own Gemini key — you pay Google directly for tokens." },
                { icon: "YT", color: "#EF4444", bg: "#FEF2F2", price: "$20", per: "/mo", alt: "or $200/yr", name: "YouTube Streaming", desc: "Stream unlimited rooms to YouTube — one flat price per admin. Paste a stream key once per room and you're live." },
                { icon: "SOC", color: "#2563EB", bg: "#EFF6FF", price: "$1", per: "/account/mo", alt: "or $10/yr each", name: "Social Publishing Accounts", desc: "Connect up to 6 platforms — Facebook, Instagram, YouTube, LinkedIn, Pinterest, TikTok. Publish to all from one dashboard. Add or remove accounts anytime." },
                { icon: "STR", color: "#10B981", bg: "#F0FDF4", price: "$0.12", per: "/GB/mo", alt: "drops to $0.08 at 1000+ GB", name: "Extra Cloud Storage", desc: "First 50 GB per room are included. Need more? Buy by the GB — tiered automatically. FIFO auto-clean protects you from ever getting an overage bill." },
              ].map((addon) => (
                <div key={addon.name} className="col-lg-6">
                  <div style={{ padding: "32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                      <div style={{ width: "48px", height: "48px", background: addon.bg, color: addon.color, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800 }}>{addon.icon}</div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "28px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1 }}>{addon.price}<span style={{ fontSize: "14px", color: "#64748B", fontWeight: 600 }}>{addon.per}</span></div>
                        <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 700, marginTop: "4px" }}>{addon.alt}</div>
                      </div>
                    </div>
                    <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>{addon.name}</h4>
                    <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "100px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="sp-badge">FAQ</span>
              <h2 className="sp-access-title" style={{ marginTop: "16px" }}>Common billing questions.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { q: "Do I need a credit card to start?", a: "No. You can use the Free tier indefinitely, or start the 14-day trial without entering a card. You only pay when you're ready to upgrade." },
                { q: "Is Eazy AI really just $10/month?", a: "Yes. We charge a flat $10/month for the dashboard. You bring your own Gemini API key — Google's free tier is powerful enough to process almost all daily sessions for a room. You pay Google directly for tokens with zero markup from us." },
                { q: "How does YouTube streaming pricing work?", a: "$20/month per admin gives you UNLIMITED YouTube streaming rooms. It's not per room. One price, no matter how many rooms you stream." },
                { q: "What happens if I go over my storage limit?", a: "We never charge you for storage overages. When a room hits its 50GB cap, our FIFO system automatically deletes the oldest recording first. You can also buy extra GB anytime at tiered rates." },
                { q: "Can I change my plan mid-month?", a: "Yes. Upgrades and downgrades are prorated automatically through Stripe. When you cross a volume tier (e.g., adding your 10th room), the discount applies to your whole bill instantly." },
                { q: "Do yearly plans save money?", a: "Yes — yearly billing gives you 2 months free (you pay for 10, use for 12). That's a 16.7% savings on top of the volume discounts." },
              ].map((item) => (
                <div key={item.q} style={{ padding: "24px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "10px" }}>{item.q}</h4>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="sp-cta-split">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="sp-cta-split-title">Simple pricing.<br /><span>Serious value.</span></h2>
                <p className="sp-cta-split-sub">Start free today. Upgrade only when you need to. Cancel anytime.</p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="/signup" className="sp-btn-white-solid">Start Free Trial</Link>
                  <Link href="/contact" className="sp-btn-white-outline">Talk to Sales</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="sp-cta-card">
                  <div className="sp-cta-card-label">Why academies choose us</div>
                  <ul className="sp-cta-card-list">
                    <li><span className="sp-cta-check">✓</span><span>No per-seat AI markups</span></li>
                    <li><span className="sp-cta-check">✓</span><span>No storage overage bills</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Whole-bill volume discounts</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Yearly saves 2 months</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Free tier forever</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterFour />
    </>
  );
}