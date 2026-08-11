import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const practiceAreas = [
  ['01', 'Civil Litigation', 'Strategic representation for civil disputes, recovery matters and injunctions.'],
  ['02', 'Criminal Law', 'Professional assistance and representation across criminal proceedings.'],
  ['03', 'Cyber Crime', 'Legal support for cyber fraud, digital disputes and online offences.'],
  ['04', 'Banking & Finance', 'Advice and representation for banking, recovery and financial disputes.'],
  ['05', 'Property Matters', 'Practical legal solutions for property, possession and documentation matters.'],
  ['06', 'Corporate & Commercial', 'Business-focused legal advisory and dispute resolution.'],
];

function App() {
  const whatsapp = 'https://wa.me/91XXXXXXXXXX?text=Hello%20YAM%20Associates%2C%20I%20would%20like%20a%20legal%20consultation.';
  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">Y</span>
          <span><b>YAM</b><small>ASSOCIATES</small></span>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#process">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#appointment">Book Consultation</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">YAM ASSOCIATES • ADVOCATES & LEGAL CONSULTANTS</p>
            <h1>Legal Solutions.<br/><em>Strategic Representation.</em></h1>
            <p className="hero-copy">Professional legal assistance built around clarity, preparation and client-focused representation.</p>
            <div className="actions">
              <a className="button gold" href="#appointment">Book Consultation — ₹699</a>
              <a className="button outline" href="#status">Check Case Status</a>
            </div>
            <div className="trust-row">
              <span>✓ Confidential Consultation</span>
              <span>✓ Client Case Tracking</span>
              <span>✓ Direct WhatsApp Support</span>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="section-label">01 / ABOUT YAM ASSOCIATES</div>
          <div className="two-col">
            <div>
              <h2>Clear advice.<br/><em>Strong representation.</em></h2>
            </div>
            <div>
              <p className="lead">YAM Associates is being built as a modern legal practice focused on accessible consultation, organized case management and practical legal solutions.</p>
              <p>Our digital client portal will allow clients to securely follow important case updates while the internal dashboard helps the legal team prioritize urgent, pending and scheduled matters.</p>
            </div>
          </div>
        </section>

        <section id="practice" className="section dark-section">
          <div className="section-label">02 / PRACTICE AREAS</div>
          <h2>Focused legal <em>expertise</em></h2>
          <div className="cards">
            {practiceAreas.map(([n,t,d]) => <article className="card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#appointment">Discuss your matter →</a></article>)}
          </div>
        </section>

        <section id="process" className="section process">
          <div className="section-label">03 / SIMPLE CLIENT JOURNEY</div>
          <h2>From consultation to <em>case updates</em></h2>
          <div className="steps">
            <div><b>01</b><h3>Book</h3><p>Submit your consultation details and choose a preferred appointment.</p></div>
            <div><b>02</b><h3>Pay ₹699</h3><p>Complete the consultation payment through the connected Razorpay payment flow.</p></div>
            <div><b>03</b><h3>Get your Client Code</h3><p>A unique reference code will be generated after successful booking.</p></div>
            <div><b>04</b><h3>Track</h3><p>Use your secure client portal to view available case updates anytime.</p></div>
          </div>
        </section>

        <section id="appointment" className="appointment section">
          <div className="appointment-box">
            <div>
              <div className="section-label">04 / CONSULTATION</div>
              <h2>Book a consultation</h2>
              <p>Consultation fee: <strong>₹699</strong>. Payment integration will be connected to your Razorpay account before launch.</p>
              <ul><li>Secure appointment details</li><li>Unique client reference after payment</li><li>Direct WhatsApp assistance</li></ul>
            </div>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Demo form only. Razorpay and database will be connected in the next phase.')}}>
              <input required placeholder="Full Name" />
              <input required placeholder="Mobile Number" />
              <input type="email" placeholder="Email Address" />
              <select defaultValue=""><option value="" disabled>Select Practice Area</option>{practiceAreas.map(([,t])=><option key={t}>{t}</option>)}</select>
              <textarea required placeholder="Briefly describe your legal matter"></textarea>
              <button className="button gold" type="submit">Continue to Payment — ₹699</button>
            </form>
          </div>
        </section>

        <section id="status" className="status section">
          <div>
            <div className="section-label">05 / CLIENT PORTAL</div>
            <h2>Your matter.<br/><em>Always within reach.</em></h2>
            <p>Clients will be able to securely check case status, next hearing dates, recent updates and advocate remarks using their unique Client Code.</p>
          </div>
          <div className="status-card">
            <span>CLIENT STATUS</span>
            <input placeholder="Enter Client Code" />
            <button className="button dark">Check Status</button>
            <small>Secure OTP login will be enabled in the next phase.</small>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div>
            <div className="section-label">06 / CONTACT</div>
            <h2>Let's discuss<br/><em>your legal matter.</em></h2>
          </div>
          <div className="contact-details">
            <p><b>YAM ASSOCIATES</b><br/>Advocates & Legal Consultants</p>
            <p>Consultation: <strong>₹699</strong></p>
            <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </section>
      </main>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◔</a>
      <footer>© {new Date().getFullYear()} YAM Associates. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
