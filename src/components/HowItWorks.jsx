import { Share2, CheckSquare, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Share2 className="step-icon" size={22} />,
      title: "Link teilen",
      desc: "Erstelle in Sekunden ein Erlebnis. Deine Freunde treten direkt über den Web-Link bei – ohne Download, ohne App-Store-Zwang.",
      tag: "Sofortiger Einstieg",
    },
    {
      num: "02",
      icon: <CheckSquare className="step-icon" size={22} />,
      title: "Gemeinsam koordinieren",
      desc: "Termin finden mit 1-Klick-Abstimmung, Aufgaben mit klaren Zuständigkeiten verteilen und alle Details an einem zentralen Ort bündeln.",
      tag: "100% Übersicht",
    },
    {
      num: "03",
      icon: <Sparkles className="step-icon" size={22} />,
      title: "Erlebnis genießen",
      desc: "Vor Ort alle Infos parat haben. Nach dem Event Fotos in voller Originalqualität teilen und Ausgaben mit einem Klick fair ausgleichen.",
      tag: "Pure Entlastung",
    },
  ];

  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="section-head text-center mx-auto">
          <span className="kicker">Der Ablauf</span>
          <h2 className="section-title">In drei einfachen Schritten zum Erlebnis.</h2>
          <p className="section-subtitle">
            Keine endlosen Chat-Nachrichten mehr. Ein durchdachtes Werkzeug für reibungslose Planung von Anfang bis Ende.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-header">
                <div className="step-icon-wrap">{step.icon}</div>
                <span className="step-number">{step.num}</span>
              </div>
              <span className="step-badge">{step.tag}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
