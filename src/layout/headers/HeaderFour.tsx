'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderFour = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileOpen]);

    const toggleSubMenu = (menu: string) => {
        setMobileSubMenu(mobileSubMenu === menu ? null : menu);
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="fid-announcement-bar">
                <span className="fid-announcement-badge">NEW</span>
                <span className="fid-announcement-text">Eazy AI Live Monitoring is now available.</span>
                <Link href="/features/ai" className="fid-announcement-link">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
            </div>

            <header className={`fid-header ${isSticky ? "fid-sticky" : ""}`}>
                <div className="fid-container">

                    {/* Logo */}
                    <Link href="/" className="fid-logo" onClick={() => setMobileOpen(false)}>
                        <div className="fid-logo-box">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        <span>EazyClassroom</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="fid-nav">
                        <div className="fid-nav-item">
                            <span className="fid-nav-link">Platform <i className="fid-chevron"></i></span>
                            <div className="fid-dropdown">
                                <Link href="/features/native-rooms"><strong>Native Rooms</strong><span>Fully hosted classrooms</span></Link>
                                <Link href="/features/byom"><strong>Bring Your Own Meeting</strong><span>Zoom, Meet, Teams</span></Link>
                                <Link href="/features/monitoring"><strong>Live Monitoring</strong><span>Real-time oversight</span></Link>
                            </div>
                        </div>
                        <div className="fid-nav-item">
                            <span className="fid-nav-link">EazyRecorder <i className="fid-chevron"></i></span>
                            <div className="fid-dropdown">
                                <Link href="/download"><strong>Download App</strong><span>Free Windows client</span></Link>
                                <Link href="/features/recording"><strong>Tamper-Proof</strong><span>Cannot be stopped</span></Link>
                            </div>
                        </div>
                        <Link href="/pricing" className="fid-nav-link">Pricing</Link>
                        <Link href="/docs" className="fid-nav-link">Docs</Link>
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="fid-header-actions">
                        <Link href="/signin" className="fid-btn-text">Log In</Link>
                        <Link href="/download" className="fid-btn-outline">Download App</Link>
                        <Link href="/signup" className="fid-btn-solid">Start Free Trial</Link>
                    </div>

                    {/* Mobile Toggle (Hamburger) */}
                    <button 
                        className="fid-mobile-toggle" 
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fid-mobile-overlay ${mobileOpen ? 'open' : ''}`}>
                    <div className="fid-mobile-menu">
                        
                        {/* Accordion: Platform */}
                        <div className="fid-mobile-nav-group">
                            <button className="fid-mobile-nav-btn" onClick={() => toggleSubMenu('platform')}>
                                Platform
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mobileSubMenu === 'platform' ? 'rotated' : ''}><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </button>
                            <div className={`fid-mobile-sub ${mobileSubMenu === 'platform' ? 'open' : ''}`}>
                                <Link href="/features/native-rooms" onClick={() => setMobileOpen(false)}>Native Rooms</Link>
                                <Link href="/features/byom" onClick={() => setMobileOpen(false)}>Bring Your Own Meeting</Link>
                                <Link href="/features/monitoring" onClick={() => setMobileOpen(false)}>Live Monitoring</Link>
                            </div>
                        </div>

                        {/* Accordion: EazyRecorder */}
                        <div className="fid-mobile-nav-group">
                            <button className="fid-mobile-nav-btn" onClick={() => toggleSubMenu('recorder')}>
                                EazyRecorder
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mobileSubMenu === 'recorder' ? 'rotated' : ''}><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </button>
                            <div className={`fid-mobile-sub ${mobileSubMenu === 'recorder' ? 'open' : ''}`}>
                                <Link href="/download" onClick={() => setMobileOpen(false)}>Download App</Link>
                                <Link href="/features/recording" onClick={() => setMobileOpen(false)}>Tamper-Proof Recording</Link>
                            </div>
                        </div>

                        {/* Direct Links */}
                        <Link href="/pricing" className="fid-mobile-nav-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
                        <Link href="/docs" className="fid-mobile-nav-link" onClick={() => setMobileOpen(false)}>Docs</Link>

                        <div className="fid-m-divider"></div>
                        
                        {/* Mobile CTAs */}
                        <Link href="/signin" className="fid-m-btn-outline" onClick={() => setMobileOpen(false)}>Log In</Link>
                        <Link href="/signup" className="fid-m-btn-solid" onClick={() => setMobileOpen(false)}>Start Free Trial</Link>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderFour;