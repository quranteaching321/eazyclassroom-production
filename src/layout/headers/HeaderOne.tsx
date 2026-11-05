'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderOne = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`eazy-custom-header ${isSticky ? "eazy-is-sticky" : ""}`}>
            <div className="eazy-header-container">
                
                {/* Logo */}
                <Link href="/" className="eazy-logo">
                    <div className="eazy-logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <span className="eazy-logo-text">EazyClassroom</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="eazy-desktop-nav">
                    <Link href="/features">Features</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/download">EazyRecorder</Link>
                    <Link href="/docs">Docs</Link>
                </nav>

                {/* Desktop CTAs */}
                <div className="eazy-desktop-ctas">
                    <Link href="/signin" className="eazy-login-btn">Log In</Link>
                    <Link href="/signup" className="eazy-cta-btn">Start Free Trial</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="eazy-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="eazy-mobile-menu">
                    <Link href="/features">Features</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/download">EazyRecorder</Link>
                    <Link href="/docs">Docs</Link>
                    <div className="eazy-mobile-divider"></div>
                    <Link href="/signin" className="eazy-mobile-login">Log In</Link>
                    <Link href="/signup" className="eazy-mobile-cta">Start Free Trial</Link>
                </div>
            )}
        </header>
    );
};

export default HeaderOne;