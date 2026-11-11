import HeaderFour from "@/layout/headers/HeaderFour";
import DownloadGate from "@/components/DownloadGate";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Download EazyRecorder | Free Virtual Classroom App",
  description: "The companion app for your virtual classroom. Start Zoom, Meet, or Teams sessions and record them automatically. Free for local recording.",
};

const Check = ({ color = "#10B981" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function DownloadPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ background: "#FFFFFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

        {/* ============ HERO ============ */}
        <section style={{ padding: "121px 24px 60px", background: "#F8FAFC", textAlign: "center", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", color: "#059669", padding: "6px 16px", borderRadius: "100px", fontSize: "13px", fontWeight: 700, marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block" }}></span>
              100% Free Windows App
            </div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 20px" }}>
              Start your class.<br />
              <span style={{ color: "#2563EB" }}>We'll handle the recording.</span>
            </h1>
            <p style={{ fontSize: "19px", color: "#475569", lineHeight: 1.6, margin: "0 0 32px" }}>
              EazyRecorder is the free desktop companion for your virtual classroom. Paste your Zoom, Meet, Teams, or Native room link, and the app automatically starts recording the session the moment you go live.
            </p>
            <a download href="https://api.eazyclassroom.net/downloads/EazyRecorderSetup.exe" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0F172A", color: "#FFFFFF", padding: "16px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download for Windows
            </a>
          </div>
        </section>

        {/* ============ COMPARE LAYOUT ============ */}
        <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
                What do you get?
              </h2>
              <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>
                See exactly what is included for free, and what requires a room login.
              </p>
            </div>

            <div className="row g-4">
              {/* FREE SIDE */}
              <div className="col-lg-6">
                <div style={{ height: "100%", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
                    <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0F172A", margin: 0 }}>Free App</h3>
                    <span style={{ background: "#F1F5F9", color: "#475569", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>No Signup</span>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    {[
                      { t: "Automatic Class Capture", d: "Records the virtual classroom session directly to the tutor's PC." },
                      { t: "Tamper-Proof", d: "Once the class starts, the tutor cannot pause or stop the recording." },
                      { t: "Disk Protection", d: "Stops the recording automatically before the PC runs out of storage." },
                      { t: "Admin Lockdown", d: "Local recordings are hidden and locked behind a Windows Admin password." },
                      { t: "Auto-Join Classes", d: "Paste a Zoom/Meet link or select a Native room to start instantly." },
                      { t: "Built-in Player", d: "Tutors can review and listen to their recorded classes inside the app." }
                    ].map((f, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <Check />
                        <div>
                          <div style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>{f.t}</div>
                          <div style={{ fontSize: "13px", color: "#64748B" }}>{f.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a download href="https://api.eazyclassroom.net/downloads/EazyRecorderSetup.exe" style={{ display: "block", textAlign: "center", padding: "14px", background: "#F8FAFC", color: "#0F172A", border: "1px solid #CBD5E1", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                    Download Free App
                  </a>
                </div>
              </div>

              {/* CLOUD SIDE */}
              <div className="col-lg-6">
                <div style={{ height: "100%", background: "#0F172A", border: "1px solid #1E293B", borderRadius: "20px", padding: "40px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "rgba(37, 99, 235, 0.2)", filter: "blur(40px)", borderRadius: "50%" }}></div>
                  
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", position: "relative", zIndex: 1 }}>
                    <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>Cloud Connected</h3>
                    <span style={{ background: "#2563EB", color: "#FFFFFF", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>Room Login</span>
                  </div>
                  
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 1 }}>
                    {[
                      { t: "Everything in Free", d: "All local classroom recording features are still included." },
                      { t: "Cloud Backup", d: "Pushes a second copy of the class to your secure cloud." },
                      { t: "Live Monitoring", d: "Admin can silently watch and listen to the class from the web." },
                      { t: "Eazy AI Analysis", d: "Ratings, lesson summaries, and off-topic alerts." },
                      { t: "Course Viewer & Annotation", d: "Open PDFs and draw over the textbook live during class." },
                      { t: "Unlimited YouTube Streaming", d: "Stream the class live to YouTube (Full screen or Select Area)." },
                      { t: "Social Publishing", d: "Clip a highlight during class and auto-publish to 6 platforms." }
                    ].map((f, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <Check color="#34D399" />
                        <div>
                          <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>{f.t}</div>
                          <div style={{ fontSize: "13px", color: "#94A3B8" }}>{f.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link href="https://app.eazyclassroom.net/signup" style={{ display: "block", textAlign: "center", padding: "14px", background: "#3B82F6", color: "#FFFFFF", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none", position: "relative", zIndex: 1 }}>
                    Signup to Unlock Cloud
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SETUP FLOW ============ */}
        <section style={{ padding: "100px 24px", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
                How to start a session
              </h2>
              <p style={{ fontSize: "16px", color: "#64748B", margin: 0 }}>
                Three simple steps from the dashboard to the classroom.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4">
                <div style={{ padding: "32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", height: "100%" }}>
                  <div style={{ width: "32px", height: "32px", background: "#EFF6FF", color: "#2563EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "20px" }}>1</div>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>Create Room Logins</h4>
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                    In your admin dashboard, generate a "Room Login" (username and password) and assign it to your virtual classrooms.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div style={{ padding: "32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", height: "100%" }}>
                  <div style={{ width: "32px", height: "32px", background: "#EFF6FF", color: "#2563EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "20px" }}>2</div>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>Tutor Signs In</h4>
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                    The tutor opens EazyRecorder and enters that Room Login. They don't need an email or a personal account.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div style={{ padding: "32px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", height: "100%" }}>
                  <div style={{ width: "32px", height: "32px", background: "#EFF6FF", color: "#2563EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px", marginBottom: "20px" }}>3</div>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>Start Session</h4>
                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                    They paste the Zoom/Meet link (or select a Native room) and click Start. Dual-recording (Local + Cloud) begins automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MAGIC OF THE CLOUD ============ */}
        <section style={{ padding: "100px 24px", background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            {/* Feature 1: Dual Recording */}
            <div className="row align-items-center mb-5 pb-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>Dual Local & Cloud Recording</h3>
                <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
                  When a session starts, EazyRecorder writes a copy to the tutor's hard drive <em>and</em> streams a copy to your secure cloud simultaneously. Even if the tutor's internet drops, the local file of the class is perfectly safe.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#334155" }}><Check color="#2563EB" /> Cloud recordings are saved securely for 50 GB per room.</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#334155" }}><Check color="#2563EB" /> Admin can watch the cloud feed live from the dashboard.</li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                 <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "32px" }}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                      <div>
                        <div style={{ fontSize: "24px", marginBottom: "8px" }}>💾</div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Local PC</div>
                        <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 600 }}>● Recording</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "24px", marginBottom: "8px" }}>☁️</div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Cloud</div>
                        <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 600 }}>● Streaming</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Feature 2: Streaming Area */}
            <div className="row align-items-center mb-5 pb-5 flex-column-reverse flex-lg-row">
              <div className="col-lg-6 text-center mb-4 mb-lg-0">
                 <div style={{ background: "#0B1120", border: "1px solid #1E293B", borderRadius: "16px", padding: "24px" }}>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                      <div style={{ flex: 1, background: "#1E293B", border: "2px solid #3B82F6", borderRadius: "6px", padding: "12px", textAlign: "center", fontSize: "12px", color: "#F8FAFC", fontWeight: 600 }}>Select Area</div>
                      <div style={{ flex: 1, background: "#1E293B", border: "1px solid #334155", borderRadius: "6px", padding: "12px", textAlign: "center", fontSize: "12px", color: "#94A3B8", fontWeight: 600 }}>Full Screen</div>
                    </div>
                    <div style={{ border: "2px dashed #3B82F6", borderRadius: "8px", padding: "40px 20px", color: "#60A5FA", fontSize: "12px", fontWeight: 600 }}>
                      [ Drag to select textbook page ]
                    </div>
                 </div>
              </div>
              <div className="col-lg-6 ps-lg-5">
                <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>Smart YouTube Streaming</h3>
                <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
                  Broadcast your class directly to your YouTube channel. Choose to stream the entire screen, or use the <strong>Select Area</strong> tool to crop out the messy UI and broadcast only the textbook page or worksheet.
                </p>
              </div>
            </div>

            {/* Feature 3: Courses & Annotation */}
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>In-App Courses & Annotation</h3>
                <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
                  If you attached a PDF to a room in the dashboard, the tutor can open it directly inside EazyRecorder. They can draw, highlight, and write over the pages live, and the annotations are baked into the classroom recording.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                 <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "32px", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}>
                    <div style={{ height: "4px", background: "#E2E8F0", borderRadius: "2px", marginBottom: "8px", width: "80%" }}></div>
                    <div style={{ height: "4px", background: "#E2E8F0", borderRadius: "2px", marginBottom: "8px", width: "60%" }}></div>
                    <div style={{ position: "relative", marginTop: "16px" }}>
                      <svg width="100%" height="50" viewBox="0 0 200 50" fill="none" stroke="#EF4444" strokeWidth="3">
                        <path d="M 10 40 Q 40 10 80 30 T 180 20" />
                      </svg>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section style={{ padding: "100px 24px", background: "#0F172A", textAlign: "center" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Ready to upgrade your classroom?
            </h2>
            <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: 1.6, margin: "0 0 32px" }}>
              Download EazyRecorder now, or start your 14-day free trial to unlock the cloud.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a download href="https://api.eazyclassroom.net/downloads/EazyRecorderSetup.exe" style={{ display: "inline-block", background: "#FFFFFF", color: "#0F172A", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                Download for Windows
              </a>
              <Link href="https://app.eazyclassroom.net/signup" style={{ display: "inline-block", background: "transparent", color: "#FFFFFF", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1px solid #334155" }}>
                Start Free
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterFour />
    </>
  );
}

