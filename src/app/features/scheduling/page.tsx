import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Scheduling & Access Control | EazyClassroom",
  description: "Enforce time zones, block late-night sessions, and limit room access. EazyRecorder guarantees the schedule is followed.",
};

export default function SchedulingPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "0px" }}>

        {/* ============ 1. HERO (Centered & Clean) ============ */}
        {/* ============ 1. HERO (Split Layout with Floating Cards) ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Left Side: Text */}
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Scheduling & Access Control</span>
                <h1 className="sp-hero-title-new">
                  Set the schedule.<br />
                  <span className="text-blue">Lock the room.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Stop tutors from starting classes at odd hours or leaving rooms open all night. 
                  EazyRecorder enforces your exact time slots and time zones automatically.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Right Side: Layered UI Visual */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">
                  
                  {/* Main Background Card: Admin Calendar */}
                  <div className="sp-hv-main">
                    <div className="sp-hv-header">
                      <div className="sp-hv-dots"><span/><span/><span/></div>
                      <span>Daily Schedule: Algebra I</span>
                    </div>
                    <div className="sp-hv-body">
                      <div className="sp-hv-grid">
                        {/* Days */}
                        <div className="sp-hv-day active">Mon <br/><span>16:00</span></div>
                        <div className="sp-hv-day">Tue <br/><span>—</span></div>
                        <div className="sp-hv-day active">Wed <br/><span>16:00</span></div>
                        <div className="sp-hv-day">Thu <br/><span>—</span></div>
                        <div className="sp-hv-day active">Fri <br/><span>16:00</span></div>
                      </div>
                      <div className="sp-hv-timezone">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Asia/Riyadh (GMT+3)
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 1: EazyRecorder Lock */}
                  <div className="sp-hv-floating lock-card">
                    <div className="sp-hv-lock-icon">🔒</div>
                    <div>
                      <strong>Room Locked</strong>
                      <p>Opens Mon/Wed/Fri at 16:00</p>
                    </div>
                  </div>

                  {/* Floating Card 2: Success Toast */}
                  <div className="sp-hv-floating success-card">
                    <div className="sp-hv-success-icon">✓</div>
                    <div>
                      <strong>Schedule saved</strong>
                      <p>Pushed to EazyRecorder</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 2. THE FLOW (Visual Step-by-Step) ============ */}
        <section className="sp-flow-section">
          <div className="container">
            
            <div className="sp-flow-header text-center">
              <h2>How it works from end to end.</h2>
            </div>

            <div className="sp-flow-grid">
              
              {/* Step 1: Admin Dashboard */}
              <div className="sp-flow-card">
                <div className="sp-flow-step">Step 1: Admin Setup</div>
                <h3>Pick a schedule type.</h3>
                <p>In your dashboard, choose between simple weekly hours (Range) or a precise 15-minute calendar (Slots).</p>
                
                {/* UI Mockup: Dashboard Form */}
                <div className="sp-ui-window">
                  <div className="sp-ui-header">Room Settings: Algebra I</div>
                  <div className="sp-ui-body">
                    <div className="sp-input-group">
                      <label>Timezone</label>
                      <div className="sp-input">Asia/Riyadh (GMT+3)</div>
                    </div>
                    
                    <div className="sp-toggle-group">
                      <span>Time Range</span>
                      <span className="active">Time Slots</span>
                    </div>

                    <div className="sp-calendar-grid">
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                        <div key={day} className={`sp-cal-col ${i === 1 || i === 3 ? "empty" : "filled"}`}>
                          <div className="sp-cal-day">{day}</div>
                          <div className="sp-cal-block">
                            {i === 1 || i === 3 ? "—" : "16:00 - 17:30"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: EazyRecorder Block */}
              <div className="sp-flow-card">
                <div className="sp-flow-step">Step 2: Enforcement</div>
                <h3>The app blocks the teacher.</h3>
                <p>When a tutor logs into the Windows client to start a session, EazyRecorder checks your rules.</p>
                
                {/* UI Mockup: EazyRecorder App */}
                <div className="sp-ui-window app-mockup">
                  <div className="sp-app-header">
                    <span className="sp-dot red"></span>
                    <span className="sp-dot yellow"></span>
                    <span className="sp-dot green"></span>
                    <span className="sp-app-title">EazyRecorder</span>
                  </div>
                  <div className="sp-app-body">
                    <div className="sp-app-room">
                      <div className="sp-app-icon">A</div>
                      <div>
                        <strong>Algebra I</strong>
                        <span>Teacher Session</span>
                      </div>
                    </div>
                    <div className="sp-app-lock">
                      <div className="sp-lock-icon">🔒</div>
                      <div className="sp-lock-text">
                        <strong>Room Locked</strong>
                        <p>Opens Mon/Wed/Fri at 16:00</p>
                      </div>
                    </div>
                    <button className="sp-app-btn" disabled>Start Session</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. THE TWO MODES (Deep Dive) ============ */}
        <section className="sp-modes-section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="sp-section-title">Two ways to schedule.</h2>
                <p className="sp-section-sub">Whether you run a strict timetable or a flexible drop-in center, we have a mode for it.</p>
              </div>
            </div>

            <div className="row g-5 align-items-center">
              {/* Range Mode */}
              <div className="col-lg-6">
                <div className="sp-mode-text">
                  <h3>1. Time Range Mode</h3>
                  <p className="text-slate-600 mb-4">
                    Perfect for standard weekly classes. Select the days of the week, the start time, and the end time. 
                    The room opens and closes automatically every week.
                  </p>
                  <ul className="sp-check-list">
                    <li>Choose any combination of days (e.g., Mon-Fri)</li>
                    <li>Set one start time and one end time</li>
                    <li>Best for standard 9-to-5 tutoring blocks</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sp-visual-range">
                  <div className="sp-vr-header">Weekly Schedule</div>
                  <div className="sp-vr-days">
                    <span className="on">M</span><span>T</span><span className="on">W</span><span>T</span><span className="on">F</span><span>S</span><span>S</span>
                  </div>
                  <div className="sp-vr-time">
                    <div><span>Starts</span> <strong>09:00 AM</strong></div>
                    <div><span>Ends</span> <strong>05:00 PM</strong></div>
                  </div>
                </div>
              </div>

              {/* Slots Mode */}
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="sp-visual-slots">
                  <div className="sp-vs-header">
                    <span>Time Slots</span>
                    <span className="sp-vs-badge">15-min precision</span>
                  </div>
                  <div className="sp-vs-row">
                    <span className="sp-vs-day">Mon</span>
                    <div className="sp-vs-block blue">
                      <strong>Algebra I</strong>
                      <span>16:00 – 17:30</span>
                    </div>
                  </div>
                  <div className="sp-vs-row">
                    <span className="sp-vs-day">Tue</span>
                    <div className="sp-vs-block empty">Blocked</div>
                  </div>
                  <div className="sp-vs-row">
                    <span className="sp-vs-day">Wed</span>
                    <div className="sp-vs-block green">
                      <strong>Physics Lab</strong>
                      <span>18:00 – 19:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="sp-mode-text">
                  <h3>2. Time Slots Mode</h3>
                  <p className="text-slate-600 mb-4">
                    Perfect for shared rooms or complex timetables. Paint exact 15-minute blocks onto a visual calendar.
                    You can even label slots differently (e.g., "Physics Lab" vs "Algebra").
                  </p>
                  <ul className="sp-check-list">
                    <li>15-minute precision on a visual grid</li>
                    <li>Custom labels per slot for tracking</li>
                    <li>Ideal for rooms shared by multiple tutors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 4. HOW TO ACCESS IT ============ */}
        {/* ============ 4. HOW TO ACCESS IT (Dashboard Walkthrough) ============ */}
        <section className="sp-access-section-new">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Left Side: Steps */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <span className="sp-badge">Where do I find this?</span>
                <h2 className="sp-access-title">Three clicks from your dashboard.</h2>
                <p className="sp-access-sub">
                  No technical setup required. Everything is built right into your admin panel.
                </p>

                <div className="sp-steps-vertical">
                  
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Open Connect Rooms</h4>
                      <p>Log in to your dashboard and click <strong>Connect Rooms</strong> in the left sidebar.</p>
                    </div>
                  </div>

                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Click Daily Schedule</h4>
                      <p>Find the room you want to lock and click the <strong>Daily Schedule</strong> button next to it.</p>
                    </div>
                  </div>

                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>Set your rules</h4>
                      <p>Choose Range or Slots, set the timezone, and click Save. The rules instantly push to <strong>Eazy Recorder</strong> (our Windows client) where the teacher can start the session accordingly.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Side: Dashboard Mockup */}
              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  
                  {/* Window Header */}
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Connect Rooms</span>
                  </div>

                  {/* App Body */}
                  <div className="sp-dash-body">
                    
                    {/* Sidebar */}
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item active">
                        Connect Rooms
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                      <div className="sp-dash-side-item">Recordings</div>
                      <div className="sp-dash-side-item">Settings</div>
                    </div>

                    {/* Main Area */}
                    <div className="sp-dash-main">
                      
                      <div className="sp-dash-main-header">
                        <h5>Active Rooms</h5>
                        <span className="sp-dash-badge">3 Rooms</span>
                      </div>

                      {/* Room 1 */}
                      <div className="sp-dash-room-row">
                        <div className="sp-dash-room-info">
                          <div className="sp-dash-room-icon blue">A</div>
                          <div>
                            <strong>Algebra I</strong>
                            <span>External (Zoom)</span>
                          </div>
                        </div>
                        <div className="sp-dash-room-actions">
                          <div className="sp-dash-btn-outline">Edit</div>
                          <div className="sp-dash-btn-primary-highlight">
                            Daily Schedule
                            {/* Simulated Cursor Pointer */}
                            <svg className="sp-cursor" width="20" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                          </div>
                        </div>
                      </div>

                      {/* Room 2 */}
                      <div className="sp-dash-room-row">
                        <div className="sp-dash-room-info">
                          <div className="sp-dash-room-icon green">P</div>
                          <div>
                            <strong>Physics Lab</strong>
                            <span>Native</span>
                          </div>
                        </div>
                        <div className="sp-dash-room-actions">
                          <div className="sp-dash-btn-outline">Edit</div>
                          <div className="sp-dash-btn-outline">Daily Schedule</div>
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
        <section className="sp-cta-section">
          <div className="container text-center">
            <h2>Stop worrying about time zones.</h2>
            <p>Take full control of your academy's schedule today.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-white">Start Free</Link>
              <Link href="/contact" className="sp-btn-outline-white">Talk to Sales</Link>
            </div>
          </div>
        </section>

      </main>
      <FooterFour />
    </>
  );
}