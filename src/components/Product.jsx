const features = [
  {
    icon: "🗓️",
    title: "Gemeinsam planen",
    text: "Erlebnis anlegen, Freund:innen und Familie einladen und Details gemeinsam festlegen.",
  },
  {
    icon: "📸",
    title: "Fotos & Erinnerungen",
    text: "Bilder zu jedem Erlebnis sammeln und mit allen Teilnehmer:innen teilen.",
  },
  {
    icon: "✨",
    title: "Einfacher Zugang",
    text: "Sicherer Login ganz ohne Passwort-Merken — schnell und unkompliziert.",
  },
  {
    icon: "🎯",
    title: "Für jeden Anlass",
    text: "Ob Wanderung, Geburtstagsfeier oder Wochenendtrip — für jedes Erlebnis der passende Plan.",
  },
];

export default function Product() {
  return (
    <section id="erlebnisplaner" className="section product">
      <div className="container">
        <span className="section-eyebrow">Unser Produkt</span>
        <h2>Der Erlebnisplaner</h2>
        <p className="section-lead">
          Eine App, um Erlebnisse gemeinsam zu planen — von der ersten Idee bis zum gemeinsamen
          Erinnerungsalbum.
        </p>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="product-cta">
          <p>Der Erlebnisplaner befindet sich aktuell in aktiver Entwicklung.</p>
          <a
            href="mailto:office@knot-software.com?subject=Interesse%20am%20Erlebnisplaner"
            className="btn btn-primary"
          >
            Früh dabei sein
          </a>
        </div>
      </div>
    </section>
  );
}
