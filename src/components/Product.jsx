import { useState } from "react";
import { toast } from "sonner";
import { 
  CalendarCheck, 
  ListChecks, 
  Camera, 
  Receipt, 
  Check, 
  Crown, 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  Plus,
  ArrowRight,
  Sparkles,
  DollarSign
} from "lucide-react";

const MODULE_TABS = [
  {
    id: "poll",
    num: "01",
    icon: <CalendarCheck size={18} />,
    title: "Termin- & Ortsabstimmung",
    short: "Termine",
    summary: "Schluss mit 20-zeiligen Chat-Umfragen. Schlage 2 bis 3 Optionen vor und lass alle mit einem Fingertipp abstimmen.",
  },
  {
    id: "tasks",
    num: "02",
    icon: <ListChecks size={18} />,
    title: "Geteilte Aufgabenliste",
    short: "Aufgaben",
    summary: "Wer bringt was mit? Aufgaben werden festen Personen zugeordnet und in Echtzeit für alle aktualisiert.",
  },
  {
    id: "photos",
    num: "03",
    icon: <Camera size={18} />,
    title: "Gemeinsames Fotoalbum",
    short: "Fotos",
    summary: "Sammle alle Bilder nach dem Ausflug gebündelt an einem Ort – in nativer Originalqualität ohne WhatsApp-Kompression.",
  },
  {
    id: "split",
    num: "04",
    icon: <Receipt size={18} />,
    title: "Ausgabenabrechnung",
    short: "Finanzen",
    summary: "Wer Geld vorgelegt hat, trägt den Betrag ein. Der Planer berechnet sekundenschnell den fairsten Ausgleich.",
  },
];

const INITIAL_VOTES = [
  { id: "v1", label: "Samstag, 12. September (Ganztags)", votes: 6, userVoted: true, isLeading: true },
  { id: "v2", label: "Sonntag, 13. September (Nachmittags)", votes: 2, userVoted: false, isLeading: false },
  { id: "v3", label: "Samstag, 19. September (Ausweichtermin)", votes: 4, userVoted: false, isLeading: false },
];

const INITIAL_EXPENSES = [
  { id: 1, title: "Übernachtung DAV-Hütte", amount: 240, paidBy: "Anna" },
  { id: 2, title: "Einkauf Proviant & Getränke", amount: 100, paidBy: "Tom" },
  { id: 3, title: "Maut & Bergbahn-Tickets", amount: 60, paidBy: "Felix" },
];

const GALLERY_PHOTOS = [
  { id: 1, title: "Gipfelkreuz Zugspitze", meta: "48 MP · RAW", color: "linear-gradient(135deg, #3B82F6, #1E3A8A)", tag: "Gipfel 2.962m" },
  { id: 2, title: "Sonnenuntergang Hütte", meta: "24 MP · HEIC", color: "linear-gradient(135deg, #F97316, #9A3412)", tag: "Goldene Stunde" },
  { id: 3, title: "Wandergruppe am Grat", meta: "48 MP · RAW", color: "linear-gradient(135deg, #10B981, #064E3B)", tag: "Panorama" },
  { id: 4, title: "Kaiserschmarrn Pause", meta: "12 MP · JPEG", color: "linear-gradient(135deg, #F59E0B, #B45309)", tag: "Einkehr" },
];

export default function Product() {
  const [activeModule, setActiveModule] = useState("poll");
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [newExpenseTitle, setNewExpenseTitle] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Poll Handling
  const handleVote = (id) => {
    setVotes((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          const next = !item.userVoted;
          if (next) {
            toast.success("Deine Stimme wurde gezählt", {
              description: item.label,
              duration: 2500,
            });
          }
          return {
            ...item,
            votes: next ? item.votes + 1 : item.votes - 1,
            userVoted: next,
          };
        }
        return item;
      });

      const maxVotes = Math.max(...updated.map((u) => u.votes));
      return updated.map((u) => ({
        ...u,
        isLeading: u.votes === maxVotes && maxVotes > 0,
      }));
    });
  };

  const totalVotes = votes.reduce((sum, v) => sum + v.votes, 0);

  // Expense Handling
  const handleAddExpense = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(newExpenseAmount);
    if (!newExpenseTitle.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error("Bitte gib einen gültigen Titel und Betrag ein.");
      return;
    }

    const newExp = {
      id: Date.now(),
      title: newExpenseTitle.trim(),
      amount: parsedAmount,
      paidBy: "Du",
    };

    setExpenses((prev) => [...prev, newExp]);
    toast.success("Ausgabe erfasst", {
      description: `${newExp.title} (${newExp.amount.toFixed(2)} €)`,
      duration: 2500,
    });
    setNewExpenseTitle("");
    setNewExpenseAmount("");
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const perPerson = totalExpenses / 4; // 4 people in group

  return (
    <section id="erlebnisplaner" className="section product-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center mx-auto">
          <span className="kicker">Funktionsumfang</span>
          <h2 className="section-title">Alles, was eine Gruppe braucht. Nichts, was stört.</h2>
          <p className="section-subtitle">
            Entwickelt nach den Prinzipien von Klarheit, Geschwindigkeit und intuitiver Bedienung. 
            Jedes Modul löst ein konkretes Problem beim gemeinsamen Verabreden.
          </p>
        </div>

        {/* Apple-Style Segmented Navigation Tabs */}
        <div className="product-module-nav">
          <div className="module-nav-pills" role="tablist">
            {MODULE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeModule === tab.id}
                className={`module-nav-pill ${activeModule === tab.id ? "active" : ""}`}
                onClick={() => setActiveModule(tab.id)}
              >
                <span className="pill-icon">{tab.icon}</span>
                <span className="pill-title">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Stage Canvas */}
        <div className="product-stage-card">
          <div className="stage-top-bar">
            <div className="stage-header-meta">
              <span className="stage-num-badge">
                Modul {MODULE_TABS.find((t) => t.id === activeModule)?.num}
              </span>
              <h3 className="stage-main-title">
                {MODULE_TABS.find((t) => t.id === activeModule)?.title}
              </h3>
            </div>
            <p className="stage-summary-text">
              {MODULE_TABS.find((t) => t.id === activeModule)?.summary}
            </p>
          </div>

          <div className="stage-interactive-body">
            {/* 1. POLL / VOTING MODULE */}
            {activeModule === "poll" && (
              <div className="interactive-feature-view poll-view">
                <div className="view-subhead-row">
                  <div>
                    <span className="view-badge">Live Abstimmung</span>
                    <h4 className="view-title">Terminfindung · Wochenendtrip Zugspitze</h4>
                  </div>
                  <span className="view-stat-counter tabular-num">
                    {totalVotes} Stimmen abgegeben
                  </span>
                </div>

                <div className="poll-options-grid">
                  {votes.map((v) => {
                    const pct = Math.round((v.votes / Math.max(totalVotes, 1)) * 100);
                    return (
                      <button
                        key={v.id}
                        type="button"
                        className={`poll-option-card ${v.userVoted ? "is-voted" : ""} ${v.isLeading ? "is-leading" : ""}`}
                        onClick={() => handleVote(v.id)}
                      >
                        <div className="poll-option-progress" style={{ width: `${pct}%` }}></div>
                        <div className="poll-card-content">
                          <div className="poll-check-indicator">
                            {v.userVoted ? <Check size={14} strokeWidth={3} /> : null}
                          </div>
                          <div className="poll-label-group">
                            <span className="poll-option-name">{v.label}</span>
                            {v.isLeading && (
                              <span className="leading-tag">
                                <Crown size={12} />
                                <span>Gruppenfavorit</span>
                              </span>
                            )}
                          </div>
                          <div className="poll-stat-badge tabular-num">
                            <span className="poll-count">{v.votes}</span>
                            <span className="poll-percent">({pct}%)</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <p className="stage-hint-caption">
                  Tippe auf eine Option, um für deinen Wunschtermin abzustimmen.
                </p>
              </div>
            )}

            {/* 2. TASKS / PACKLIST MODULE */}
            {activeModule === "tasks" && (
              <div className="interactive-feature-view tasks-view">
                <div className="view-subhead-row">
                  <div>
                    <span className="view-badge">Aufgaben &amp; Mitbringsel</span>
                    <h4 className="view-title">Verteilung für 4 Personen</h4>
                  </div>
                  <span className="view-stat-counter">
                    Automatische Echtzeit-Sync
                  </span>
                </div>

                <div className="showcase-tasks-grid">
                  <div className="showcase-task-card is-done">
                    <div className="showcase-check checked"><Check size={13} strokeWidth={3} /></div>
                    <div className="showcase-task-info">
                      <span className="showcase-task-title">Hüttenübernachtung buchen</span>
                      <span className="showcase-task-sub">Erledigt von Anna · DAV Höllentalangerhütte</span>
                    </div>
                    <span className="showcase-pill-done">Erledigt</span>
                  </div>

                  <div className="showcase-task-card is-done">
                    <div className="showcase-check checked"><Check size={13} strokeWidth={3} /></div>
                    <div className="showcase-task-info">
                      <span className="showcase-task-title">Wanderroute &amp; Notfallset</span>
                      <span className="showcase-task-sub">Erledigt von Tom · Offline-Karte geladen</span>
                    </div>
                    <span className="showcase-pill-done">Erledigt</span>
                  </div>

                  <div className="showcase-task-card">
                    <div className="showcase-check"></div>
                    <div className="showcase-task-info">
                      <span className="showcase-task-title">Proviant &amp; Energieriegel einkaufen</span>
                      <span className="showcase-task-sub">Zugewiesen an Felix · Noch offen</span>
                    </div>
                    <span className="showcase-pill-open">Offen</span>
                  </div>

                  <div className="showcase-task-card">
                    <div className="showcase-check"></div>
                    <div className="showcase-task-info">
                      <span className="showcase-task-title">Fahrgemeinschaften &amp; Treffpunkt</span>
                      <span className="showcase-task-sub">Zugewiesen an Laura · Abfahrt 07:00</span>
                    </div>
                    <span className="showcase-pill-open">Offen</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. PHOTO ALBUM MODULE */}
            {activeModule === "photos" && (
              <div className="interactive-feature-view photos-view">
                <div className="view-subhead-row">
                  <div>
                    <span className="view-badge">Gemeinsames Album</span>
                    <h4 className="view-title">Erinnerungen in nativer Auflösung</h4>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-small"
                    onClick={() =>
                      toast.info("Foto-Upload bereit", {
                        description: "Bilder werden verlustfrei in Originalauflösung geteilt.",
                      })
                    }
                  >
                    <ImageIcon size={14} />
                    <span>Fotos hochladen</span>
                  </button>
                </div>

                <div className="showcase-gallery-grid">
                  {GALLERY_PHOTOS.map((photo) => (
                    <div
                      key={photo.id}
                      className="showcase-photo-card"
                      style={{ background: photo.color }}
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <div className="photo-card-overlay">
                        <span className="photo-badge">{photo.tag}</span>
                        <div className="photo-info-bottom">
                          <span className="photo-name">{photo.title}</span>
                          <span className="photo-resolution">{photo.meta}</span>
                        </div>
                        <div className="photo-zoom-icon">
                          <Maximize2 size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lightbox Modal */}
                {selectedPhoto && (
                  <div className="photo-lightbox-modal" onClick={() => setSelectedPhoto(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="lightbox-close-btn"
                        onClick={() => setSelectedPhoto(null)}
                        aria-label="Fotoansicht schließen"
                      >
                        <X size={18} />
                      </button>
                      <div className="lightbox-image-preview" style={{ background: selectedPhoto.color }}>
                        <span className="lightbox-preview-tag">{selectedPhoto.tag}</span>
                      </div>
                      <div className="lightbox-details">
                        <h4 className="lightbox-title">{selectedPhoto.title}</h4>
                        <span className="lightbox-meta">{selectedPhoto.meta} · Verlustfreie Originaldatei</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 4. EXPENSE SPLITTING MODULE */}
            {activeModule === "split" && (
              <div className="interactive-feature-view split-view">
                <div className="view-subhead-row">
                  <div>
                    <span className="view-badge">Kostenausgleich</span>
                    <h4 className="view-title">Ausgaben fair und transparent teilen</h4>
                  </div>
                  <span className="view-stat-counter tabular-num">
                    Gesamt: {totalExpenses.toFixed(2)} € · ({perPerson.toFixed(2)} € pro Person)
                  </span>
                </div>

                {/* Expenses List */}
                <div className="expenses-ledger-list">
                  {expenses.map((exp) => (
                    <div key={exp.id} className="expense-ledger-item">
                      <div className="expense-icon-wrap">
                        <Receipt size={16} />
                      </div>
                      <div className="expense-title-col">
                        <span className="expense-item-name">{exp.title}</span>
                        <span className="expense-item-payer">Vorgestreckt von {exp.paidBy}</span>
                      </div>
                      <span className="expense-item-amount tabular-num">
                        {exp.amount.toFixed(2)} €
                      </span>
                    </div>
                  ))}
                </div>

                {/* Interactive Add Expense Row */}
                <form className="add-expense-form" onSubmit={handleAddExpense}>
                  <input
                    type="text"
                    className="editorial-input expense-input-title"
                    placeholder="Neue Ausgabe (z.B. Tanken, Abendessen)…"
                    value={newExpenseTitle}
                    onChange={(e) => setNewExpenseTitle(e.target.value)}
                  />
                  <input
                    type="number"
                    step="0.5"
                    className="editorial-input expense-input-amount"
                    placeholder="Betrag (€)"
                    value={newExpenseAmount}
                    onChange={(e) => setNewExpenseAmount(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary btn-small add-expense-btn">
                    <Plus size={14} />
                    <span>Hinzufügen</span>
                  </button>
                </form>

                {/* Calculated Fair Settlement Box */}
                <div className="settlement-result-box">
                  <div className="settlement-header">
                    <Sparkles size={15} />
                    <span>Berechneter optimaler Schuldenausgleich:</span>
                  </div>
                  <div className="settlement-transfers">
                    <div className="settlement-chip">
                      <strong>Felix</strong> überweist <strong>{(perPerson - 15).toFixed(2)} €</strong> an <strong>Anna</strong>
                    </div>
                    <div className="settlement-chip">
                      <strong>Laura</strong> überweist <strong>{perPerson.toFixed(2)} €</strong> an <strong>Anna</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
