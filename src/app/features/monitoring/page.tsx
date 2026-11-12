import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Live Monitoring & Security | EazyClassroom",
  description: "Watch every active session live from your dashboard and get instant alerts if a teacher drops off.",
};

export default function MonitoringPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "0px" }}>

        {/* ============ 1. HERO (Split Layout) ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Live Oversight</span>
                <h1 className="sp-hero-title-new">
                  Watch every class.<br />
                  <span className="text-blue">Without joining a call.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Stop flying blind. Embed active Zoom, Meet, Teams, and Native rooms directly into your admin dashboard. 
                  Monitor multiple classes at once and get instant alerts if a tutor disconnects.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Hero Visual: Grid of Live Rooms */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">
                  
                  {/* Floating Alert Toast */}
                  <div className="sp-hv-floating lock-card" style={{ bottom: '20px', right: '-20px', borderLeftColor: '#F59E0B', zIndex: 10 }}>
                    <div className="sp-hv-lock-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>⚠️</div>
                    <div>
                      <strong>Teacher Disconnected</strong>
                      <p>Algebra I • Connection lost</p>
                    </div>
                  </div>

                  <div className="sp-hv-main" style={{ transform: 'rotate(0deg)', padding: '16px', background: '#F8FAFC' }}>
                    {/* Dashboard Header */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex gap-2 align-items-center">
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#0F172A' }}>Live Command Center</span>
                        <span className="badge bg-danger">3 Live</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>Alerts: ON</div>
                    </div>

                    {/* Mini Grid */}
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="sp-dash-room-row" style={{ padding: 0, overflow: 'hidden', height: '110px', flexDirection: 'column', alignItems: 'stretch' }}>
                          <div style={{ padding: '6px 10px', background: '#FFF', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700 }}>Algebra I</div>
                          <div style={{ flex: 1, background: '#0B1120', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '30px', height: '30px', background: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>▶</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sp-dash-room-row" style={{ padding: 0, overflow: 'hidden', height: '110px', flexDirection: 'column', alignItems: 'stretch' }}>
                          <div style={{ padding: '6px 10px', background: '#FFF', borderBottom: '1px solid #E2E8F0', fontSize: '10px', fontWeight: 700 }}>Physics Lab</div>
                          <div style={{ flex: 1, background: '#0B1120', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '30px', height: '30px', background: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>▶</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 2. HOW IT WORKS (Product Flow) ============ */}
        <section className="sp-flow-section">
          <div className="container">
            <div className="sp-flow-header text-center">
              <h2>How it works from end to end.</h2>
            </div>

            <div className="sp-flow-grid">
              
              {/* Step 1: Admin Dashboard (Alerts Setup) */}
              <div className="sp-flow-card">
                <div className="sp-flow-step">Step 1: Enable Alerts</div>
                <h3>Turn on the safety net.</h3>
                <p>In your admin dashboard, toggle on Browser and In-App notifications. Allow your browser to send you push notifications.</p>
                
                <div className="sp-ui-window">
                  <div className="sp-ui-header">Alert Preferences</div>
                  <div className="sp-ui-body">
                    <div className="d-flex justify-content-between align-items-center mb-4 p-3" style={{ background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div>
                        <strong style={{ fontSize: '13px', display: 'block', color: '#0F172A' }}>Browser Push Alerts</strong>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>Get notified even if tab is closed</span>
                      </div>
                      <div className="sp-toggle-pill" style={{ background: '#2563EB', width: '36px', height: '20px', position: 'relative', borderRadius: '100px' }}>
                        <div style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', background: 'white', borderRadius: '50%' }} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div>
                        <strong style={{ fontSize: '13px', display: 'block', color: '#0F172A' }}>In-App Toast Alerts</strong>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>See alerts while using the dashboard</span>
                      </div>
                      <div className="sp-toggle-pill" style={{ background: '#2563EB', width: '36px', height: '20px', position: 'relative', borderRadius: '100px' }}>
                        <div style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', background: 'white', borderRadius: '50%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Teacher Disconnects */}
              <div className="sp-flow-card">
                <div className="sp-flow-step">Step 2: Real-Time Alert</div>
                <h3>The app catches the drop.</h3>
                <p>If a teacher's internet dies or they close EazyRecorder unexpectedly, you get a native browser notification instantly.</p>
                
                <div className="sp-ui-window app-mockup">
                  <div className="sp-app-header">
                    <span className="sp-dot red"></span>
                    <span className="sp-dot yellow"></span>
                    <span className="sp-dot green"></span>
                    <span className="sp-app-title">Browser Notification</span>
                  </div>
                  <div className="sp-app-body">
                    <div className="sp-app-lock" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
                      <div className="sp-lock-icon">⚠️</div>
                      <div className="sp-lock-text">
                        <strong style={{ color: '#F59E0B' }}>Connection Lost</strong>
                        <p>Algebra I (Zoom)</p>
                      </div>
                    </div>
                    <button className="sp-app-btn" style={{ background: '#2563EB', color: 'white', border: 'none' }}>View Live Dashboard</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. ACCESS SECTION ============ */}
        <section className="sp-access-section-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-5 mb-5 mb-lg-0">
                <span className="sp-badge">Where do I find this?</span>
                <h2 className="sp-access-title">One click to the Command Center.</h2>
                <p className="sp-access-sub">
                  The Live View is built directly into your admin sidebar. It loads all active sessions automatically.
                </p>

                <div className="sp-steps-vertical">
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Open Live View</h4>
                      <p>Log in and click <strong>Live View</strong> in your dashboard sidebar.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Enable Alerts</h4>
                      <p>Toggle on <strong>Browser Alerts</strong> and <strong>In-App</strong> at the top.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>Watch & Expand</h4>
                      <p>Click the fullscreen icon or open any room in a new tab to listen in.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Live View</span>
                  </div>
                  <div className="sp-dash-body">
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item">Connect Rooms</div>
                      <div className="sp-dash-side-item active">
                        Live View
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                      <div className="sp-dash-side-item">Recordings</div>
                    </div>
                    <div className="sp-dash-main">
                      <div className="sp-dash-main-header">
                        <h5>Live Sessions</h5>
                        <div className="d-flex gap-2 align-items-center" style={{ fontSize: '10px', fontWeight: 700, color: '#64748B' }}>
                          Browser Alerts: ON
                        </div>
                      </div>
                      <div className="sp-dash-room-row" style={{ padding: '16px', background: '#0B1120', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '140px', borderRadius: '8px', position: 'relative' }}>
                        <div style={{ color: '#475569', fontSize: '12px' }}>Waiting for active sessions...</div>
                        {/* Simulated cursor clicking fullscreen */}
                        <svg className="sp-cursor" style={{ position: 'absolute', top: '16px', right: '16px', animation: 'none' }} width="20" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
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
                  Never miss a<br />
                  <span>dropped class again.</span>
                </h2>
                <p className="sp-cta-split-sub">
                  Set up your command center in under 2 minutes. Get complete visibility into your academy's daily operations.
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
                    <li><span className="sp-cta-check">✓</span><span>Multi-room live grid</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Browser & In-app alerts</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Fullscreen focus mode</span></li>
                    <li><span className="sp-cta-check">✓</span><span>No extra plugins required</span></li>
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