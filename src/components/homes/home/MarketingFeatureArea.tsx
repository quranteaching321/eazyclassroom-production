const MarketingFeatureArea = () => {
  return (
    <section className="ec-feature-section ec-bg-dark">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Side (Left) */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker">Marketing & Growth</span>
              <h2 className="ec-title">Turn your academy into a marketing machine.</h2>
              <p className="ec-subtitle">
                Grow your brand while you teach. From live-streaming to one-click social publishing, we make it effortless to share highlights and make the entire platform look like your own custom software.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <div>
                    <h4>Web Panel Social Publishing</h4>
                    <p>Post directly from your dashboard. Upload an image, video, reel, or story and publish it to <strong>Facebook Page, Instagram Business, YouTube, LinkedIn, Pinterest, and TikTok</strong> with just one click.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                  </div>
                  <div>
                    <h4>Live One-Click Clipping</h4>
                    <p>During a live class, the teacher hits <strong>Start</strong> to clip a highlight and <strong>Stop</strong> to end it. The video instantly auto-publishes to all your connected social accounts.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  </div>
                  <div>
                    <h4>Smart YouTube Streaming</h4>
                    <p>Broadcast directly to YouTube. Stream the full screen, or use the <strong>"Select Area"</strong> tool to broadcast only a specific part of the screen (perfect for focusing on a worksheet or textbook page).</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  </div>
                  <div>
                    <h4>White-Label Branding</h4>
                    <p>Upload your academy's logo. It appears instantly on the web portal, the mobile PWA, and inside the EazyRecorder desktop app. Make the platform feel like your own custom software.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Side (Right) */}
          <div className="col-lg-6">
            <div className="ec-mkt-visual">
              
              {/* Card 1: Web Panel Publishing */}
              <div className="ec-mkt-card">
                <div className="ec-mkt-header">
                  <span>Social Publisher</span>
                  <span className="ec-badge-blue">Web Panel</span>
                </div>
                <div className="ec-mkt-body">
                  <div className="ec-mkt-upload-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <span>lesson-highlight.mp4</span>
                  </div>
                  <div className="ec-mkt-format-row">
                    <span className="ec-mkt-format active">Reel</span>
                    <span className="ec-mkt-format">Story</span>
                    <span className="ec-mkt-format">Video</span>
                    <span className="ec-mkt-format">Image</span>
                  </div>
                  
                  {/* Updated Social Icons */}
                  <div className="ec-mkt-socials">
                    <div className="ec-mkt-social-icons">
                      <span className="ec-soc-icon fb" title="Facebook Page">FB</span>
                      <span className="ec-soc-icon ig" title="Instagram Business">IG</span>
                      <span className="ec-soc-icon yt" title="YouTube">YT</span>
                      <span className="ec-soc-icon li" title="LinkedIn">IN</span>
                      <span className="ec-soc-icon pt" title="Pinterest">PT</span>
                      <span className="ec-soc-icon tt" title="TikTok">TT</span>
                    </div>
                    <button className="ec-mkt-publish-btn">Publish to All</button>
                  </div>
                </div>
              </div>

              {/* Card 2: YouTube Streaming */}
              <div className="ec-mkt-card mt-4">
                <div className="ec-mkt-header">
                  <span>YouTube Stream</span>
                  <span className="ec-badge-green">Connected</span>
                </div>
                <div className="ec-mkt-yt-tabs">
                  <div className="ec-mkt-yt-tab active">
                    <strong>Full Screen</strong>
                    <span>Broadcast the entire classroom</span>
                  </div>
                  <div className="ec-mkt-yt-tab">
                    <strong>Select Area</strong>
                    <span>Stream just the textbook page</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Branding */}
              <div className="ec-mkt-card mt-4">
                <div className="ec-mkt-header">
                  <span>Academy Branding</span>
                  <span className="ec-badge-blue">Active</span>
                </div>
                <div className="ec-mkt-brand-row">
                  <div className="ec-mkt-logo-placeholder">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </div>
                  <div>
                    <strong>Your Logo Here</strong>
                    <p>Synced to Portal, PWA & Desktop App</p>
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

export default MarketingFeatureArea;