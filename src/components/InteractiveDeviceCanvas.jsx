import { useState, useRef } from "react";
import { 
  MapPin, 
  Flame, 
  Calendar as CalendarIcon, 
  Users, 
  Heart, 
  X, 
  Check, 
  Navigation, 
  Sparkles, 
  Plus, 
  ArrowRight, 
  Share2, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Receipt,
  ListChecks,
  CalendarCheck,
  Smartphone,
  ChevronRight,
  Globe,
  Mountain,
  Film,
  Compass,
  UtensilsCrossed
} from "lucide-react";
import { toast } from "sonner";

// Demo Event Pins for the Map View
const MAP_EVENTS = [
  {
    id: "e1",
    title: "Alpen-Hüttenwochenende",
    category: "Ausflug",
    date: "12.–14. September",
    location: "Schladminger Tauern",
    coords: { x: 38, y: 35 },
    members: ["Lukas", "Sophie", "Max", "Elena"],
    tag: "Aktiv",
    desc: "2 Tage Wandern, Hüttenabend & Kaiserschmarrn mit der Gruppe."
  },
  {
    id: "e2",
    title: "Vinyl & Specialty Coffee Date",
    category: "Date",
    date: "Morgen, 16:30",
    location: "Café Kurbad, Wien",
    coords: { x: 72, y: 28 },
    members: ["Anna", "Du"],
    tag: "Gemütlich",
    desc: "Platten stöbern und Flat White im 7. Bezirk."
  },
  {
    id: "e3",
    title: "Sunset Bouldern & BBQ",
    category: "Treffen",
    date: "Freitag, 18:00",
    location: "Donauinsel, Wien",
    coords: { x: 65, y: 62 },
    members: ["David", "Mia", "Florian"],
    tag: "Outdoor",
    desc: "Bouldern an den Pfeilern und danach Grillen am Ufer."
  },
  {
    id: "e4",
    title: "Geburtstags-Kochen & Wein",
    category: "Feier",
    date: "Samstag, 19:30",
    location: "Studio Loft, Graz",
    coords: { x: 45, y: 78 },
    members: ["Jonas", "Laura", "Felix", "Du"],
    tag: "Genuss",
    desc: "Hausgemachte Pasta & Naturweine feiern."
  }
];

// Demo Deck for the Swipe Experience
const SWIPE_DECK_ITEMS = [
  {
    id: "s1",
    title: "Klettersteig & Bergsee-Sprung",
    subtitle: "Tagesausflug · 4–6 Personen",
    category: "Abenteuer",
    Icon: Mountain,
    gradient: "linear-gradient(135deg, #181C2B 0%, #0F121C 100%)",
    accentColor: "#BEC0E9",
    dateHint: "Wochenende empfohlen",
    location: "Salzkammergut",
    highlights: ["Klettersteig B/C", "Bergsee-Picknick", "Fotospot"],
    creator: "Sophie M.",
  },
  {
    id: "s2",
    title: "Rooftop Cinema & Wine Night",
    subtitle: "Abend-Date · 2–4 Personen",
    category: "Kultur & Genuss",
    Icon: Film,
    gradient: "linear-gradient(135deg, #221A2E 0%, #120D1A 100%)",
    accentColor: "#D8B4FE",
    dateHint: "Dienstag oder Donnerstag",
    location: "Wien Neubau",
    highlights: ["Open-Air Kino", "Naturwein-Bar", "Sonnenuntergang"],
    creator: "David K.",
  },
  {
    id: "s3",
    title: "Kanu-Tour & Lagerfeuer",
    subtitle: "Wochenendtrip · 4–8 Personen",
    category: "Outdoor",
    Icon: Compass,
    gradient: "linear-gradient(135deg, #142422 0%, #0A1413 100%)",
    accentColor: "#6EE7B7",
    dateHint: "Samstag ganztags",
    location: "Donau-Auen",
    highlights: ["Paddeln", "Zelten am Fluss", "Lagerfeuer-Kochen"],
    creator: "Lukas B.",
  },
  {
    id: "s4",
    title: "Secret Supper Club Tasting",
    subtitle: "Dinner · 6 Personen",
    category: "Food",
    Icon: UtensilsCrossed,
    gradient: "linear-gradient(135deg, #2A1F1B 0%, #150F0D 100%)",
    accentColor: "#FDBA74",
    dateHint: "Freitagabend",
    location: "Graz Altstadt",
    highlights: ["5-Gänge Menü", "Private Location", "Matching Drinks"],
    creator: "Elena R.",
  }
];

const CALENDAR_DAYS = [
  { day: "Do", date: "10", active: false, hasEvents: true },
  { day: "Fr", date: "11", active: false, hasEvents: true },
  { day: "Sa", date: "12", active: true, hasEvents: true },
  { day: "So", date: "13", active: false, hasEvents: true },
  { day: "Mo", date: "14", active: false, hasEvents: false },
  { day: "Di", date: "15", active: false, hasEvents: true },
];

const CALENDAR_EVENTS = [
  {
    time: "09:30 – 17:00",
    title: "Hütten-Aufstieg & Panorama",
    badge: "Haupt-Event",
    status: "Zusage",
    color: "#BEC0E9",
    participants: 4
  },
  {
    time: "19:00 – 22:30",
    title: "Gemeinsames Hütten-Abendessen",
    badge: "Knot Gruppe",
    status: "Bestätigt",
    color: "#979BC1",
    participants: 6
  }
];

export default function InteractiveDeviceCanvas() {
  const [activeTab, setActiveTab] = useState("map");
  
  // Map State
  const [selectedMapEvent, setSelectedMapEvent] = useState(MAP_EVENTS[0]);
  const [mapCategory, setMapCategory] = useState("Alle");

  const filteredMapEvents = mapCategory === "Alle" 
    ? MAP_EVENTS 
    : MAP_EVENTS.filter(e => e.category === mapCategory);

  // Swipe Deck State & Drag Physics
  const [deckIndex, setDeckIndex] = useState(0);
  const [lastAction, setLastAction] = useState(null);
  const [savedCount, setSavedCount] = useState(2);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Dynamic 3D tilt perspective for chassis depth
  const [chassisTilt, setChassisTilt] = useState({ x: 0, y: 0 });
  const chassisRef = useRef(null);

  const handleChassisMouseMove = (e) => {
    if (!chassisRef.current) return;
    const rect = chassisRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = -(y / (rect.height / 2)) * 3.5;
    const tiltY = (x / (rect.width / 2)) * 3.5;
    setChassisTilt({ x: tiltX, y: tiltY });
  };

  const handleChassisMouseLeave = () => {
    setChassisTilt({ x: 0, y: 0 });
  };

  // Tools Sub-tab state
  const [toolSubTab, setToolSubTab] = useState("poll");
  const [votedId, setVotedId] = useState("v1");
  const [tasks, setTasks] = useState([
    { id: "t1", title: "Bergschuhe & Grödel", assignee: "Lukas", done: true },
    { id: "t2", title: "Kamera & Drohne", assignee: "Sophie", done: true },
    { id: "t3", title: "Erste-Hilfe & Biwaksack", assignee: "Max", done: false },
    { id: "t4", title: "Kaiserschmarrn-Zutaten", assignee: "Elena", done: false },
  ]);

  const handleSwipe = (direction) => {
    const currentCard = SWIPE_DECK_ITEMS[deckIndex % SWIPE_DECK_ITEMS.length];
    setLastAction(direction);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
    
    if (direction === "like") {
      setSavedCount(prev => prev + 1);
      toast.success("Event gemerkt!", {
        description: `„${currentCard.title}“ zu deinen Entwürfen hinzugefügt.`,
        duration: 2500,
      });
    } else {
      toast("Übersprungen", {
        description: "Nächster Vorschlag wird geladen.",
        duration: 1500,
      });
    }

    setTimeout(() => {
      setDeckIndex(prev => prev + 1);
      setLastAction(null);
    }, 280);
  };

  const handlePointerDown = (e) => {
    if (lastAction) return;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (lastAction || !dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    // Detect horizontal drag intent vs vertical page scroll
    if (!isDragging) {
      if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
        setIsDragging(true);
        if (e.target.setPointerCapture) {
          try {
            e.target.setPointerCapture(e.pointerId);
          } catch (err) {
            // Ignored
          }
        }
      }
    }

    if (isDragging) {
      setDragOffset({ x: deltaX, y: deltaY });
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) {
      dragStartRef.current = { x: 0, y: 0 };
      return;
    }
    setIsDragging(false);
    dragStartRef.current = { x: 0, y: 0 };
    if (dragOffset.x > 75) {
      handleSwipe("like");
    } else if (dragOffset.x < -75) {
      handleSwipe("pass");
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const currentSwipeCard = SWIPE_DECK_ITEMS[deckIndex % SWIPE_DECK_ITEMS.length];

  const cardTransform = isDragging
    ? `translate3d(${dragOffset.x}px, ${dragOffset.y * 0.3}px, 0) rotate(${dragOffset.x * 0.08}deg)`
    : undefined;

  const likeStampOpacity = Math.min(1, Math.max(0, dragOffset.x / 60));
  const passStampOpacity = Math.min(1, Math.max(0, -dragOffset.x / 60));

  return (
    <section id="flaggschiff" className="showcase-architectural-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="showcase-header-row reveal-on-scroll">
          <div className="showcase-lead-block">
            <h2 className="showcase-main-heading">
              Knot Event-Planer <em>für iOS &amp; Android.</em>
            </h2>
            <p className="showcase-subtext">
              Das taktile Werkzeug für gemeinsame Vorfreude. 
              Vom ersten Gedanken auf der Karte bis zur geteilten Abrechnung.
            </p>
          </div>
          <div className="showcase-badge-meta">
            <span className="meta-pill">TestFlight &amp; Play Beta</span>
            <span className="meta-pill">100% DSGVO</span>
          </div>
        </div>

        {/* 2-Column Split: Architectural Feature Switcher + Tactile Simulator */}
        <div className="showcase-split-grid">
          
          {/* LEFT: Feature Director & Controllers */}
          <div className="showcase-controls-column reveal-on-scroll">
            
            {/* Feature 01 */}
            <div 
              className={`feature-nav-block ${activeTab === "map" ? "is-selected" : ""}`}
              onClick={() => setActiveTab("map")}
            >
              <div className="feat-body">
                <span className="feat-kicker-mono">01 / MAP TRAVERSAL</span>
                <h3 className="feat-title">Karten-Entdeckung</h3>
                <p className="feat-desc">
                  Durchquere Ausflugsziele, Berghütten und Kulturspots direkt auf einer interaktiven Vektorkarte für Österreich.
                </p>
              </div>
            </div>

            {/* Feature 02 */}
            <div 
              className={`feature-nav-block ${activeTab === "swipe" ? "is-selected" : ""}`}
              onClick={() => setActiveTab("swipe")}
            >
              <div className="feat-body">
                <span className="feat-kicker-mono">02 / FLUID GESTURES</span>
                <h3 className="feat-title">Swipe-Deck Inspiration</h3>
                <p className="feat-desc">
                  Stimme Ideen mit Freunden ab. Ziehe die Karte mit Finger oder Maus nach rechts zum Merken oder links zum Überspringen.
                </p>
              </div>
            </div>

            {/* Feature 03 */}
            <div 
              className={`feature-nav-block ${activeTab === "calendar" ? "is-selected" : ""}`}
              onClick={() => setActiveTab("calendar")}
            >
              <div className="feat-body">
                <span className="feat-kicker-mono">03 / TIMELINE SYNC</span>
                <h3 className="feat-title">Kalender &amp; Zeitleiste</h3>
                <p className="feat-desc">
                  Der Tag im Überblick mit Tagesstreifen, Zu- und Absagen sowie nahtloser Anbindung an Apple iCal und Google Calendar.
                </p>
              </div>
            </div>

            {/* Feature 04 */}
            <div 
              className={`feature-nav-block ${activeTab === "tools" ? "is-selected" : ""}`}
              onClick={() => setActiveTab("tools")}
            >
              <div className="feat-body">
                <span className="feat-kicker-mono">04 / ZERO-CHAOS TOOLS</span>
                <h3 className="feat-title">Gruppen-Werkzeuge</h3>
                <p className="feat-desc">
                  1-Klick Terminabstimmungen, geteilte Packlisten und transparenter Kostenausgleich ohne WhatsApp-Chaos.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Photorealistic Mobile Hardware Frame */}
          <div className="showcase-hardware-column reveal-on-scroll">
            
            <div 
              ref={chassisRef}
              className="hardware-chassis"
              onMouseMove={handleChassisMouseMove}
              onMouseLeave={handleChassisMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${chassisTilt.x}deg) rotateY(${chassisTilt.y}deg)`,
              }}
            >
              
              {/* Dynamic Island */}
              <div className="hardware-island">
                <div className="island-lens"></div>
                <div className="island-dot"></div>
              </div>

              {/* Viewport Screen */}
              <div className="hardware-screen">
                
                {/* Status Bar */}
                <div className="screen-status-bar">
                  <span className="status-clock">09:41</span>
                  <div className="status-meta-group">
                    <span className="net-badge">5G</span>
                    <span className="bat-badge">98%</span>
                  </div>
                </div>

                {/* VIEW 1: MAP TRAVERSAL */}
                {activeTab === "map" && (
                  <div key="map" className="screen-view-map hardware-view-enter">
                    <div className="map-chips-strip">
                      {["Alle", "Ausflug", "Date", "Treffen", "Feier"].map((cat) => (
                        <button 
                          key={cat}
                          type="button"
                          className={`m-chip ${mapCategory === cat ? "is-active" : ""}`}
                          onClick={() => setMapCategory(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="map-canvas-area">
                      <svg className="map-vector-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 0 30 Q 30 20 60 40 T 100 35" fill="none" stroke="rgba(190,192,233,0.12)" strokeWidth="2.5" />
                        <path d="M 40 0 Q 45 40 35 70 T 40 100" fill="none" stroke="rgba(190,192,233,0.12)" strokeWidth="2" />
                        <path d="M 10 90 Q 50 60 85 85 T 100 80" fill="none" stroke="rgba(190,192,233,0.08)" strokeWidth="3" />
                        <path d="M 60 0 Q 75 35 68 70 T 80 100" fill="none" stroke="rgba(151, 155, 193, 0.3)" strokeWidth="3.5" />
                      </svg>

                      {filteredMapEvents.map((ev) => {
                        const isSelected = selectedMapEvent.id === ev.id;
                        return (
                          <button
                            key={ev.id}
                            type="button"
                            className={`map-pin-anchor ${isSelected ? "is-focused" : ""}`}
                            style={{ left: `${ev.coords.x}%`, top: `${ev.coords.y}%` }}
                            onClick={() => setSelectedMapEvent(ev)}
                            title={ev.title}
                          >
                            <span className="pin-ambient-pulse"></span>
                            <div className="pin-circle">
                              <MapPin size={13} />
                            </div>
                            <span className="pin-label-chip">{ev.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom Sheet */}
                    <div className="map-sheet-panel">
                      <div className="sheet-pill-handle"></div>
                      <div className="sheet-meta-line">
                        <span className="sheet-cat-text">{selectedMapEvent.category} · {selectedMapEvent.tag}</span>
                        <span className="sheet-date-text">{selectedMapEvent.date}</span>
                      </div>
                      <h4 className="sheet-event-title">{selectedMapEvent.title}</h4>
                      <p className="sheet-geo-line">
                        <Navigation size={12} />
                        <span>{selectedMapEvent.location}</span>
                      </p>
                      <p className="sheet-excerpt">{selectedMapEvent.desc}</p>
                      <div className="sheet-actions-row">
                        <div className="sheet-faces">
                          {selectedMapEvent.members.map((m, idx) => (
                            <span key={idx} className="face-bubble" title={m}>{m[0]}</span>
                          ))}
                          <span className="face-count">+{selectedMapEvent.members.length}</span>
                        </div>
                        <button 
                          type="button" 
                          className="btn-sheet-cta"
                          onClick={() => toast.success("Event im Kalender geöffnet")}
                        >
                          <span>Plan öffnen</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 2: SWIPE DECK */}
                {activeTab === "swipe" && (
                  <div key="swipe" className="screen-view-swipe hardware-view-enter">
                    <div className="swipe-top-bar">
                      <span className="swipe-badge">
                        <Flame size={13} />
                        <span>Inspirations-Deck</span>
                      </span>
                      <span className="swipe-counter">
                        ❤️ <strong>{savedCount}</strong> gemerkt
                      </span>
                    </div>

                    <div className="swipe-stage">
                      <div 
                        className={`active-swipe-card ${lastAction ? `action-${lastAction}` : ""} ${isDragging ? "is-dragging" : ""}`}
                        style={{ 
                          background: currentSwipeCard.gradient,
                          transform: cardTransform,
                          transition: isDragging ? "none" : undefined
                        }}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                      >
                        {likeStampOpacity > 0 && (
                          <div className="stamp-badge stamp-like" style={{ opacity: likeStampOpacity }}>
                            <span>MERKEN</span>
                          </div>
                        )}
                        {passStampOpacity > 0 && (
                          <div className="stamp-badge stamp-pass" style={{ opacity: passStampOpacity }}>
                            <span>PASSEN</span>
                          </div>
                        )}

                        <div className="card-header-row">
                          <span className="c-pill" style={{ color: currentSwipeCard.accentColor }}>
                            {currentSwipeCard.category}
                          </span>
                          <span className="c-icon-badge" style={{ color: currentSwipeCard.accentColor }}>
                            <currentSwipeCard.Icon size={22} strokeWidth={2} />
                          </span>
                        </div>

                        <div className="card-center-body">
                          <span className="c-date">{currentSwipeCard.dateHint}</span>
                          <h3 className="c-title">{currentSwipeCard.title}</h3>
                          <p className="c-subtitle">{currentSwipeCard.subtitle}</p>
                          <p className="c-location">
                            <MapPin size={13} />
                            <span>{currentSwipeCard.location}</span>
                          </p>

                          <div className="c-tags-wrap">
                            {currentSwipeCard.highlights.map((h, i) => (
                              <span key={i} className="c-tag">
                                ✓ {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="card-footer-sign">
                          <span>Karte ziehen oder tippen · Von {currentSwipeCard.creator}</span>
                        </div>
                      </div>
                    </div>

                    <div className="swipe-controls-strip">
                      <button 
                        type="button" 
                        className="btn-round-swipe btn-pass"
                        onClick={() => handleSwipe("pass")}
                        title="Überspringen"
                      >
                        <X size={20} />
                      </button>

                      <button 
                        type="button" 
                        className="btn-round-swipe btn-info"
                        onClick={() => toast("Details zum Event geöffnet")}
                        title="Details"
                      >
                        <Sparkles size={18} />
                      </button>

                      <button 
                        type="button" 
                        className="btn-round-swipe btn-like"
                        onClick={() => handleSwipe("like")}
                        title="Merken"
                      >
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {/* VIEW 3: CALENDAR */}
                {activeTab === "calendar" && (
                  <div key="calendar" className="screen-view-calendar hardware-view-enter">
                    <div className="cal-header-bar">
                      <div className="cal-user-lead">
                        <div className="user-initial">T</div>
                        <div className="user-meta">
                          <span className="u-name">Dein Planer-Konto</span>
                          <span className="u-status">● Synchronisiert</span>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className="btn-cal-plus"
                        onClick={() => toast.success("Neuen Termin-Entwurf erstellt")}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="cal-strip-grid">
                      {CALENDAR_DAYS.map((d, i) => (
                        <div key={i} className={`cal-strip-cell ${d.active ? "is-selected" : ""}`}>
                          <span className="c-day-name">{d.day}</span>
                          <span className="c-day-num">{d.date}</span>
                          {d.hasEvents && <span className="c-dot"></span>}
                        </div>
                      ))}
                    </div>

                    <div className="cal-agenda-stack">
                      <div className="agenda-title-bar">
                        <span>Samstag, 12. September</span>
                        <span className="agenda-badge">2 Termine</span>
                      </div>

                      <div className="agenda-items-list">
                        {CALENDAR_EVENTS.map((item, idx) => (
                          <div key={idx} className="agenda-event-card">
                            <div className="agenda-time-row">
                              <Clock size={13} />
                              <span>{item.time}</span>
                            </div>
                            <h4 className="agenda-title">{item.title}</h4>
                            <div className="agenda-bottom-row">
                              <span className="agenda-type-pill" style={{ backgroundColor: `${item.color}25`, color: item.color }}>
                                {item.badge}
                              </span>
                              <span className="agenda-status-pill">
                                <CheckCircle2 size={12} />
                                {item.status} ({item.participants})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cal-sync-note">
                        <Share2 size={13} />
                        <span>Mit Google Calendar &amp; Apple iCal (.ics) verbunden</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 4: GROUP TOOLS */}
                {activeTab === "tools" && (
                  <div key="tools" className="screen-view-tools hardware-view-enter">
                    <div className="tools-tab-switcher">
                      <button 
                        type="button"
                        className={`t-switch ${toolSubTab === "poll" ? "is-active" : ""}`}
                        onClick={() => setToolSubTab("poll")}
                      >
                        <CalendarCheck size={14} />
                        <span>Termin</span>
                      </button>
                      <button 
                        type="button"
                        className={`t-switch ${toolSubTab === "tasks" ? "is-active" : ""}`}
                        onClick={() => setToolSubTab("tasks")}
                      >
                        <ListChecks size={14} />
                        <span>Aufgaben</span>
                      </button>
                      <button 
                        type="button"
                        className={`t-switch ${toolSubTab === "split" ? "is-active" : ""}`}
                        onClick={() => setToolSubTab("split")}
                      >
                        <Receipt size={14} />
                        <span>Split</span>
                      </button>
                    </div>

                    <div className="tools-pane-wrap">
                      {toolSubTab === "poll" && (
                        <div className="poll-pane">
                          <h4 className="pane-main-title">Wochenende in den Bergen</h4>
                          
                          <div className="poll-choices-list">
                            {[
                              { id: "v1", label: "Sa 12. – So 13. Sept", votes: 5, total: 10 },
                              { id: "v2", label: "Sa 19. – So 20. Sept", votes: 2, total: 10 },
                              { id: "v3", label: "Fr 25. – Sa 26. Sept", votes: 3, total: 10 },
                            ].map((opt) => {
                              const isChecked = votedId === opt.id;
                              const currentVotes = isChecked ? opt.votes + 1 : opt.votes;
                              const percent = Math.round((currentVotes / 11) * 100);
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  className={`poll-choice-item ${isChecked ? "is-checked" : ""}`}
                                  onClick={() => {
                                    setVotedId(opt.id);
                                    toast.success("Stimme gespeichert");
                                  }}
                                >
                                  <div 
                                    className="poll-progress-fill" 
                                    style={{ transform: `scaleX(${percent / 100})` }}
                                  />
                                  <div className="poll-content-row">
                                    <div className="p-radio">
                                      {isChecked && <Check size={12} />}
                                    </div>
                                    <span className="p-label">{opt.label}</span>
                                    <span className="p-votes">{currentVotes} Stimmen ({percent}%)</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {toolSubTab === "tasks" && (
                        <div className="tasks-pane">
                          <h4 className="pane-main-title">Wer packt was ein?</h4>

                          <div className="tasks-list-stack">
                            {tasks.map((t) => (
                              <div 
                                key={t.id} 
                                className={`task-item-line ${t.done ? "is-done" : ""}`}
                                onClick={() => toggleTask(t.id)}
                              >
                                <div className="t-box">
                                  {t.done && <Check size={12} className="t-check-icon" />}
                                </div>
                                <div className="t-text-group">
                                  <span className="t-name">{t.text}</span>
                                  <span className="t-assignee">Zugeordnet: {t.person}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {toolSubTab === "split" && (
                        <div className="split-pane">
                          <h4 className="pane-main-title">Gemeinsame Ausgaben</h4>

                          <div className="split-total-block">
                            <span className="s-lead">Gesamtsumme Gruppe</span>
                            <span className="s-sum">€ 284,50</span>
                            <span className="s-per">€ 71,12 pro Person (4 Mitglieder)</span>
                          </div>

                          <div className="split-debt-row">
                            <span>Sophie schuldet Lukas</span>
                            <span className="debt-amount">€ 32,50</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="web-rsvp-banner">
                      <Globe size={13} />
                      <span>Gäste stimmen direkt im Web ab – ohne App-Zwang.</span>
                    </div>
                  </div>
                )}

                {/* Bottom Navigation */}
                <div className="screen-bottom-nav">
                  <button 
                    type="button" 
                    className={`nav-tab-action ${activeTab === "map" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("map")}
                  >
                    <MapPin size={18} />
                    <span>Karte</span>
                  </button>
                  <button 
                    type="button" 
                    className={`nav-tab-action ${activeTab === "swipe" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("swipe")}
                  >
                    <Flame size={18} />
                    <span>Swipe</span>
                  </button>
                  <button 
                    type="button" 
                    className={`nav-tab-action ${activeTab === "calendar" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("calendar")}
                  >
                    <CalendarIcon size={18} />
                    <span>Plan</span>
                  </button>
                  <button 
                    type="button" 
                    className={`nav-tab-action ${activeTab === "tools" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("tools")}
                  >
                    <Layers size={18} />
                    <span>Tools</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
