import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Tamper-Proof Recording & Storage | EazyClassroom",
  description: "Automatic local and cloud recording with FIFO storage, admin lockdown, and built-in player.",
};

export default function RecordingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "68px" }}>

        {/* ============ 1. HERO ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Recording & Cloud Storage</span>
                <h1 className="sp-hero-title-new">
                  Every lesson. Captured.<br />
                  <span className="text-blue">Guaranteed.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Tamper-proof recording that starts automatically and <strong>cannot be paused, stopped, or deleted</strong> by the tutor. Local + cloud, with per-room storage caps and admin-only access.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Hero Visual: Recording status + storage */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">

                  {/* Floating storage alert */}
                  <div className="sp-hv-floating lock-card" style={{ bottom: '20px', left: '-20px', borderLeftColor: '#F59E0B', zIndex: 10 }}>
                    <div className="sp-hv-lock-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>⚡</div>
                    <div>
                      <strong>48.2 GB / 50 GB</strong>
                      <p>FIFO: oldest recording next</p>
                    </div>
                  </div>

                  {/* Main recording card */}
                  <div className="sp-hv-main" style={{ transform: 'rotate(2deg)', padding: '24px', background: '#FFFFFF' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Recording · Algebra I</span>
                      </div>
                      <span className="sp-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '10px' }}>Auto</span>
                    </div>

                    <div className="d-flex gap-3 mb-4">
                      <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>Local</div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>C:\Recordings</div>
                        <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>● Writing</div>
                      </div>
                      <div style={{ flex: 1, padding: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>Cloud</div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>MediaMTX</div>
                        <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>● Streaming</div>
                      </div>
                    </div>

                    <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#991B1B' }}>Pause / Stop locked by admin</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 2. THREE CORE FEATURES ============ */}
        <section className="sp-flow-section">
          <div className="container">
            <div className="sp-flow-header text-center">
              <h2>Ironclad recording. Zero babysitting.</h2>
              <p style={{ color: '#64748B', fontSize: '18px', marginTop: '16px', maxWidth: '640px', margin: '16px auto 0' }}>
                Three guarantees that make sure you never lose a lesson.
              </p>
            </div>

            <div className="row g-4 mt-4">

              {/* Feature 1: Tamper-Proof */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF2F2', color: '#EF4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Tamper-Proof Auto-Record</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    When a session starts, recording begins automatically. Once auto-record is enabled, the tutor <strong>cannot pause or stop it</strong> — even if they close the app. Your archive is guaranteed.
                  </p>
                </div>
              </div>

              {/* Feature 2: Disk Protection */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#EFF6FF', color: '#2563EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Disk Protection & Admin Lockdown</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Set a <strong>minimum free disk space</strong> per room so the tutor&apos;s PC never crashes. On Windows standard accounts, <strong>only the admin password</strong> can access or delete local recordings.
                  </p>
                </div>
              </div>

              {/* Feature 3: Cloud + FIFO */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#F5F3FF', color: '#8B5CF6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>50GB + FIFO Auto-Clean</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Each room gets <strong>50GB of cloud storage</strong> (buy more anytime). When the cap is reached, the <strong>oldest recordings delete first (FIFO)</strong>. No surprise overage bills. Ever.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. HOW IT WORKS ============ */}
        <section className="ec-bg-light" style={{ padding: '100px 0' }}>
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <span className="sp-badge">How it works</span>
                <h2 className="sp-access-title" style={{ marginTop: '16px' }}>From class start to cloud archive.</h2>
                <p className="sp-access-sub mx-auto">
                  You configure it once. The system handles the rest, every session.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {[
                { num: '01', title: 'Tutor opens EazyRecorder', desc: 'They sign in with their room login and click Start Session.' },
                { num: '02', title: 'Recording starts automatically', desc: 'The moment the meeting begins, local + cloud recording kick off. No manual buttons.' },
                { num: '03', title: 'Both streams save simultaneously', desc: 'Local file writes to the tutor\'s PC while the cloud copy streams to MediaMTX in real-time.' },
                { num: '04', title: 'Session ends, file is sealed', desc: 'When the class ends (or the auto-end timer fires), both recordings finalize and become immutable.' },
                { num: '05', title: 'FIFO cleans when full', desc: 'If the room hits 50GB, the oldest recording auto-deletes first. You can buy extra GB anytime.' },
                { num: '06', title: 'Admin reviews anytime', desc: 'Play back any cloud recording from the dashboard, or access the local file with the Windows admin password.' },
              ].map((step) => (
                <div key={step.num} className="col-lg-4 col-md-6">
                  <div style={{ padding: '28px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', height: '100%' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.1em', marginBottom: '12px' }}>{step.num}</div>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 4. ACCESS SECTION ============ */}
        <section className="sp-access-section-new">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-5 mb-5 mb-lg-0">
                <span className="sp-badge">Where do I find this?</span>
                <h2 className="sp-access-title">Configured per room.</h2>
                <p className="sp-access-sub">
                  Every recording rule lives inside each room&apos;s settings. Different rooms can have different rules.
                </p>

                <div className="sp-steps-vertical">
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Open Connect Rooms</h4>
                      <p>Click <strong>Connect Rooms</strong> in your admin sidebar.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Toggle recording options</h4>
                      <p>Per room, turn on <strong>Auto-Start Cloud Recording</strong>, <strong>Auto Local Recording</strong>, and set the <strong>Minimum Disk Space</strong> threshold.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>View recordings</h4>
                      <p>Click <strong>Recordings</strong> in the sidebar to see all cloud recordings. Play, download, or share.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Connect Rooms</span>
                  </div>
                  <div className="sp-dash-body">
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item active">
                        Connect Rooms
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                      <div className="sp-dash-side-item">Recordings</div>
                      <div className="sp-dash-side-item">Live View</div>
                      <div className="sp-dash-side-item">Settings</div>
                    </div>
                    <div className="sp-dash-main" style={{ padding: '24px' }}>
                      <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Algebra I · Recording Rules</h5>

                      {[
                        { label: 'Auto Cloud Recording', sub: 'Push feed to MediaMTX', on: true },
                        { label: 'Auto Local Recording', sub: 'Save to tutor\'s PC', on: true },
                        { label: 'Minimum Disk Space', sub: 'Stop if below 5 GB', on: true },
                      ].map((row) => (
                        <div key={row.label} style={{
                          background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px',
                          padding: '12px 14px', marginBottom: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                          <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>{row.label}</div>
                            <div style={{ fontSize: '10px', color: '#64748B', marginTop: '2px' }}>{row.sub}</div>
                          </div>
                          <div style={{
                            width: '36px', height: '20px', borderRadius: '100px',
                            background: row.on ? '#2563EB' : '#CBD5E1', position: 'relative'
                          }}>
                            <div style={{
                              position: 'absolute', top: '2px', right: row.on ? '2px' : 'auto', left: row.on ? 'auto' : '2px',
                              width: '16px', height: '16px', background: '#FFF', borderRadius: '50%'
                            }} />
                          </div>
                        </div>
                      ))}

                      <div style={{ marginTop: '16px', padding: '12px 14px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '8px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB', marginBottom: '4px' }}>Storage: 42.5 GB / 50 GB</div>
                        <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '100px', overflow: 'hidden' }}>
                          <div style={{ width: '85%', height: '100%', background: '#2563EB', borderRadius: '100px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 5. FINAL CTA ============ */}
        <section className="sp-cta-split">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="sp-cta-split-title">
                  Your lessons are<br />
                  <span>your most valuable asset.</span>
                </h2>
                <p className="sp-cta-split-sub">
                  Every session captured. Every file protected. Every tutor accountable. Start preserving your academy&apos;s lessons today.
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
                    <li><span className="sp-cta-check">✓</span><span>Tamper-proof recording</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Local + cloud dual recording</span></li>
                    <li><span className="sp-cta-check">✓</span><span>50GB cloud per room</span></li>
                    <li><span className="sp-cta-check">✓</span><span>FIFO auto-cleanup</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Admin password lockdown</span></li>
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