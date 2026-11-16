const DashbordAreaHomeThree = () => {
  return (
    <section className="ec-feature-section ec-bg-dark">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker">Scheduling &amp; Access Control</span>
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
                    <p>Create flexible schedules per room, with each slot lasting anywhere from 15 minutes to 5 hours. Add an optional label to each slot so you know what it is for - a subject like Physics, or a specific student.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <h4>Time Based Access</h4>
                    <p>Set a different time range for each day of the week during which the room can be started (e.g., Mon-Fri 9:00 AM - 6:00 PM, Sat 10:00 AM - 2:00 PM). Teachers can only start the session inside those windows.</p>
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
              </ul>
            </div>
          </div>

          {/* Visual Side */}
          <div className="col-lg-6">
            <div className="ec-visual-card">
              <div className="ec-vc-header">
                <span>Algebra I · Room Settings</span>
                <span className="ec-vc-badge">Active</span>
              </div>
              <div className="ec-vc-body">
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Access Window</span>
                  <span className="ec-vc-value">Time Based</span>
                </div>
                <div className="ec-vc-slots">
                  <div className="ec-vc-slot active">
                    <strong>Mon – Fri</strong>
                    <span>9:00 AM — 6:00 PM</span>
                  </div>
                  <div className="ec-vc-slot active">
                    <strong>Sat</strong>
                    <span>10:00 AM — 2:00 PM</span>
                  </div>
                  <div className="ec-vc-slot disabled">
                    <strong>Sun</strong>
                    <span>Blocked</span>
                  </div>
                </div>
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Time Zone</span>
                  <span className="ec-vc-value">GMT+3 (Riyadh)</span>
                </div>
                <div className="ec-vc-row">
                  <span className="ec-vc-label">Session Slots</span>
                  <span className="ec-vc-value">15 min – 5 hrs</span>
                </div>
                <div className="ec-vc-slots" style={{ marginTop: "10px" }}>
                  <div className="ec-vc-slot active">
                    <strong>4:00 PM — 5:30 PM</strong>
                    <span>Label: Physics Class</span>
                  </div>
                  <div className="ec-vc-slot active">
                    <strong>6:00 PM — 6:45 PM</strong>
                    <span>Label: Student – Ali</span>
                  </div>
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
