import Link from "next/link";

const HeroBannerHomefour = () => {
  return (
    <section className="fid-hero">
      <div className="fid-hero-container">

        {/* ===== Left Column: Text ===== */}
        <div className="fid-hero-text">
          <div className="fid-hero-badge">Built for academies &amp; schools</div>

          <h1 className="fid-hero-title">
            The All-in-One <br />
            <span className="fid-text-blue">Virtual Classroom</span> <br />
            Management System
          </h1>

          <p className="fid-hero-subtitle">
            Keep the Zoom, Meet, or Teams your teachers already use. We add
            tamper-proof recording, live monitoring, keyword &amp; AI analysis,
            and self-managing cloud storage — all from one dashboard.
          </p>

          <div className="fid-hero-actions">
            <Link href="https://app.eazyclassroom.net/signup" className="fid-btn-solid-xl">Start Free</Link>
            <Link href="/download" className="fid-btn-outline-xl">Get EazyRecorder</Link>
          </div>

          <div className="fid-hero-trust">
            <span>
              <svg className="fid-tick" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Free Windows recorder
            </span>
            <span>
              <svg className="fid-tick" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Flat $10/mo AI — bring your own key
            </span>
            <span>
              <svg className="fid-tick" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              No credit card to start
            </span>
          </div>
        </div>

        {/* ===== Right Column: Dashboard Mockup ===== */}
        <div className="fid-hero-app-window" aria-hidden="true">

          {/* Floating EazyRecorder badge (peeks out of window) */}
          <div className="fid-recorder-float">
            <span className="fid-rec-dot" />
            <span className="fid-recorder-name">EazyRecorder</span>
            <span className="fid-recorder-time">00:42:18</span>
          </div>

          {/* Window Header */}
          <div className="fid-app-header">
            <div className="fid-app-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="fid-app-search">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search rooms...
            </div>
            <div className="fid-app-user">
              <span className="fid-avatar">A</span>
              <span className="fid-app-status">
                <span className="fid-status-dot"></span> Monitoring
              </span>
            </div>
          </div>

          {/* Window Body */}
          <div className="fid-app-body">

            {/* Live Sessions */}
            <div className="fid-sessions-block">
              <div className="fid-block-title">
                <span>Live Sessions</span>
                <span className="fid-live-tag">2 Live</span>
              </div>

              <div className="fid-room-card">
                <div className="fid-room-info">
                  <div className="fid-room-icon zoom">Z</div>
                  <div>
                    <strong>Algebra I</strong>
                    <span>Zoom</span>
                  </div>
                </div>
                <div className="fid-room-stats">
                  <span className="fid-stat">24/30</span>
                  <span className="fid-recording-badge">
                    <span className="fid-rec-dot" /> REC
                  </span>
                </div>
              </div>

              <div className="fid-room-card">
                <div className="fid-room-info">
                  <div className="fid-room-icon native">N</div>
                  <div>
                    <strong>Physics Lab</strong>
                    <span>Native</span>
                  </div>
                </div>
                <div className="fid-room-stats">
                  <span className="fid-stat">18/20</span>
                  <span className="fid-local-badge">Local</span>
                </div>
              </div>
            </div>

            {/* 2×2 Panel Grid */}
            <div className="fid-panels">

              {/* AI */}
              <div className="fid-panel fid-panel-ai">
                <div className="fid-panel-head">
                  <span>Eazy AI</span>
                  <strong>92</strong>
                </div>
                <div className="fid-metric-row">
                  <span className="fid-metric-label">Engage</span>
                  <div className="fid-metric-bar">
                    <div style={{ width: "88%" }} />
                  </div>
                  <span className="fid-metric-value">88</span>
                </div>
                <div className="fid-metric-row">
                  <span className="fid-metric-label">Clarity</span>
                  <div className="fid-metric-bar">
                    <div style={{ width: "95%" }} />
                  </div>
                  <span className="fid-metric-value">95</span>
                </div>
              </div>

              {/* Alerts */}
              <div className="fid-panel fid-panel-alerts">
                <div className="fid-panel-head">
                  <span>Alerts</span>
                  <strong className="fid-alert-count">2</strong>
                </div>
                <div className="fid-alert-row">
                  <span className="fid-alert-dot" />
                  Phone number
                </div>
                <div className="fid-alert-row">
                  <span className="fid-alert-dot" />
                  WhatsApp mention
                </div>
              </div>

              {/* Storage */}
              <div className="fid-panel fid-panel-storage">
                <div className="fid-panel-head">
                  <span>Storage</span>
                  <span className="fid-pill">FIFO</span>
                </div>
                <div className="fid-storage-value">
                  <strong>42.5</strong>
                  <span>GB / 150 GB</span>
                </div>
                <div className="fid-storage-bar">
                  <div style={{ width: "28%" }} />
                </div>
              </div>

              {/* Recorder */}
              <div className="fid-panel fid-panel-recorder">
                <div className="fid-panel-head">
                  <span>Recorder</span>
                  <span className="fid-recorder-state">● Live</span>
                </div>
                <div className="fid-recorder-row">
                  <span>Local</span>
                  <strong>Saved</strong>
                </div>
                <div className="fid-recorder-row">
                  <span>Cloud</span>
                  <strong className="fid-up">↑ Streaming</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBannerHomefour;