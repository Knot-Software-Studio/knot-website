import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Studio Brand Mark with Official Logo */}
        <a href="#" className="studio-brand">
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

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#flaggschiff" className="nav-item">Flaggschiff</a>
          <a href="#projekte" className="nav-item">Projekte</a>
          <a href="#manifest" className="nav-item">Manifest</a>
          <a href="#kontakt" className="nav-item">Beta-Zugang</a>
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
            <a href="#flaggschiff" onClick={() => setMobileMenuOpen(false)}>01 Flaggschiff</a>
            <a href="#projekte" onClick={() => setMobileMenuOpen(false)}>02 Projekte</a>
            <a href="#manifest" onClick={() => setMobileMenuOpen(false)}>03 Manifest</a>
            <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>04 Beta-Zugang</a>
          </nav>
        </div>
      )}
    </header>
  );
}
