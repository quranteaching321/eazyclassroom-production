"use client";
import React from "react";

const ContactAreaHomeFour = () => {
  return (
    <section className="ec-feature-section ec-contact-dark">
      <div className="container">
        <div className="row">
          
          {/* Left Side: Contact Info (Sticky) */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="ec-faq-sticky">
              <span className="ec-kicker">Contact Us</span>
              <h2 className="ec-title">Let's talk about<br />your academy.</h2>
              <p className="ec-subtitle mb-5">
                Have questions about features, pricing, or custom CRM integration? Our team usually replies within a few hours.
              </p>

              {/* Contact Methods */}
              <div className="ec-contact-methods">
                
                <div className="ec-contact-card">
                  <div className="ec-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <span className="ec-contact-label">Email Us</span>
                    <a href="mailto:support@eazyclassroom.net" className="ec-contact-value">support@eazyclassroom.net</a>
                  </div>
                </div>

                <div className="ec-contact-card">
                  <div className="ec-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <span className="ec-contact-label">WhatsApp</span>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="ec-contact-value">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="ec-contact-card">
                  <div className="ec-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <span className="ec-contact-label">Headquarters</span>
                    <span className="ec-contact-value">Global / Remote</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-7">
            <div className="ec-contact-form-wrapper">
              <h3 className="ec-form-title">Send us a message</h3>
              <p className="ec-form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="ec-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label>Academy Name</label>
                    <input type="text" placeholder="Al-Noor Academy" />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@academy.com" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="mb-4">
                  <label>How can we help?</label>
                  <textarea rows={5} placeholder="Tell us about your academy and what you're looking for..." required></textarea>
                </div>

                <button type="submit" className="ec-form-submit-btn">
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