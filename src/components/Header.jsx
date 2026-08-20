import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={close}>
          <img className="logo-mark" src="/assets/knot-logo.png" alt="Knot Logo" />
          <span>Knot</span>
        </a>

        <nav className={`main-nav${open ? " open" : ""}`} id="main-nav">
          <a href="#erlebnisplaner" onClick={close}>Erlebnisplaner</a>
          <a href="#ueber-uns" onClick={close}>Über uns</a>
          <a href="#kontakt" onClick={close}>Kontakt</a>
        </nav>

        <a href="#erlebnisplaner" className="btn btn-primary btn-small nav-cta">
          Erlebnisplaner entdecken
        </a>

        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
