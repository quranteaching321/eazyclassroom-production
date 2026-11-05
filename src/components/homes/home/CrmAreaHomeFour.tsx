import Link from "next/link";

const CrmAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-bg-dark">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Visual Side (Left) */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-crm-visual">
              
              {/* Step 1: Room Setup */}
              <div className="ec-crm-step">
                <div className="ec-crm-step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                </div>
                <div className="ec-crm-step-content">
                  <strong>1. Add your CRM link to the Room</strong>
                  <span>Paste your custom CRM URL during room creation.</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="ec-crm-connector">
                <div className="ec-crm-line"></div>
              </div>

              {/* Step 2: CRM Opens */}
              <div className="ec-crm-step active">
                <div className="ec-crm-browser">
                  <div className="ec-crm-browser-header">
                    <div className="ec-crm-dots"><span></span><span></span><span></span></div>
                    <div className="ec-crm-url">https://crm.your-academy.com/launch-class</div>
                  </div>
                  <div className="ec-crm-browser-body">
                    <p>Welcome, Teacher! Your class is ready.</p>
                    <button className="ec-crm-launch-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      Launch Zoom Meeting
                    </button>
                  </div>
                </div>
                <div className="ec-crm-step-content" style={{ marginTop: "12px" }}>
                  <strong>2. Teacher clicks "Start" in EazyRecorder</strong>
                  <span>It opens your CRM exactly as they are used to.</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="ec-crm-connector">
                <div className="ec-crm-line"></div>
              </div>

              {/* Step 3: Auto-Detect Recording */}
              <div className="ec-crm-step">
                <div className="ec-crm-step-icon green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div className="ec-crm-step-content">
                  <strong>3. Meeting detected. Recording starts.</strong>
                  <span>The moment they start Zoom from your CRM, our app begins recording and live monitoring.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Text Side (Right) */}
          <div className="col-lg-6">
            <div className="ec-feature-content ps-lg-5">
              <span className="ec-kicker">Custom CRM Support</span>
              <h2 className="ec-title">Keep your CRM. We'll plug right into it.</h2>
              <p className="ec-subtitle">
                Does your academy already use a custom CRM or portal to launch your Zoom, Meet, or Teams sessions? No problem. We don't force you to abandon your system. EazyClassroom acts as the bridge.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <div>
                    <h4>Paste your CRM URL</h4>
                    <p>When creating a room, simply paste the URL of your CRM page where the meeting link lives. EazyRecorder will use this as the launchpad for that specific class.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div>
                    <h4>Seamless Launch</h4>
                    <p>When the tutor clicks "Start Session" in EazyRecorder, it opens your CRM. They click their usual Zoom/Meet link inside your CRM, and the meeting begins.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4>Background Magic</h4>
                    <p>EazyRecorder silently detects that the meeting started. It immediately begins cloud recording, AI analysis, and live monitoring—without the tutor ever having to press "Record".</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <div>
                    <h4>Exclusive to Paid & Trial Plans</h4>
                    <p>This enterprise-grade routing is available on all Paid and Trial plans. If you don't have a CRM, you can just use our native rooms or connect Zoom directly.</p>
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

export default CrmAreaHomeFour;