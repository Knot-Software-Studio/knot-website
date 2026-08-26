import { ArrowUpRight, Smartphone, Radio, FileText, CheckCircle2 } from "lucide-react";

const PROJECTS = [
  {
    index: "01",
    name: "Knot Event-Planer",
    role: "Flaggschiff",
    platform: "iOS (TestFlight) & Android (Play Beta)",
    status: "Beta Q3 2026",
    statusType: "active",
    desc: "Das taktile Betriebssystem für gemeinsame Unternehmungen. Interaktive Vektorkarte, Swipe-Abstimmungen, CalDAV-Export und automatische Kostenteilung.",
    tech: ["Offline-First", "Vektor-Karten", "CRDT-Sync", "Zero-Tracking"],
    linkText: "Live im Simulator",
    linkTarget: "#flaggschiff"
  },
  {
    index: "02",
    name: "Knot Spaces & Audio",
    role: "Spatial Sound Lab",
    platform: "macOS & iOS Spatial Audio",
    status: "R&D Prototype",
    statusType: "lab",
    desc: "Geteilte generative Audio-Räume und kuratierte alpine Soundscapes für fokussiertes Arbeiten und unaufdringliche Präsenz.",
    tech: ["Spatial Audio", "Web Audio API", "P2P Mesh"],
    linkText: "Labor-Einblick anfragen",
    linkTarget: "#kontakt"
  },
  {
    index: "03",
    name: "Knot Synapse",
    role: "Knowledge System",
    platform: "Desktop & Mobile",
    status: "Konzept-Phase",
    statusType: "concept",
    desc: "Lokales, Markdown-basiertes Notizsystem für Gedanken und Routenplanung. Zero Cloud Lock-in, 100% Dateisystem-Souveränität.",
    tech: ["Plaintext", "Local-First", "End-to-End Encryption"],
    linkText: "Vormerken",
    linkTarget: "#kontakt"
  }
];

export default function ProjectPipeline() {
  return (
    <section id="projekte" className="pipeline-architectural-section">
      <div className="container">
        
        {/* Section Header with Instrument Serif */}
        <div className="pipeline-header-row">
          <div className="pipeline-title-group">
            <span className="section-kicker-mono">STUDIO PIPELINE · R&amp;D INDEX</span>
            <h2 className="pipeline-main-heading">
              Aktive Projekte &amp; <em>Software-Labor.</em>
            </h2>
          </div>
          <p className="pipeline-lead-text">
            Wir bauen gezielt wenige, außergewöhnliche Werkzeuge. Jedes Projekt folgt unserem Credo von absoluter Daten-Souveränität und spürbarem taktilem Handwerk.
          </p>
        </div>

        {/* Architectural Project Table / Rows */}
        <div className="project-index-table">
          {PROJECTS.map((project) => (
            <div key={project.index} className="project-index-row">
              
              {/* Col 1: Number & Status */}
              <div className="proj-col-num">
                <span className="proj-idx">{project.index}</span>
                <span className={`proj-status-badge status-${project.statusType}`}>
                  <span className="p-dot"></span>
                  <span>{project.status}</span>
                </span>
              </div>

              {/* Col 2: Project Identity & Description */}
              <div className="proj-col-main">
                <div className="proj-name-wrap">
                  <h3 className="proj-name">{project.name}</h3>
                  <span className="proj-role-tag">{project.role}</span>
                </div>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-chips-row">
                  <span className="proj-platform-chip">{project.platform}</span>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="proj-tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              {/* Col 3: Direct Action */}
              <div className="proj-col-action">
                <a href={project.linkTarget} className="proj-action-link">
                  <span>{project.linkText}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
