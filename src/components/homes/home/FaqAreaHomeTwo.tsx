"use client";
import { useState } from "react";
import Link from "next/link";

const faq_data = [
  {
    id: 1,
    question: "Do I need a Windows PC to use EazyClassroom?",
    answer: "The web dashboard and parent portal work on any device (Mac, PC, phone, tablet). However, the EazyRecorder desktop app—which handles the automatic local recording and cloud push—is currently a Windows application (Windows 10/11). You only need a Windows PC for the tutor who is hosting the session.",
  },
  {
    id: 2,
    question: "Is EazyRecorder really free?",
    answer: "Yes. The desktop app is completely free to download and use for local PC recording. You only need a paid or trial subscription if you want to use the cloud features like AI analysis, cloud storage, live monitoring, and social publishing.",
  },
  {
    id: 3,
    question: "How does the AI pricing work? Is it really just $10?",
    answer: "Yes. We charge a flat $10/month for the Eazy AI dashboard. You bring your own Google Gemini API key (BYOK). The free tier of Gemini is powerful enough to process almost all daily sessions for a room. You pay Google directly for what you use, with zero markup from us.",
  },
  {
    id: 4,
    question: "What happens when we run out of cloud storage?",
    answer: "Each room comes with 50GB of cloud storage. If you hit the limit, our system automatically deletes the oldest recordings first (FIFO). You will never get a surprise overage bill. If you want to keep everything, you can purchase extra GB anytime from your dashboard.",
  },
  {
    id: 5,
    question: "Can multiple teachers share the same login?",
    answer: "Absolutely. In the admin panel, you can create a single room login and assign it to multiple rooms. This is perfect for a tutor who teaches three different grades; they just sign into EazyRecorder once and switch between rooms.",
  },
  {
    id: 6,
    question: "Can a teacher pause or stop a cloud recording?",
    answer: "No. If auto-recording is enabled by the admin, the EazyRecorder app will record to the cloud and the local PC automatically. The teacher cannot pause or stop the recording from the app, ensuring you never miss a minute of your academy's lessons.",
  }
];

const FaqAreaHomeTwo = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="ec-feature-section ec-bg-light">
      <div className="container">
        <div className="row">
          
          {/* Left Side: Heading & CTA */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="ec-feature-content">
              <span className="ec-kicker">FAQ</span>
              <h2 className="ec-title">Questions? We have answers.</h2>
              <p className="ec-subtitle">
                Everything you need to know about the product, billing, and how EazyClassroom fits into your academy.
              </p>
              <div className="mt-4">
                <p style={{ color: "#475569", fontSize: "15px", marginBottom: "16px" }}>
                  Still have questions? Our team is here to help.
                </p>
                <Link href="/contact" className="ec-dash-btn">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="col-lg-7">
            <div className="ec-faq-accordion">
              {faq_data.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`ec-faq-item ${activeId === faq.id ? "active" : ""}`}
                >
                  <button 
                    className="ec-faq-question" 
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="ec-faq-icon"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="ec-faq-answer">
                    <div className="ec-faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqAreaHomeTwo;