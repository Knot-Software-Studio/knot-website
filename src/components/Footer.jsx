import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-architectural-footer">
      <div className="container">
        
        {/* Top Grid */}
        <div className="footer-main-grid">
          
          {/* Studio Column */}
          <div className="footer-studio-block">
            <div className="footer-brand-line">
              <img 
                src="/assets/knot-logo.png" 
                alt="Knot" 
                className="footer-logo-img" 
                width="24" 
                height="24" 
              />
              <span className="f-brand-title">Knot Software Studio</span>
            </div>
            <p className="footer-brand-statement">
              Software die verbindet. Unabhängiges Studio für taktile Software, mobile Erlebnisse und Daten-Souveränität. 
              Entwickelt mit Haltung in Graz &amp; Wien, Österreich.
            </p>
            <div className="footer-country-pill">
              <span>Made with intent in Austria 🇦🇹</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <span className="footer-col-kicker">PRODUKTE</span>
            <ul className="footer-links-clean">
              <li><a href="#flaggschiff">Event-Planer (Flaggschiff)</a></li>
              <li><a href="#kontakt">Apple TestFlight Beta</a></li>
              <li><a href="#kontakt">Google Play Beta</a></li>
            </ul>
          </div>

          {/* Studio Links */}
          <div className="footer-nav-col">
            <span className="footer-col-kicker">STUDIO</span>
            <ul className="footer-links-clean">
              <li><a href="#manifest">Manifest &amp; Haltung</a></li>
              <li><a href="#kontakt">Beta-Zugang</a></li>
              <li><a href="mailto:office@knot-software.com" className="f-ext-link">Gründerkontakt <ArrowUpRight size={13} /></a></li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="footer-nav-col">
            <span className="footer-col-kicker">DATENSCHUTZ</span>
            <ul className="footer-links-clean">
              <li><span className="f-static">100% DSGVO-konform</span></li>
              <li><span className="f-static">Zero Werbetracking</span></li>
              <li><span className="f-static">EU-Server (ISO 27001)</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="footer-bottom-bar">
          <span className="footer-legal-copy">
            © {new Date().getFullYear()} Knot Software Studio. Alle Rechte vorbehalten.
          </span>
          <div className="footer-server-status">
            <span className="live-green-dot"></span>
            <span>Studio Systeme online · Beta Q3 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
