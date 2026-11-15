import Link from "next/link";

const WhatsAppAreaHomeFour = () => {
  return (
    <section className="ec-feature-section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="ec-feature-content pe-lg-5">
              <span className="ec-kicker" style={{ color: '#128C7E', background: 'rgba(18, 140, 126, 0.1)', borderColor: 'rgba(18, 140, 126, 0.2)' }}>WhatsApp Monitoring</span>
              <h2 className="ec-title">Keep an eye on your academy's WhatsApp.</h2>
              <p className="ec-subtitle">Get complete visibility over your admin WhatsApp Web. Monitor live chats, calls, and activities, and automatically record them to the cloud or local storage.</p>
              <ul className="ec-feature-list">
                <li>
                  <div className="ec-icon-wrap" style={{ color: '#25D366' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
                  <div><h4>Live Chat & Call Monitoring</h4><p>Watch WhatsApp Web activity in real-time from your dashboard.</p></div>
                </li>
                <li>
                  <div className="ec-icon-wrap" style={{ color: '#25D366' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                  <div><h4>Automatic Recordings</h4><p>Every call and chat session is recorded locally or pushed to the cloud for compliance.</p></div>
                </li>
                <li>
                  <div className="ec-icon-wrap" style={{ color: '#25D366' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></div>
                  <div><h4>Complete Activity Logs</h4><p>Never miss a beat. Track exactly when messages are sent and calls are made.</p></div>
                </li>
                <li>
                  <div className="ec-icon-wrap" style={{ color: '#25D366' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                  <div><h4>Counts as 1 Room</h4><p>Available on all Trial and Paid plans. Monitoring a WhatsApp account uses 1 room slot from your subscription.</p></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.2)', border: '1px solid #e2e8f0', background: '#fff' }}>
              <div style={{ background: '#075E54', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#128C7E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                  <div><div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>Admin WhatsApp</div><div style={{ color: '#a7f3d0', fontSize: '12px' }}>Live monitoring active</div></div>
                </div>
              </div>
              <div style={{ background: '#E5DDD5', padding: '20px', height: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#fff', padding: '10px', borderRadius: '8px', maxWidth: '80%', fontSize: '13px', color: '#1e293b', alignSelf: 'flex-start' }}>Is my child's class starting today?</div>
                <div style={{ background: '#DCF8C6', padding: '10px', borderRadius: '8px', maxWidth: '80%', fontSize: '13px', color: '#1e293b', alignSelf: 'flex-end' }}>Yes, the Zoom link has been sent to your email.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAreaHomeFour;