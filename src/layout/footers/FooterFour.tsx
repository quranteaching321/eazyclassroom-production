import Link from "next/link";

const FooterFour = () => {
  return (
    <footer className="ec-footer">
      
                {/* Main Footer Links */}
      <div className="ec-footer-main">
        <div className="container">
          <div className="row">
            
            {/* Brand Column */}
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <Link href="/" className="ec-footer-logo">
                <img src="/assets/img/logo/logo_2.jpg" alt="EazyClassroom" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
              </Link>
              <p className="ec-footer-desc">
                The All-in-One Virtual Classroom Management System. 
                Bring your own Zoom, Meet, or Teams, and let us handle the recording, AI, and security.
              </p>
              <div className="ec-footer-socials">
                <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="col-lg-2 col-md-4 col-6 mb-4 mb-lg-0">
              <h4 className="ec-footer-heading">Platform</h4>
              <ul className="ec-footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/download">Download App</Link></li>
                <li><Link href="/features/courses">Course Management</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h4 className="ec-footer-heading">Features</h4>
              <ul className="ec-footer-links">
                <li><Link href="#how_it_works">How it Works</Link></li>
                <li><Link href="/features/ai">Eazy AI Analysis</Link></li>
                <li><Link href="/features/recording">Recording & Storage</Link></li>
                <li><Link href="/features/marketing">Social Publishing</Link></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="col-lg-3 col-md-4 col-12 mb-4 mb-lg-0">
              <h4 className="ec-footer-heading">Company</h4>
              <ul className="ec-footer-links">
                <li><Link href="/contact">Contact Support</Link></li>
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ec-footer-bottom">
        <div className="container">
          <div className="ec-footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} EazyClassroom. All rights reserved.</p>
            <div className="ec-footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterFour;