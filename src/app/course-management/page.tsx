import HeaderFour from "@/layout/headers/HeaderFour";
import FooterFour from "@/layout/footers/FooterFour";
import Link from "next/link";

export default function CourseManagementPage() {
  return (
    <>
      <HeaderFour />
      <main>
        {/* Hero Section */}
        <section className="ec-feature-section ec-bg-dark" style={{ paddingTop: "160px", paddingBottom: "80px" }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="ec-kicker">Course Management</span>
                <h1 className="ec-title">Organize, Assign, and Annotate.</h1>
                <p className="ec-subtitle mx-auto">
                  Stop sending PDFs over WhatsApp. Build your academy's curriculum inside the dashboard, assign it to specific rooms, and let tutors access it with a built-in drawing tool.
                </p>
                <div className="mt-4">
                  <Link href="/signup" className="ec-dash-btn">Start Free Trial</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: Admin Course Builder */}
        <section className="ec-feature-section ec-bg-light">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Visual Side (Left) */}
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="ec-course-visual">
                  <div className="ec-cv-header">
                    <span>Course Builder: Islamic Studies</span>
                    <span className="ec-rs-badge active">Draft</span>
                  </div>
                  
                  {/* Course Tree */}
                  <div className="ec-cv-tree">
                    <div className="ec-cv-item root">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                      <strong>Book 1: Foundations</strong>
                    </div>
                    <div className="ec-cv-item child">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      <span>Chapter 1.pdf</span>
                    </div>
                    <div className="ec-cv-item child">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      <span>Diagram.jpg</span>
                    </div>
                    <div className="ec-cv-item child">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      <span>Chapter 2.pdf</span>
                    </div>
                  </div>

                  <div className="ec-cv-actions">
                    <button className="ec-cv-btn outline">+ Add Book</button>
                    <button className="ec-cv-btn solid">Bulk Upload Files</button>
                  </div>
                </div>
              </div>

              {/* Text Side (Right) */}
              <div className="col-lg-6">
                <div className="ec-feature-content ps-lg-5">
                  <span className="ec-kicker">For Admins</span>
                  <h2 className="ec-title">Build your curriculum once. Use it forever.</h2>
                  <p className="ec-subtitle">
                    Ditch the messy folders. Create structured courses, add multiple books, and upload all your PDFs and images at once.
                  </p>
                  <ul className="ec-feature-list">
                    <li>
                      <div className="ec-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      </div>
                      <div>
                        <h4>Bulk Upload Materials</h4>
                        <p>Drag and drop multiple PDFs, images, or documents at once into a specific book or chapter.</p>
                      </div>
                    </li>
                    <li>
                      <div className="ec-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </div>
                      <div>
                        <h4>Shareable URLs</h4>
                        <p>Need to send a course to a student? Generate a secure shareable link for any course instantly.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature 2: Room Assignment & Tutor View */}
        <section className="ec-feature-section ec-bg-dark">
          <div className="container">
            <div className="row align-items-center flex-column-reverse flex-lg-row">
              
              {/* Text Side (Left) */}
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="ec-feature-content pe-lg-5">
                  <span className="ec-kicker">The Classroom Experience</span>
                  <h2 className="ec-title">The right materials. In the right room.</h2>
                  <p className="ec-subtitle">
                    You control exactly what the tutor sees. Assign a specific course to a room. When the tutor starts a session in that room using EazyRecorder, only the assigned course will load in their sidebar.
                  </p>
                  
                  <ul className="ec-feature-list">
                    <li>
                      <div className="ec-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                      <div>
                        <h4>One-Click Room Sync</h4>
                        <p>Assign the "Algebra I" course to the "Grade 10 Math" room. The tutor doesn't have to search for files; it's already waiting for them.</p>
                      </div>
                    </li>
                    <li>
                      <div className="ec-icon-wrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                      </div>
                      <div>
                        <h4>Built-in Annotation Tool</h4>
                        <p>While the lesson is live, the tutor can open the PDF inside EazyRecorder and use the built-in drawing tool to highlight text or draw diagrams directly on the screen.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Side (Right) */}
              <div className="col-lg-6">
                <div className="ec-tutor-visual">
                  <div className="ec-tv-toolbar">
                    <div className="ec-tv-tool active">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                      Pen
                    </div>
                    <div className="ec-tv-tool">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Highlight
                    </div>
                    <div className="ec-tv-tool">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      Erase
                    </div>
                  </div>
                  <div className="ec-tv-page">
                    <div className="ec-tv-page-title">Chapter 1: Introduction to Algebra</div>
                    <div className="ec-tv-line"></div>
                    <div className="ec-tv-line short"></div>
                    {/* Simulated Annotation */}
                    <svg className="ec-tv-annotation" viewBox="0 0 200 100" fill="none" stroke="#EF4444" strokeWidth="3">
                      <path d="M 30 70 Q 60 20 120 40 T 170 60" />
                      <circle cx="120" cy="40" r="15" strokeDasharray="4 4" />
                    </svg>
                  </div>
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