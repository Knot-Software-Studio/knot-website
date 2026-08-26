import { ArrowDown, ArrowRight, ShieldCheck, Zap, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-editorial-section">
      <div className="container">
        
        {/* Editorial Studio Tag */}
        <div className="hero-studio-meta">
          <div className="studio-brand-badge">
            <img 
              src="/assets/knot-logo.png" 
              alt="Knot" 
              className="meta-logo-icon" 
              width="16" 
              height="16" 
            />
            <span className="geo-flag">🇦🇹</span>
            <span className="geo-city">Knot Software Studio · Graz &amp; Wien</span>
          </div>
          <span className="meta-divider">/</span>
          <span className="studio-spec">Software die verbindet · Privacy-First &amp; Tactile Design</span>
        </div>

        {/* Asymmetric Hero Grid */}
        <div className="hero-editorial-grid">
          
          {/* Left Column: Bold Typographic Statement in Instrument Serif */}
          <div className="hero-statement-column">
            <h1 className="hero-sculptural-title">
              Software die <em>verbindet.</em><br />
              Für Momente, die <em>bleiben.</em>
            </h1>

            <p className="hero-manifesto-lead">
              Wir bauen keine Apps, die dich am Bildschirm festhalten. 
              Knot entwickelt radikal flüssige, taktile Werkzeuge für reale Erlebnisse, 
              gemeinsame Unternehmungen und echte menschliche Nähe — ohne Tracking, 
              ohne Werbe-Algorithmen und ohne Kompromisse.
            </p>

            {/* Direct Actions */}
            <div className="hero-action-desk">
              <a href="#flaggschiff" className="btn-architectural btn-primary-brand">
                <span>Flaggschiff ausprobieren</span>
                <ArrowDown size={15} />
              </a>
              <a href="#kontakt" className="btn-architectural btn-ghost-line">
                <span>Beta-Zugang sichern</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Pillar Specs */}
          <div className="hero-specs-column">
            <div className="spec-card">
              <div className="spec-header">
                <span className="spec-num">01</span>
                <span className="spec-tag">Philosophie</span>
              </div>
              <h3 className="spec-title">Reales Leben vor Bildschirmzeit</h3>
              <p className="spec-desc">
                Jede Interaktion ist darauf optimiert, Pläne in unter 60 Sekunden zu schmieden, damit das Telefon in der Tasche bleibt.
              </p>
            </div>

            <div className="spec-card">
              <div className="spec-header">
                <span className="spec-num">02</span>
                <span className="spec-tag">Ingenieurskunst</span>
              </div>
              <h3 className="spec-title">Taktile Haptik &amp; Sub-100ms Physik</h3>
              <p className="spec-desc">
                Flüssige Trägheitsmomente und intuitive Wisch-Gesten für iOS &amp; Android, inspiriert von Apple HIG und Material 3.
              </p>
            </div>

            <div className="spec-card">
              <div className="spec-header">
                <span className="spec-num">03</span>
                <span className="spec-tag">Privatsphäre</span>
              </div>
              <h3 className="spec-title">Null Werbetracking · 100% DSGVO</h3>
              <p className="spec-desc">
                Keine Werbenetzwerke, kein Verkauf von Verhaltensprofilen. Daten gehören ausschließlich dir und deinen Freunden.
              </p>
            </div>
          </div>

        </div>

        {/* Architectural Metric Banner */}
        <div className="hero-metric-strip">
          <div className="metric-cell">
            <span className="metric-val">0</span>
            <span className="metric-label">Tracker oder Werbenetzwerke</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val">&lt; 100ms</span>
            <span className="metric-label">Spürbare Reaktionszeit bei Gesten</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val">iOS &amp; Android</span>
            <span className="metric-label">Native Plattform-Apps + Web-RSVP</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val">100% EU</span>
            <span className="metric-label">Gehostet auf österreichischen Servern</span>
          </div>
        </div>

      </div>
    </section>
  );
}
