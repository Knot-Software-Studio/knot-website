import { ArrowUpRight, Smartphone, CheckCircle2 } from "lucide-react";

const PROJECTS = [
  {
    index: "01",
    name: "Knot Event-Planer",
    role: "Flaggschiff",
    platform: "iOS (TestFlight) & Android (Play Beta)",
    status: "Beta Q3 2026",
    statusType: "active",
    desc: "Das taktile Betriebssystem für gemeinsame Unternehmungen. Interaktive Vektorkarte, Swipe-Abstimmungen, CalDAV-Export und automatische Kostenteilung.",
    tech: ["Offline-First", "Vektor-Karten", "CRDT-Sync", "Zero-Tracking", "100% DSGVO"],
    linkText: "Live im Simulator",
    linkTarget: "#flaggschiff"
  }
];

export default function ProjectPipeline() {
  return (
    <section id="projekte" className="pipeline-architectural-section">
      <div className="container">
        
        {/* Section Header with Instrument Serif */}
        <div className="pipeline-header-row reveal-on-scroll">
          <div className="pipeline-title-group">
            <h2 className="pipeline-main-heading">
              Aktives Projekt &amp; <em>Flaggschiff.</em>
            </h2>
          </div>
          <p className="pipeline-lead-text">
            Unser alleiniger Fokus gilt dem Knot Event-Planer. Wir bündeln unsere gesamte Ingenieurskunst in dieses taktile Werkzeug für echte gemeinsame Erlebnisse.
          </p>
        </div>

        {/* Architectural Project Table / Rows */}
        <div className="project-index-table">
          {PROJECTS.map((project) => (
            <div key={project.index} className="project-index-row reveal-on-scroll">
              
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
