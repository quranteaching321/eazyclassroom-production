"use client";

const PricingAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">
        
        {/* Centered Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="ec-kicker">Eazy AI powered by Gemini</span>
            <h2 className="ec-title">Turn every live class into a data goldmine.</h2>
            <p className="ec-subtitle mx-auto">
              Stop guessing how your teachers are performing. Our AI silently analyzes the lesson as it happens—giving you instant ratings and catching safety issues before they become problems.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="row g-4 justify-content-center">
          
          {/* Card 1: BYOK & Cost */}
          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h4>Bring Your Own Key</h4>
              <p>We integrate directly with Google Gemini. The <strong>free tier is powerful enough to process almost all daily sessions for a room</strong>. You pay Google for your API usage, and we only charge a flat $10/month for the dashboard. Zero markups.</p>
            </div>
          </div>

          {/* Card 2: Live Analysis */}
          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h4>Live Lesson Analysis</h4>
              <p>The AI listens and watches during the session to generate an overall lesson analysis. It automatically grades the teacher on Engagement, Content Clarity, and Professionalism, giving you a real-time AI rating for the session.</p>
            </div>
          </div>

          {/* Card 3: Safety Alerts */}
          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4>Off-Topic & Safety Alerts</h4>
              <p>The AI scans audio, screen shares, and chat in real-time. It instantly flags if the conversation strays too far from the lesson, or if someone shares personal information (like a phone number or email).</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingAreaHomeFour;