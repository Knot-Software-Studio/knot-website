import { ArrowDown, ArrowRight, Shield, Cpu, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-editorial-section">
      <div className="container">
        
        {/* Asymmetric Hero Grid */}
        <div className="hero-editorial-grid">
          
          {/* Main Left Column (Typography & Narrative) */}
          <div className="hero-main-column reveal-on-scroll is-revealed">
            
            {/* Studio Identity Tag */}
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
              <span className="studio-spec">Software die verbindet</span>
            </div>

            {/* Sculptural Left-Aligned Title */}
            <div className="hero-statement-wrap">
              <h1 className="hero-sculptural-title">
                Software die <em>verbindet.</em><br />
                Für Momente, die <em>bleiben.</em>
              </h1>

              <p className="hero-manifesto-lead">
                Wir bauen keine Apps, die dich am Bildschirm festhalten. 
                Knot entwickelt radikal flüssige Werkzeuge für reale Erlebnisse, 
                gemeinsame Unternehmungen und echte menschliche Nähe — ohne Tracking, 
                ohne Werbe-Algorithmen und ohne Kompromisse.
              </p>

              {/* Action Desk */}
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

            {/* Distilled Studio Standards Bar */}
            <div className="hero-standards-bar">
              <div className="standard-item">
                <span className="standard-value">0</span>
                <span className="standard-label">Werbetracker</span>
              </div>
              <div className="standard-divider"></div>
              <div className="standard-item">
                <span className="standard-value">&lt;100ms</span>
                <span className="standard-label">Physik-Reaktionszeit</span>
              </div>
              <div className="standard-divider"></div>
              <div className="standard-item">
                <span className="standard-value">iOS &amp; Android</span>
                <span className="standard-label">Native Apps + Web-RSVP</span>
              </div>
              <div className="standard-divider"></div>
              <div className="standard-item">
                <span className="standard-value">100% DSGVO</span>
                <span className="standard-label">Österreichische Server</span>
              </div>
            </div>

          </div>

          {/* Right Rail: Studio Metadata Terminal for Depth & Asymmetry */}
          <aside className="hero-sidebar-rail reveal-on-scroll is-revealed" aria-label="Studio Telemetrie &amp; Spezifikationen">
            <div className="sidebar-depth-card">
              
              <div className="rail-head">
                <span className="rail-title-mono">STUDIO TELEMETRIE</span>
                <span className="rail-live-badge">ONLINE</span>
              </div>

              <div className="rail-body">
                
                <div className="rail-spec-row">
                  <div className="spec-icon-wrap">
                    <Shield size={14} />
                  </div>
                  <div className="spec-text">
                    <span className="spec-name">Datenschutz</span>
                    <span className="spec-detail">Zero-Tracking · EU-DSGVO</span>
                  </div>
                </div>

                <div className="rail-spec-row">
                  <div className="spec-icon-wrap">
                    <Cpu size={14} />
                  </div>
                  <div className="spec-text">
                    <span className="spec-name">Architektur</span>
                    <span className="spec-detail">Local-First · CRDT-Sync</span>
                  </div>
                </div>

                <div className="rail-spec-row">
                  <div className="spec-icon-wrap">
                    <Activity size={14} />
                  </div>
                  <div className="spec-text">
                    <span className="spec-name">Physik-Engine</span>
                    <span className="spec-detail">60fps Gesten · &lt;100ms</span>
                  </div>
                </div>

              </div>

              <div className="rail-footer">
                <div className="geo-coord-item">
                  <span className="coord-label">GRAZ HQ</span>
                  <span className="coord-val">47.0707° N, 15.4395° E</span>
                </div>
                <div className="geo-coord-item">
                  <span className="coord-label">WIEN LAB</span>
                  <span className="coord-val">48.2082° N, 16.3738° E</span>
                </div>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
