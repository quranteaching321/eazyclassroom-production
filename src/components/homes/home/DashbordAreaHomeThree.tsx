const DashbordAreaHomeThree = () => {
  return (
    <section className="ec-feature-section ec-bg-dark">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker">Scheduling & Access Control</span>
              <h2 className="ec-title">You control the clock. Not the teachers.</h2>
              <p className="ec-subtitle">
                Stop worrying about tutors starting classes at odd hours or leaving rooms open indefinitely. Set strict boundaries once, and the system enforces them for you.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4>Slot-Based Schedules</h4>
                    <p>Set exact days and times a room can be started (e.g., Mon/Wed 4:00 PM - 5:30 PM). If a teacher tries to start the room outside this window, the system blocks them.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div>
                    <h4>Per-Room Time Zones</h4>
                    <p>Hire tutors globally without the math. Set the schedule for a room, and select the exact time zone for that specific teacher. We handle the conversions automatically.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div>
                    <h4>Room Duration Limits</h4>
                    <p>Set a maximum duration for a session. If a teacher forgets to end the class, the system will automatically wrap it up, protecting your recording storage and server load.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Side (Abstract UI representation) */}
          <div className="col-lg-6">
            <div className="ec-visual-card">
              <div className="ec-vc-header">
                <span>Algebra I • Room Settings</span>
                <span className="ec-vc-badge">Active</span>
              </div>
              <div className="ec-vc-body">
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Access Window</span>
                  <span className="ec-vc-value">Slot Based</span>
                </div>
                <div className="ec-vc-slots">
                  <div className="ec-vc-slot active">
                    <strong>Mon, Wed, Fri</strong>
                    <span>4:00 PM — 5:30 PM</span>
                  </div>
                  <div className="ec-vc-slot disabled">
                    <strong>Tue, Thu</strong>
                    <span>Blocked</span>
                  </div>
                </div>
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Time Zone</span>
                  <span className="ec-vc-value">GMT+3 (Riyadh)</span>
                </div>
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Max Duration</span>
                  <span className="ec-vc-value">90 Mins</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashbordAreaHomeThree;