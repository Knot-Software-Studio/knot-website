import { Sparkles, Shield, HeartHandshake, Compass } from "lucide-react";

const PRINCIPLES = [
  {
    num: "01",
    kicker: "AUFMERKSAMKEITS-ÖKONOMIE",
    title: "Reales Leben vor Bildschirmzeit",
    desc: "Unsere Software misst ihren Erfolg daran, wie schnell du dein Smartphone wieder wegsteckst und den Augenblick mit deinen Begleitern genießt. Keine endlosen Feeds, keine Gamification-Tricks, kein Doomscrolling.",
    impact: "Schnelle Entscheidungen in unter 60 Sekunden."
  },
  {
    num: "02",
    kicker: "PRIVATSPHÄRE ALS FUNDAMENT",
    title: "Null Werbetracking & absolute Datensouveränität",
    desc: "Wir monetarisieren keine persönlichen Daten, verkaufen kein Nutzerverhalten und binden keine externen Werbenetzwerke ein. Deine Unternehmungen und geteilten Kalender gehören ausschließlich deiner Gruppe.",
    impact: "Keine Tracker · 100% DSGVO · ISO-zertifizierte EU-Server."
  },
  {
    num: "03",
    kicker: "GESTALTUNGS-PHYSIK",
    title: "Spürbare Trägheit & Sub-100ms Flüssigkeit",
    desc: "Jede Geste im Knot-Ökosystem reagiert mit echten physikalischen Trägheitsmomenten. Inspiriert von den höchsten Standards der Apple Human Interface Guidelines und Material 3 Expressive Motion.",
    impact: "Haptisches Feedback und sub-100ms Interaktionslatenz."
  },
  {
    num: "04",
    kicker: "PROVENIENZ & HALTUNG",
    title: "Österreichische Ingenieurskunst mit Haltung",
    desc: "Als unabhängiges Studio aus Graz und Wien entwickeln wir Software für Langlebigkeit und Verlässlichkeit — fernab von kurzfristigem Silicon-Valley-Hype. Wir bauen Werkzeuge, die wir selbst täglich nutzen.",
    impact: "Indie-finanziert · Unabhängig · Handwerklich."
  }
];

export default function StudioPhilosophy() {
  return (
    <section id="manifest" className="manifesto-architectural-section">
      <div className="container">
        
        {/* Section Header with Instrument Serif */}
        <div className="manifesto-header-row">
          <div className="manifesto-title-group">
            <span className="section-kicker-mono">STUDIO MANIFEST &amp; PHILOSOPHIE</span>
            <h2 className="manifesto-main-heading">
              Vier Prinzipien, nach denen wir <em>Software bauen.</em>
            </h2>
          </div>
          <p className="manifesto-lead-text">
            Wir glauben, dass die beste Technologie unsichtbar wird, wenn sie ihren Dienst getan hat. 
            Hier sind die unverrückbaren Leitlinien unseres Studios.
          </p>
        </div>

        {/* 2x2 Architectural Grid with 1px Structural Dividers */}
        <div className="manifesto-grid-matrix">
          {PRINCIPLES.map((item) => (
            <div key={item.num} className="manifesto-grid-cell">
              <div className="cell-top-line">
                <span className="cell-number">{item.num}</span>
                <span className="cell-kicker">{item.kicker}</span>
              </div>
              <h3 className="cell-title">{item.title}</h3>
              <p className="cell-desc">{item.desc}</p>
              <div className="cell-impact-note">
                <span>↳ {item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Studio Commitment Quote in Instrument Serif */}
        <div className="studio-manifesto-quote">
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
