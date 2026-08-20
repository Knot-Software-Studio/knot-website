export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo logo-footer">
            <span className="logo-chip">
              <img className="logo-mark-sm" src="/assets/knot-logo.png" alt="Knot Logo" />
            </span>
            <span>Knot</span>
          </a>
          <p>Software, die Menschen näher zusammenbringt.</p>
        </div>

        <nav className="footer-nav">
          <a href="#erlebnisplaner">Erlebnisplaner</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className="footer-contact">
          <a href="mailto:support@knot-software.com">support@knot-software.com</a>
          <a href="mailto:office@knot-software.com">office@knot-software.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Knot Software. Alle Rechte vorbehalten.</p>
        <p className="footer-note">Diese Website ist ein Prototyp.</p>
      </div>
    </footer>
  );
}
