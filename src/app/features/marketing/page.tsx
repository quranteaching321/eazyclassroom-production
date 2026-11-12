import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Marketing & Social Publishing | EazyClassroom",
  description: "Publish to Facebook, Instagram, YouTube, LinkedIn, Pinterest, and TikTok from one dashboard. Schedule posts, clip highlights during class, and stream to YouTube.",
};

export default function MarketingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "0px" }}>

        {/* ============ 1. HERO (Split) ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Marketing & Social Publishing</span>
                <h1 className="sp-hero-title-new">
                  Turn lessons into<br />
                  <span className="text-blue">your best marketing.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Publish a single post to six platforms at once. Clip highlights during a live class that auto-publish to every connected account. Stream any room to YouTube. Your academy&apos;s growth engine, built in.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Hero: Publisher mockup */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">
                  
                  {/* Floating success toast */}
                  <div className="sp-hv-floating lock-card" style={{ bottom: '20px', left: '-20px', borderLeftColor: '#10B981', zIndex: 10 }}>
                    <div className="sp-hv-lock-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>✓</div>
                    <div>
                      <strong>Published to 6 platforms</strong>
                      <p>lesson-highlight.mp4 · Reel</p>
                    </div>
                  </div>

                  {/* Main publisher window */}
                  <div className="sp-hv-main" style={{ transform: 'rotate(2deg)', padding: '24px', background: '#FFFFFF' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Social Publisher</span>
                      <span className="sp-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '10px' }}>Step 2 of 2</span>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Publish to</div>
                      <div className="d-flex gap-2 flex-wrap">
                        {[
                          { name: 'FB', color: '#1877F2', label: 'Facebook' },
                          { name: 'IG', color: '#E1306C', label: 'Instagram' },
                          { name: 'YT', color: '#FF0000', label: 'YouTube' },
                          { name: 'IN', color: '#0A66C2', label: 'LinkedIn' },
                          { name: 'PT', color: '#E60023', label: 'Pinterest' },
                          { name: 'TT', color: '#000000', label: 'TikTok' },
                        ].map(p => (
                          <div key={p.name} style={{
                            width: '32px', height: '32px', borderRadius: '8px',
                            background: p.color, color: '#FFF',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '10px', fontWeight: 800
                          }}>{p.name}</div>
                        ))}
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', color: '#0F172A', fontWeight: 600, marginBottom: '6px' }}>lesson-highlight.mp4</div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: '#2563EB' }}>Reel</span>
                        <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: '#F1F5F9', color: '#64748B' }}>Story</span>
                        <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: '#F1F5F9', color: '#64748B' }}>Video</span>
                      </div>
                    </div>

                    <button style={{
                      width: '100%', padding: '10px', background: '#2563EB', color: '#FFF',
                      border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 700
                    }}>Publish Now</button>
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
              <h2>Three ways to grow your academy.</h2>
              <p style={{ color: '#64748B', fontSize: '18px', marginTop: '16px', maxWidth: '640px', margin: '16px auto 0' }}>
                All from one dashboard. All built into EazyClassroom.
              </p>
            </div>

            <div className="row g-4 mt-4">

              {/* Feature 1: Web Publisher */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#EFF6FF', color: '#2563EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Web Panel Publisher</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Upload once and publish to <strong>Facebook, Instagram, YouTube, LinkedIn, Pinterest, and TikTok</strong> simultaneously. Choose image, video, reel, or story — with per-platform captions.
                  </p>
                </div>
              </div>

              {/* Feature 2: Live Clipping */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#F5F3FF', color: '#8B5CF6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Live Clip Publishing</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    During a live class, the tutor clicks <strong>Start</strong> at a highlight moment and <strong>Stop</strong> when done. The clip auto-publishes to every connected social account. Zero editing, zero uploads.
                  </p>
                </div>
              </div>

              {/* Feature 3: YouTube Streaming */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF2F2', color: '#EF4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>YouTube Streaming</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Stream any room live to YouTube. Each room stores its own <strong>stream key</strong>. One add-on covers <strong>unlimited streams</strong> across all your rooms — no per-broadcast fees.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. PLATFORMS SUPPORTED ============ */}
        <section className="ec-bg-light" style={{ padding: '80px 0' }}>
          <div className="container text-center">
            <span className="sp-badge">Six platforms, one click</span>
            <h2 className="sp-access-title" style={{ marginTop: '16px', marginBottom: '48px' }}>Publish everywhere you already are.</h2>

            <div className="row g-4 justify-content-center">
              {[
                { name: 'Facebook Page', icon: 'FB', color: '#1877F2' },
                { name: 'Instagram Business', icon: 'IG', color: '#E1306C' },
                { name: 'YouTube Channel', icon: 'YT', color: '#FF0000' },
                { name: 'LinkedIn', icon: 'IN', color: '#0A66C2' },
                { name: 'Pinterest', icon: 'PT', color: '#E60023' },
                { name: 'TikTok', icon: 'TT', color: '#000000' },
              ].map((p) => (
                <div key={p.name} className="col-lg-2 col-md-4 col-6">
                  <div style={{
                    padding: '24px 16px', background: '#FFFFFF', borderRadius: '16px',
                    border: '1px solid #E2E8F0', textAlign: 'center'
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: p.color, color: '#FFF', margin: '0 auto 12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', fontWeight: 800
                    }}>{p.icon}</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{p.name}</div>
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
                <h2 className="sp-access-title">Two menus. All the growth.</h2>
                <p className="sp-access-sub">
                  Connect accounts once, then publish anytime. YouTube streaming is configured per room.
                </p>

                <div className="sp-steps-vertical">
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Connect Social Accounts</h4>
                      <p>Open <strong>Connect Social</strong> in the sidebar and authorize each platform via OAuth. One click per platform.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Create a Post</h4>
                      <p>Open <strong>Create Post</strong> → upload your media → pick which accounts to publish to → add captions → Publish or Schedule.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>Enable YouTube Streaming</h4>
                      <p>Go to any room → open its settings → paste your YouTube stream key. Toggle on and the room streams live automatically.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Connect Social</span>
                  </div>
                  <div className="sp-dash-body">
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item">Rooms</div>
                      <div className="sp-dash-side-item">Recordings</div>
                      <div className="sp-dash-side-item active">
                        Connect Social
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                      <div className="sp-dash-side-item">Create Post</div>
                    </div>
                    <div className="sp-dash-main" style={{ padding: '24px' }}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Connected Accounts</h5>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#64748B' }}>4 of 6 connected</span>
                      </div>

                      {[
                        { name: 'Facebook Page', icon: 'FB', color: '#1877F2', connected: true },
                        { name: 'Instagram Business', icon: 'IG', color: '#E1306C', connected: true },
                        { name: 'YouTube Channel', icon: 'YT', color: '#FF0000', connected: true },
                        { name: 'LinkedIn', icon: 'IN', color: '#0A66C2', connected: true },
                        { name: 'Pinterest', icon: 'PT', color: '#E60023', connected: false },
                        { name: 'TikTok', icon: 'TT', color: '#000000', connected: false },
                      ].map((p) => (
                        <div key={p.name} style={{
                          background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px',
                          padding: '10px 12px', marginBottom: '6px',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '24px', height: '24px', borderRadius: '6px',
                              background: p.color, color: '#FFF',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '8px', fontWeight: 800
                            }}>{p.icon}</div>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A' }}>{p.name}</span>
                          </div>
                          <span style={{
                            fontSize: '10px', fontWeight: 700,
                            padding: '3px 8px', borderRadius: '4px',
                            background: p.connected ? 'rgba(16, 185, 129, 0.1)' : '#F1F5F9',
                            color: p.connected ? '#10B981' : '#94A3B8'
                          }}>{p.connected ? 'Connected' : 'Connect'}</span>
                        </div>
                      ))}
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
                  Every lesson is a<br />
                  <span>marketing opportunity.</span>
                </h2>
                <p className="sp-cta-split-sub">
                  Stop manually uploading videos. Let your live classes become your marketing engine — automatically.
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
                    <li><span className="sp-cta-check">✓</span><span>1 free social account</span></li>
                    <li><span className="sp-cta-check">✓</span><span>1 YouTube streaming room</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Multi-platform publisher</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Live clip publishing from class</span></li>
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