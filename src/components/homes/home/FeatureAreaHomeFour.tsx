const FeatureAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Visual Side (Left) */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-alert-feed">
              <div className="ec-af-header">
                <span className="ec-af-dot"></span>
                <span>Academy Alert Feed</span>
              </div>
              
              <div className="ec-af-item red">
                <div className="ec-af-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <div className="ec-af-content">
                  <strong>Disconnection Alert</strong>
                  <p>Algebra I (Zoom) • Tutor went offline.</p>
                  <span className="ec-af-time">Just now</span>
                </div>
              </div>

              <div className="ec-af-item orange">
                <div className="ec-af-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                </div>
                <div className="ec-af-content">
                  <strong>Keyword Alert: Personal Info</strong>
                  <p>Physics Lab (Native) • "WhatsApp me at 555-0192"</p>
                  <span className="ec-af-time">2 mins ago</span>
                </div>
              </div>

              <div className="ec-af-item green">
                <div className="ec-af-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div className="ec-af-content">
                  <strong>Admin Monitoring Active</strong>
                  <p>You are silently watching Chemistry 101.</p>
                  <span className="ec-af-time">5 mins ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side (Right) */}
          <div className="col-lg-6">
            <div className="ec-feature-content ps-lg-5">
              <span className="ec-kicker">Live Oversight & Security</span>
              <h2 className="ec-title">Be everywhere at once. Without joining a single call.</h2>
              <p className="ec-subtitle">
                You can't sit in 50 Zoom meetings a day. EazyClassroom acts as your virtual assistant, keeping an eye on every room and instantly alerting you when something goes wrong.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4>Silent Live Monitoring</h4>
                    <p>Jump into any live session directly from your browser. You can watch the video and listen to the audio without the teacher or students knowing you are there.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                  </div>
                  <div>
                    <h4>Keyword & Privacy Alerts</h4>
                    <p>Our system listens for personal information. If a teacher or student says a phone number, email, or "WhatsApp", you get an instant notification to stop off-platform communication.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </div>
                  <div>
                    <h4>Disconnection Alerts</h4>
                    <p>If a tutor's internet drops or they leave the session early, your dashboard instantly flags it. You can quickly message them or assign a backup tutor.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureAreaHomeFour;