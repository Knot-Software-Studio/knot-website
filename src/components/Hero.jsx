export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="eyebrow">🚧 Early Access — bald verfügbar</span>
          <h1>Erlebnisse planen,<br />die in Erinnerung bleiben.</h1>
          <p className="lead">
            Knot baut durchdachte Apps für den Alltag. Unser erstes Produkt ist der{" "}
            <strong>Erlebnisplaner</strong> — die gemeinsame Plattform, um Ausflüge, Feiern und
            besondere Momente mit den Menschen zu planen, die dir wichtig sind.
          </p>
          <div className="hero-actions">
            <a href="#erlebnisplaner" className="btn btn-primary">Erlebnisplaner entdecken</a>
            <a href="mailto:office@knot-software.com" className="btn btn-secondary">Kontakt aufnehmen</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="app-card">
                <div className="app-card-header">
                  <span className="dot dot-a"></span>
                  <span className="dot dot-b"></span>
                  <span className="dot dot-c"></span>
                </div>
                <div className="app-card-title">Wochenendtrip 🏔️</div>
                <div className="app-card-row"><span>📅</span> Sa, 12. Sep</div>
                <div className="app-card-row"><span>👥</span> 6 Teilnehmer:innen</div>
                <div className="app-card-photos">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="app-card app-card-ghost">
                <div className="app-card-title">Geburtstagsfeier 🎉</div>
                <div className="app-card-row"><span>📅</span> Fr, 25. Sep</div>
              </div>
            </div>
          </div>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </div>
    </section>
  );
}
