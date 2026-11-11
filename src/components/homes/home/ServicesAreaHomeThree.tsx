const ServicesAreaHomeThree = () => {
  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Text Side (Left) */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker">Recording & Storage</span>
              <h2 className="ec-title">Ironclad recordings. Zero storage headaches.</h2>
              <p className="ec-subtitle">
                Your lessons are your most valuable asset. We give you absolute control over how they are recorded, where they are stored, and who is allowed to see them.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <div>
                    <h4>Dual Local & Cloud Recording</h4>
                    <p>The free EazyRecorder app automatically records to the teacher's PC (or manually if they prefer). Simultaneously, it pushes a secure feed to your cloud via MediaMTX.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div>
                    <h4>Admin Lockdown & Disk Protection</h4>
                    <p>On standard Windows accounts, teachers can't access or delete local recordings without an Admin password. Plus, set a minimum disk space limit so the app never crashes their PC.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <div>
                    <h4>50GB Cloud per Room + Self-Cleaning</h4>
                    <p>Each room comes with 50GB of cloud storage (buy more anytime). If you hit the limit, the oldest recordings auto-delete first (FIFO). No surprise bills. Review everything in your Built-in Player.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Side (Right) */}
          <div className="col-lg-6">
            <div className="ec-rec-storage-visual">
              
              {/* Top Card: Local Recording Status */}
              <div className="ec-rs-card">
                <div className="ec-rs-header">
                  <span>Local Recording Status</span>
                  <span className="ec-rs-badge active">Auto-Recording</span>
                </div>
                
                <div className="ec-rs-stats">
                  <div className="ec-rs-stat">
                    <span className="ec-rs-label">Disk Space Protected</span>
                    <div className="ec-rs-bar"><div style={{ width: "40%" }}></div></div>
                    <span className="ec-rs-val">Min 10GB Free</span>
                  </div>
                </div>

                <div className="ec-rs-alert">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <strong>Admin Password Required</strong> to access local files.
                </div>
              </div>

              {/* Bottom Card: Cloud Storage */}
              <div className="ec-rs-card mt-4">
                <div className="ec-rs-header">
                  <span>Cloud Storage (Room: Algebra I)</span>
                  <span className="ec-rs-badge green">FIFO Active</span>
                </div>
                <div className="ec-rs-storage-row">
                  <div className="ec-rs-storage-val">
                    <strong>48.2</strong> <span>GB / 50 GB</span>
                  </div>
                  <button className="ec-rs-buy-btn">Buy Extra GB</button>
                </div>
                <div className="ec-rs-bar green"><div style={{ width: "96%" }}></div></div>
                <div className="ec-rs-footer">
                  <span>Oldest recordings will delete next.</span>
                  <span className="ec-rs-link">Open Built-in Player</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesAreaHomeThree;