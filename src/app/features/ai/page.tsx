import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Eazy AI Live Analysis | EazyClassroom",
  description: "Real-time AI that analyzes live sessions, generates ratings, and detects off-topic behavior via audio, chat, screensharing, and drawing tools.",
};

export default function AIPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "68px" }}>

        {/* ============ 1. HERO (Split Layout) ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Eazy AI powered by Gemini</span>
                <h1 className="sp-hero-title-new">
                  Real-time AI.<br />
                  <span className="text-blue">Not just a post-class summary.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Eazy AI doesn't wait until the class ends. It analyzes the live session, rates the teacher's performance, and instantly detects off-topic behavior across audio, chat, screen sharing, and drawing tools.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Hero Visual: Live AI processing */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">
                  
                  {/* Floating Alert */}
                  <div className="sp-hv-floating lock-card" style={{ bottom: '20px', left: '-20px', borderLeftColor: '#EF4444', zIndex: 10 }}>
                    <div className="sp-hv-lock-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>⚠️</div>
                    <div>
                      <strong>Off-Topic Detected</strong>
                      <p>Chat: "Let's play a game"</p>
                    </div>
                  </div>

                  {/* Main Card */}
                  <div className="sp-hv-main" style={{ transform: 'rotate(2deg)', padding: '24px', background: '#FFFFFF' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <div className="d-flex align-items-center gap-2">
                        <span className="sp-dot green" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Live Analysis Running</span>
                      </div>
                      <span className="sp-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '10px' }}>Gemini BYOK</span>
                    </div>

                    <div className="d-flex align-items-center gap-4 mb-4">
                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <strong style={{ fontSize: '28px', color: '#2563EB', lineHeight: 1 }}>92</strong>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#64748B' }}>/ 100</span>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '14px', color: '#0F172A', marginBottom: '4px' }}>Current Session Rating</strong>
                        <span style={{ fontSize: '12px', color: '#64748B' }}>Engagement & Clarity scores updating live.</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between" style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                        <span>Scanning Audio</span> <span style={{ color: '#10B981' }}>Active</span>
                      </div>
                      <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', background: '#10B981', borderRadius: '100px' }}></div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between" style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                        <span>Scanning Screen Share</span> <span style={{ color: '#10B981' }}>Active</span>
                      </div>
                      <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', background: '#10B981', borderRadius: '100px' }}></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 2. THE THREE CORE FEATURES ============ */}
        <section className="sp-flow-section">
          <div className="container">
            <div className="sp-flow-header text-center">
              <h2>Three superpowers. Zero extra effort.</h2>
              <p style={{ color: '#64748B', fontSize: '18px', marginTop: '16px' }}>Eazy AI works silently in the background while the class is happening.</p>
            </div>

            <div className="row g-4 mt-4">
              
              {/* Feature 1: Live Analysis */}
              <div className="col-lg-4">
                <div className="sp-bento-card" style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#EFF6FF', color: '#2563EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Live Session Analysis</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Unlike other tools that wait until the end of the class, our AI processes the video and audio chunks in <strong>real-time</strong>. It monitors the lesson as it unfolds.
                  </p>
                </div>
              </div>

              {/* Feature 2: Overview & Rating */}
              <div className="col-lg-4">
                <div className="sp-bento-card" style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#F5F3FF', color: '#8B5CF6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>AI Rating & Overview</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Automatically generates an overall overview analysis of the session. It gives the lesson an <strong>AI-based rating</strong> (out of 100) based on engagement, clarity, and teaching quality.
                  </p>
                </div>
              </div>

              {/* Feature 3: Multi-modal Off-Topic Detection */}
              <div className="col-lg-4">
                <div className="sp-bento-card" style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF2F2', color: '#EF4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Off-Topic Detection</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Scans <strong>Audio, Chat, Screen Shares, and the Drawing Tool</strong>. If a teacher or student goes off-topic or shares personal info, the system instantly sends an alert to the admin.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. ACCESS SECTION (Gemini Setup) ============ */}
        <section className="sp-access-section-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-5 mb-5 mb-lg-0">
                <span className="sp-badge">Where do I find this?</span>
                <h2 className="sp-access-title">Setup once. Analyze forever.</h2>
                <p className="sp-access-sub">
                  We use Google Gemini. Bring your own API key so you pay Google directly (the free tier covers almost all daily sessions). We only charge a flat $10/month for the dashboard.
                </p>

                <div className="sp-steps-vertical">
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Go to Setup AI</h4>
                      <p>Click <strong>Setup AI</strong> in your admin sidebar and paste your Gemini key.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Enable for Rooms</h4>
                      <p>When creating a room, simply toggle <strong>Enable Eazy AI</strong> to ON.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>Get Live Alerts & Reports</h4>
                      <p>View live alerts on your dashboard while the class is happening, and read the full AI report in the Sessions tab afterwards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Setup AI</span>
                  </div>
                  <div className="sp-dash-body">
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item">Connect Rooms</div>
                      <div className="sp-dash-side-item">Live View</div>
                      <div className="sp-dash-side-item">Recordings</div>
                      <div className="sp-dash-side-item active">
                        Setup AI
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                    </div>
                    <div className="sp-dash-main" style={{ padding: '32px' }}>
                      <h5 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Gemini API Key</h5>
                      <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '24px' }}>Paste your Google Gemini key below. This enables AI analysis for all rooms.</p>
                      
                      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'monospace', color: '#0F172A' }}>AIzaSy...3k9F</span>
                        <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>● Active</span>
                      </div>

                      <div className="sp-dash-btn-primary-highlight" style={{ display: 'inline-flex', marginTop: '10px' }}>
                        Save Key
                        <svg className="sp-cursor" style={{ position: 'absolute', bottom: '-16px', right: '-16px', animation: 'none' }} width="20" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 4. FINAL CTA ============ */}
        <section className="sp-cta-split">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="sp-cta-split-title">
                  Stop guessing.<br />
                  <span>Start analyzing live.</span>
                </h2>
                <p className="sp-cta-split-sub">
                  Get real-time safety alerts, session ratings, and overview reports. Bring your own Gemini key and pay just $10/mo.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-white-solid">
                    Start Free
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                  <Link href="/contact" className="sp-btn-white-outline">Talk to Sales</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="sp-cta-card">
                  <div className="sp-cta-card-label">Included in your free trial</div>
                  <ul className="sp-cta-card-list">
                    <li><span className="sp-cta-check">✓</span><span>Live audio & chat scanning</span></li>
                    <li><span className="sp-cta-check">✓</span><span>AI session ratings (0-100)</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Off-topic & privacy alerts</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Flat $10/mo (BYOK)</span></li>
                  </ul>
                  <div className="sp-cta-card-footer">14-day trial · No credit card required</div>
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