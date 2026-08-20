const values = [
  {
    icon: "🧵",
    title: "Sorgfältig gebaut",
    text: "Wir nehmen uns Zeit für Details, statt schnell viele Features hinzuzufügen.",
  },
  {
    icon: "🔒",
    title: "Privatsphäre ernst genommen",
    text: "Deine Daten gehören dir. Wir bauen mit Sicherheit im Kern, nicht als Nachgedanke.",
  },
  {
    icon: "🤝",
    title: "Für echte Momente gemacht",
    text: "Unsere Apps sollen Zeit mit den Menschen, die dir wichtig sind, leichter machen.",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="section about">
      <div className="container">
        <span className="section-eyebrow">Über Knot</span>
        <h2>Software, die Menschen näher zusammenbringt.</h2>
        <p className="section-lead">
          Knot ist ein kleines Software-Studio mit einer klaren Idee: Technologie soll dabei helfen,
          echte Momente mit echten Menschen zu schaffen — nicht nur Aufgaben abzuhaken. Der Name Knot
          steht für das, was wir bauen wollen: Verbindungen, die halten.
        </p>
        <div className="value-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
