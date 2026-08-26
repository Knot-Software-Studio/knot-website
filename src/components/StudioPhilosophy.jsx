const PRINCIPLES = [
  {
    num: "01",
    title: "Reales Leben vor Bildschirmzeit",
    desc: "Unsere Software misst ihren Erfolg daran, wie schnell du dein Smartphone wieder wegsteckst und den Augenblick genießt. Keine endlosen Feeds, kein Doomscrolling.",
    impact: "Entscheidungen in unter 60 Sekunden."
  },
  {
    num: "02",
    title: "Null Werbetracking & Datensouveränität",
    desc: "Wir monetarisieren keine persönlichen Daten und binden keine externen Werbenetzwerke ein. Deine Unternehmungen gehören ausschließlich deiner Gruppe.",
    impact: "Zero Tracker · 100% DSGVO · Österreichische EU-Server."
  },
  {
    num: "03",
    title: "Spürbare Physik & Sub-100ms Latenz",
    desc: "Jede Geste im Knot-Ökosystem reagiert mit echten physikalischen Trägheitsmomenten, inspiriert von Apple HIG und Material 3 Expressive Motion.",
    impact: "Haptisches Feedback und sub-100ms Interaktionsgefühl."
  },
  {
    num: "04",
    title: "Österreichische Ingenieurskunst",
    desc: "Als unabhängiges Indie-Studio aus Graz und Wien entwickeln wir Software für Langlebigkeit und Verlässlichkeit — fernab von kurzfristigem Hype.",
    impact: "Unabhängig · Handwerklich · Langlebig."
  }
];

export default function StudioPhilosophy() {
  return (
    <section id="manifest" className="manifesto-architectural-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="manifesto-header-row reveal-on-scroll">
          <div className="manifesto-title-group">
            <h2 className="manifesto-main-heading">
              Vier Prinzipien, nach denen wir <em>Software bauen.</em>
            </h2>
          </div>
          <p className="manifesto-lead-text">
            Wir glauben, dass die beste Technologie unsichtbar wird, wenn sie ihren Dienst getan hat. 
            Hier sind die unverrückbaren Leitlinien unseres Studios.
          </p>
        </div>

        {/* 2x2 Grid Matrix */}
        <div className="manifesto-grid-matrix">
          {PRINCIPLES.map((item) => (
            <div key={item.num} className="manifesto-grid-cell reveal-on-scroll">
              <div className="cell-top-line">
                <span className="cell-number">{item.num}</span>
              </div>
              <h3 className="cell-title">{item.title}</h3>
              <p className="cell-desc">{item.desc}</p>
              <div className="cell-impact-note">
                <span>↳ {item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Studio Commitment Quote */}
        <div className="studio-manifesto-quote reveal-on-scroll">
          <div className="quote-mono-mark">»</div>
          <p className="quote-large-text">
            Technologie sollte uns im echten Leben <em>zusammenbringen</em> — nicht voneinander isolieren. 
            Daran messen wir jede Zeile Code, die unser Studio verlässt.
          </p>
          <div className="quote-sig-line">
            <img 
              src="/assets/knot-logo.png" 
              alt="Knot Studio" 
              className="quote-logo-mark" 
              width="20" 
              height="20" 
            />
            <span className="sig-author">Knot Software Studio</span>
            <span className="sig-loc">Graz &amp; Wien, Österreich</span>
          </div>
        </div>

      </div>
    </section>
  );
}
