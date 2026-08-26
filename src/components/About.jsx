import { Target, ShieldCheck, Cpu, Smartphone, Heart, Sparkles } from "lucide-react";

export default function About() {
  const principles = [
    {
      icon: <Target size={24} className="bento-icon" />,
      tag: "Fokus auf das Echte",
      title: "Software, die Zeit schenkt – statt sie zu stehlen.",
      desc: "Die meisten modernen Apps sind darauf optimiert, deine Bildschirmzeit zu maximieren. Knot baut das genaue Gegenteil: Ein präzises Werkzeug, das dich und deine Freunde schnellstmöglich ins echte Leben bringt.",
    },
    {
      icon: <ShieldCheck size={24} className="bento-icon" />,
      tag: "100% Privat",
      title: "Deine Pläne gehören nur deiner Gruppe.",
      desc: "Keine Werbetracker, keine Analyseprofile, keine Weitergabe an Dritte. Bei Knot bezahlst du nicht mit deiner Privatsphäre. Was du planst, bleibt privat.",
    },
    {
      icon: <Cpu size={24} className="bento-icon" />,
      tag: "Handwerk & Präzision",
      title: "Sub-100ms Reaktionszeit & flüssige Physik.",
      desc: "Jede Interaktion ist auf unmittelbare Reaktion und physikalische Federsimulation ausgelegt. Keine spürbare Latenz, keine störenden Ladebalken.",
    },
    {
      icon: <Smartphone size={24} className="bento-icon" />,
      tag: "Plattformunabhängig",
      title: "Direkt im Browser auf jedem Smartphone.",
      desc: "Niemand muss extra eine App aus dem App Store laden oder ein neues Benutzerkonto anlegen. Ein Link genügt, und alle sind sofort an Bord.",
    },
  ];

  return (
    <section id="ueber-uns" className="section about-section">
      <div className="container">
        {/* Section Head */}
        <div className="section-head text-center mx-auto">
          <span className="kicker">Hintergrund &amp; Werte</span>
          <h2 className="section-title">Entwickelt mit Haltung und Hingabe.</h2>
          <p className="section-subtitle">
            Knot ist ein unabhängiges Software-Studio aus München. Wir glauben an Werkzeuge mit Seele, 
            höchsten Datenschutzstandards und kompromisslosem Handwerk.
          </p>
        </div>

        {/* Apple Keynote Bento Grid */}
        <div className="about-bento-grid">
          {principles.map((p, idx) => (
            <div key={idx} className={`bento-card bento-card-${idx + 1}`}>
              <div className="bento-icon-wrapper">{p.icon}</div>
              <span className="bento-tag">{p.tag}</span>
              <h3 className="bento-title">{p.title}</h3>
              <p className="bento-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Studio Manifesto Banner */}
        <div className="studio-quote-banner">
          <div className="quote-content">
            <Sparkles size={20} className="quote-sparkle" />
            <p className="quote-text">
              „Wenn sich ein Werkzeug wie eine natürliche Verlängerung unserer Gedanken anfühlt, 
              tritt die Technik in den Hintergrund – und der gemeinsame Moment zählt.“
            </p>
            <span className="quote-author">— Das Knot Software Studio Team · München</span>
          </div>
        </div>
      </div>
    </section>
  );
}
