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
                <li><a href="https://app.eazyclassroom.net/docs" target="_blank" rel="noreferrer">Documentation</a></li>
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