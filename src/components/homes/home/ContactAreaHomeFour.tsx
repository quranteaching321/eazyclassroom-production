"use client";
import React from "react";

const ContactAreaHomeFour = () => {
  return (
    <section className="ec-feature-section" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", padding: "100px 0" }}>
      <div className="container">
        <div className="row">
          
          {/* Left Side: Contact Info (Sticky) */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div style={{ position: "sticky", top: "120px", paddingRight: "20px" }}>
              <span className="ec-kicker" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563EB", borderColor: "rgba(37, 99, 235, 0.2)" }}>
                Contact Us
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1.15, margin: "16px 0 20px" }}>
                Let's talk about<br />your academy.
              </h2>
              <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.6, marginBottom: "40px" }}>
                Have questions about features, pricing, or custom CRM integration? Our team usually replies within a few hours.
              </p>

              {/* Contact Methods */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: "48px", height: "48px", background: "#EFF6FF", color: "#2563EB", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "13px", color: "#64748B", fontWeight: 600, marginBottom: "2px" }}>Email Us</span>
                    <a href="mailto:support@eazyclassroom.net" style={{ display: "block", fontSize: "16px", color: "#0F172A", fontWeight: 700, textDecoration: "none" }}>support@eazyclassroom.net</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: "48px", height: "48px", background: "#F0FDF4", color: "#10B981", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "13px", color: "#64748B", fontWeight: 600, marginBottom: "2px" }}>Documentation</span>
                    <a href="https://app.eazyclassroom.net/docs" target="_blank" rel="noreferrer" style={{ display: "block", fontSize: "16px", color: "#0F172A", fontWeight: 700, textDecoration: "none" }}>Read our guides</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px", background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                  <div style={{ width: "48px", height: "48px", background: "#F5F3FF", color: "#8B5CF6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "13px", color: "#64748B", fontWeight: 600, marginBottom: "2px" }}>Response Time</span>
                    <span style={{ display: "block", fontSize: "16px", color: "#0F172A", fontWeight: 700 }}>Within 2 Hours</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-7">
            <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "40px", boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.05)", height: "100%" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>Send us a message</h3>
              <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "32px" }}>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-md-6">
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "8px" }}>Full Name</label>
                    <input type="text" placeholder="John Doe" required style={{ width: "100%", padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", color: "#0F172A", outline: "none" }} />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "8px" }}>Academy Name</label>
                    <input type="text" placeholder="Al-Noor Academy" style={{ width: "100%", padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", color: "#0F172A", outline: "none" }} />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "8px" }}>Email Address</label>
                    <input type="email" placeholder="john@academy.com" required style={{ width: "100%", padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", color: "#0F172A", outline: "none" }} />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "8px" }}>Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: "100%", padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", color: "#0F172A", outline: "none" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "8px" }}>How can we help?</label>
                  <textarea rows={5} placeholder="Tell us about your academy and what you're looking for..." required style={{ width: "100%", padding: "14px 16px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "14px", color: "#0F172A", outline: "none", resize: "vertical", minHeight: "120px" }}></textarea>
                </div>

                <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "16px", background: "#2563EB", color: "#FFFFFF", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: 700, cursor: "pointer", transition: "background 0.2s" }}>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactAreaHomeFour;