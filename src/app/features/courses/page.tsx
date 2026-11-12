import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export const metadata = {
  title: "Course Management & Annotation | EazyClassroom",
  description: "Build courses, upload PDFs and images in bulk, assign them to rooms, and annotate live during the session.",
};

export default function CoursesPage() {
  return (
    <>
      <HeaderFour />
      <main style={{ paddingTop: "0px" }}>

        {/* ============ 1. HERO (Split Layout) ============ */}
        <section className="sp-hero-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="sp-badge">Course Management</span>
                <h1 className="sp-hero-title-new">
                  Your entire curriculum.<br />
                  <span className="text-blue">Inside the classroom.</span>
                </h1>
                <p className="sp-hero-sub-new">
                  Stop sending PDFs over WhatsApp. Build structured courses in your dashboard, upload materials in bulk, and assign them to specific rooms. Tutors open EazyRecorder and the right lesson is already there — ready to annotate.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-primary">Start Free</Link>
                  <Link href="/contact" className="sp-btn-secondary">Book a Demo</Link>
                </div>
              </div>

              {/* Hero Visual: Course Builder Tree + Annotation Overlay */}
              <div className="col-lg-6">
                <div className="sp-hero-visual-wrap">
                  
                  {/* Floating Annotation Preview */}
                  <div className="sp-hv-floating lock-card" style={{ bottom: '20px', right: '-20px', borderLeftColor: '#EF4444', zIndex: 10, padding: '12px' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', marginBottom: '6px' }}>Live Annotation</div>
                      <div style={{ background: '#FFFFFF', borderRadius: '6px', padding: '8px', position: 'relative', height: '50px' }}>
                        <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px', marginBottom: '4px', width: '80%' }}></div>
                        <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px', width: '60%' }}></div>
                        <svg style={{ position: 'absolute', top: '2px', left: '10px' }} width="120" height="40" viewBox="0 0 120 40" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M 5 30 Q 30 5 60 20 T 110 10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Main Card: Course Tree */}
                  <div className="sp-hv-main" style={{ transform: 'rotate(-2deg)', padding: '24px', background: '#FFFFFF' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>Course: Islamic Studies</span>
                      <span className="sp-badge" style={{ margin: 0, padding: '4px 10px', fontSize: '10px', background: 'rgba(16,185,129,0.1)', color: '#10B981', borderColor: 'rgba(16,185,129,0.3)' }}>Assigned</span>
                    </div>

                    {/* Course Tree */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                        <strong style={{ fontSize: '12px', color: '#0F172A' }}>Book 1: Foundations</strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', marginLeft: '20px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        <span style={{ fontSize: '12px', color: '#475569' }}>Chapter 1.pdf</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', marginLeft: '20px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <span style={{ fontSize: '12px', color: '#475569' }}>Diagram.jpg</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', marginLeft: '20px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        <span style={{ fontSize: '12px', color: '#475569' }}>Chapter 2.pdf</span>
                      </div>
                    </div>

                    <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', gap: '8px' }}>
                      <div style={{ flex: 1, padding: '8px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: '#0F172A', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px' }}>+ Add Book</div>
                      <div style={{ flex: 1, padding: '8px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: '#FFFFFF', background: '#2563EB', borderRadius: '6px' }}>Bulk Upload</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 2. THREE CORE FEATURES ============ */}
        <section className="sp-flow-section">
          <div className="container">
            <div className="sp-flow-header text-center">
              <h2>Three steps. Zero chaos.</h2>
              <p style={{ color: '#64748B', fontSize: '18px', marginTop: '16px', maxWidth: '640px', margin: '16px auto 0' }}>Everything from building the curriculum to drawing on it during a live class.</p>
            </div>

            <div className="row g-4 mt-4">
              
              {/* Feature 1: Course Builder */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#EFF6FF', color: '#2563EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Build & Upload</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Create multiple courses, add books within each course, and upload <strong>multiple files at a time</strong> (PDFs or images). No more sending files over WhatsApp.
                  </p>
                </div>
              </div>

              {/* Feature 2: Assign & Share */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#F5F3FF', color: '#8B5CF6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Assign & Share</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    Share any course with a <strong>secure shareable URL</strong>, or <strong>assign it directly to a room</strong>. When the tutor starts a session, only the assigned course loads in their sidebar.
                  </p>
                </div>
              </div>

              {/* Feature 3: Live Annotation */}
              <div className="col-lg-4">
                <div style={{ height: '100%', padding: '32px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '48px', height: '48px', background: '#FEF2F2', color: '#EF4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Annotate Live</h4>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                    While teaching, the tutor can open the course PDF and use the <strong>built-in annotation tool</strong> to draw, highlight, or write directly over the lesson pages on screen.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3. ACCESS SECTION ============ */}
        <section className="sp-access-section-new">
          <div className="container">
            <div className="row align-items-center">
              
              <div className="col-lg-5 mb-5 mb-lg-0">
                <span className="sp-badge">Where do I find this?</span>
                <h2 className="sp-access-title">One curriculum. Every classroom.</h2>
                <p className="sp-access-sub">
                  Build courses once in your admin dashboard. Tutors automatically see the right materials every time they open a room.
                </p>

                <div className="sp-steps-vertical">
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">1</div>
                    <div>
                      <h4>Open Courses</h4>
                      <p>Click <strong>Courses</strong> in your admin sidebar to build your curriculum.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">2</div>
                    <div>
                      <h4>Upload & Assign</h4>
                      <p>Bulk-upload your files, then assign the course to a room from the room settings.</p>
                    </div>
                  </div>
                  <div className="sp-step-v">
                    <div className="sp-step-v-num">3</div>
                    <div>
                      <h4>Tutor Accesses in EazyRecorder</h4>
                      <p>When the tutor opens EazyRecorder, the assigned course is loaded in the sidebar — ready to annotate live.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sp-dash-mockup">
                  <div className="sp-dash-header">
                    <div className="sp-hv-dots"><span/><span/><span/></div>
                    <span>Admin Dashboard · Courses</span>
                  </div>
                  <div className="sp-dash-body">
                    <div className="sp-dash-sidebar">
                      <div className="sp-dash-side-item">Overview</div>
                      <div className="sp-dash-side-item">Connect Rooms</div>
                      <div className="sp-dash-side-item">Live View</div>
                      <div className="sp-dash-side-item active">
                        Courses
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                      <div className="sp-dash-side-item">Recordings</div>
                    </div>
                    <div className="sp-dash-main" style={{ padding: '24px' }}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Your Courses</h5>
                        <div className="sp-dash-btn-primary-highlight" style={{ display: 'inline-flex', fontSize: '10px', padding: '6px 10px' }}>+ New Course</div>
                      </div>

                      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>Islamic Studies</strong>
                          <span style={{ fontSize: '10px', color: '#64748B' }}>3 books · 14 files</span>
                        </div>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#10B981', background: 'rgba(16,185,129,0.1)', padding: '3px 8px', borderRadius: '4px' }}>Assigned</span>
                      </div>

                      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <strong style={{ fontSize: '12px', color: '#0F172A', display: 'block' }}>Algebra I</strong>
                          <span style={{ fontSize: '10px', color: '#64748B' }}>2 books · 8 files</span>
                        </div>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#64748B', background: '#F1F5F9', padding: '3px 8px', borderRadius: '4px' }}>Shared URL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 4. FINAL CTA ============ */}
        <section className="sp-cta-split">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="sp-cta-split-title">
                  Bring your curriculum<br />
                  <span>into the classroom.</span>
                </h2>
                <p className="sp-cta-split-sub">
                  Stop chasing PDFs. Build your curriculum once, assign it to rooms, and let tutors teach with everything they need — right inside EazyRecorder.
                </p>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  <Link href="https://app.eazyclassroom.net/signup" className="sp-btn-white-solid">
                    Start Free
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                  <Link href="/contact" className="sp-btn-white-outline">Talk to Sales</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="sp-cta-card">
                  <div className="sp-cta-card-label">Included in your free trial</div>
                  <ul className="sp-cta-card-list">
                    <li><span className="sp-cta-check">✓</span><span>Unlimited courses & books</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Bulk upload (PDF / images)</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Shareable course URLs</span></li>
                    <li><span className="sp-cta-check">✓</span><span>Built-in annotation tool</span></li>
                  </ul>
                  <div className="sp-cta-card-footer">14-day trial · No credit card required</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterFour />
    </>
  );
}