"use client";

const PricingAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="ec-kicker">Eazy AI - Powered by Gemini</span>
            <h2 className="ec-title">AI Based Rating &amp; Analysis</h2>
            <p className="ec-subtitle mx-auto">
              Get deep insights into every session during the lesson. Powered by Google Gemini, Eazy AI automatically evaluates your academy&apos;s performance.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h4>AI Based Rating</h4>
              <p>Gemini grades every session on engagement, professionalism, content clarity, teacher mistake pickup, and student participation - automatically.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <h4>Lesson Overview &amp; Keypoints</h4>
              <p>Get a concise summary and key takeaways for every lesson, so you know exactly what was covered without watching the whole recording.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4>Off-Topic Tracking</h4>
              <p>It flags and send alerts during the session for non-academic conversations - personal chats, abusive or harsh language - keeping your academy compliant.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4>During the Session</h4>
              <p>AI runs during the lesson (5-8 min delay), not just after it ends. Intervene and fix issues while the class is still happening.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h4>Full Multimodal Analysis</h4>
              <p>Analyzes everything - audio, video, screen sharing, chat, and lesson content. Nothing gets missed by the AI.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ec-ai-grid-card">
              <div className="ec-agc-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777z"></path></svg>
              </div>
              <h4>Bring Your Own Key</h4>
              <p>Use your own Gemini API key. The free tier is powerful enough to process almost all daily lessons of a room. Set a unique key per room.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingAreaHomeFour;
