export default function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div className="container contact-inner">
        <span className="section-eyebrow">Kontakt</span>
        <h2>Lass uns reden.</h2>
        <p className="section-lead">
          Fragen, Feedback oder einfach neugierig, was wir bauen? Wir freuen uns, von dir zu hören.
        </p>
        <div className="contact-cards">
          <a className="contact-card" href="mailto:support@knot-software.com">
            <div className="contact-icon">💬</div>
            <h3>Support</h3>
            <p>support@knot-software.com</p>
          </a>
          <a className="contact-card" href="mailto:office@knot-software.com">
            <div className="contact-icon">🏢</div>
            <h3>Office &amp; Business</h3>
            <p>office@knot-software.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
