import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header({ introDismissed = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBrandDocked = introDismissed || scrolled;

  useEffect(() => {
    const sections = ["flaggschiff", "projekte", "manifest", "kontakt"];
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* Dynamic Scroll Progress Line */}
      <div 
        className="scroll-progress-line" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <div className="header-inner">
        {/* Studio Brand Mark with Official Logo (Scroll-Linked Docking) */}
        <a href="#" className={`studio-brand ${isBrandDocked ? "is-docked" : "at-top"}`}>
          <img 
            src="/assets/knot-logo.png" 
            alt="Knot Software Studio Logo" 
            className="brand-logo-img" 
            width="28" 
            height="28" 
          />
          <div className="brand-text-block">
            <span className="brand-title">Knot</span>
            <span className="brand-slogan-mono">Software die verbindet</span>
          </div>
        </a>

        {/* Desktop Navigation with Active Scrollspy */}
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a 
            href="#flaggschiff" 
            className={`nav-item ${activeSection === "flaggschiff" ? "is-active" : ""}`}
          >
            Flaggschiff
          </a>
          <a 
            href="#projekte" 
            className={`nav-item ${activeSection === "projekte" ? "is-active" : ""}`}
          >
            Projekte
          </a>
          <a 
            href="#manifest" 
            className={`nav-item ${activeSection === "manifest" ? "is-active" : ""}`}
          >
            Manifest
          </a>
          <a 
            href="#kontakt" 
            className={`nav-item ${activeSection === "kontakt" ? "is-active" : ""}`}
          >
            Beta-Zugang
          </a>
        </nav>

        {/* Right CTA / Status */}
        <div className="header-right-desk">
          <div className="studio-status-chip">
            <span className="live-pulse-dot"></span>
            <span className="status-label">Beta Q3 2026</span>
          </div>
          <a href="#kontakt" className="btn-header-cta">
            <span>Frühzugang</span>
            <ArrowUpRight size={14} />
          </a>
          <button 
            type="button" 
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <nav className="mobile-nav-list">
            <a 
              href="#flaggschiff" 
              className={activeSection === "flaggschiff" ? "is-active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Flaggschiff
            </a>
            <a 
              href="#projekte" 
              className={activeSection === "projekte" ? "is-active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projekte
            </a>
            <a 
              href="#manifest" 
              className={activeSection === "manifest" ? "is-active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Manifest
            </a>
            <a 
              href="#kontakt" 
              className={activeSection === "kontakt" ? "is-active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Beta-Zugang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
