import Link from "next/link";

const CourseAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Text Side (Left) */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker">Course Management</span>
              <h2 className="ec-title">Organize, Assign, and Annotate.</h2>
              <p className="ec-subtitle">
                Stop sending PDFs over WhatsApp. Build your academy's curriculum inside the dashboard, assign it to specific rooms, and let tutors access it with a built-in drawing tool.
              </p>

              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <div>
                    <h4>Bulk Upload & Shareable Links</h4>
                    <p>Create courses, add multiple books, and upload all your PDFs and images at once. Need to send a course to a student? Generate a secure shareable URL instantly.</p>
                  </div>
                </li>
                <li>
                  <div className="ec-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                  </div>
                  <div>
                    <h4>Room Assignment & Annotation</h4>
                    <p>Assign a specific course to a room. When the tutor starts a session, only that course loads in their sidebar. While teaching, use the built-in annotation tool to draw on the live screen.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link href="/course-management" className="ec-dash-btn">
                  Explore Course Management
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Side (Right) */}
          <div className="col-lg-6">
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
              </div>

              {/* Simulated Annotation Overlay */}
              <div className="ec-cv-annotation-preview">
                <div className="ec-cv-annotation-line"></div>
                <svg className="ec-cv-annotation-draw" viewBox="0 0 200 50" fill="none" stroke="#EF4444" strokeWidth="3">
                  <path d="M 10 25 Q 50 -10 100 25 T 190 25" />
                </svg>
              </div>

              <div className="ec-cv-actions">
                <button className="ec-cv-btn outline">+ Add Book</button>
                <button className="ec-cv-btn solid">Bulk Upload Files</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseAreaHomeFour;