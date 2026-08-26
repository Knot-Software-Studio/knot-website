import { useState } from "react";
import { toast } from "sonner";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Check, 
  Plus, 
  Sparkles,
  CheckCircle2,
  Circle,
  Filter
} from "lucide-react";

const INITIAL_TRIPS = [
  {
    id: "mountain",
    title: "Wochenendtrip Zugspitze",
    date: "12. – 13. September",
    location: "Garmisch-Partenkirchen",
    tag: "Aktivität & Berge",
    members: [
      { name: "Anna M.", initial: "A", color: "#F97316" },
      { name: "Tom S.", initial: "T", color: "#0071E3" },
      { name: "Felix K.", initial: "F", color: "#10B981" },
      { name: "Laura B.", initial: "L", color: "#8B5CF6" },
    ],
    items: [
      { id: 1, text: "Hütte verbindlich reservieren", done: true, by: "Anna M." },
      { id: 2, text: "Wanderroute & Wettervorhersage prüfen", done: true, by: "Tom S." },
      { id: 3, text: "Proviant, Snacks & Wasser besorgen", done: false, by: "Felix K." },
      { id: 4, text: "Fahrgemeinschaften & Autos aufteilen", done: false, by: "Laura B." },
    ],
  },
  {
    id: "dinner",
    title: "Sommerfest & Dachterrassen-Grillen",
    date: "25. September · 18:00 Uhr",
    location: "München Glockenbach",
    tag: "Feier & Essen",
    members: [
      { name: "Tom S.", initial: "T", color: "#0071E3" },
      { name: "Sarah W.", initial: "S", color: "#EC4899" },
      { name: "Max H.", initial: "M", color: "#F59E0B" },
      { name: "Julia N.", initial: "J", color: "#6366F1" },
    ],
    items: [
      { id: 1, text: "Grill & Briketts bereitstellen", done: true, by: "Tom S." },
      { id: 2, text: "Salate, Dips & Brot abstimmen", done: true, by: "Sarah W." },
      { id: 3, text: "Getränke & Eiswürfel besorgen", done: false, by: "Max H." },
      { id: 4, text: "Lichterkette & Playlist vorbereiten", done: false, by: "Julia N." },
    ],
  },
  {
    id: "pizza",
    title: "Spieleabend & Homemade Pizza",
    date: "03. Oktober · 19:00 Uhr",
    location: "Bei Felix & Sarah",
    tag: "Gemütlicher Abend",
    members: [
      { name: "Felix K.", initial: "F", color: "#10B981" },
      { name: "Lisa R.", initial: "L", color: "#F97316" },
      { name: "Tom S.", initial: "T", color: "#0071E3" },
    ],
    items: [
      { id: 1, text: "Pizzateig 24h kalt ansetzen", done: true, by: "Felix K." },
      { id: 2, text: "Spieleauswahl (Catan & Codenames)", done: false, by: "Lisa R." },
      { id: 3, text: "Craft Beer & Limonaden besorgen", done: false, by: "Tom S." },
    ],
  },
];

export default function InteractivePlanner() {
  const [trips, setTrips] = useState(INITIAL_TRIPS);
  const [activeTab, setActiveTab] = useState(0);
  const [filter, setFilter] = useState("all"); // "all", "open", "done"
  const [newTaskText, setNewTaskText] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const current = trips[activeTab];

  const toggleItem = (itemId) => {
    setTrips((prev) =>
      prev.map((trip, idx) => {
        if (idx !== activeTab) return trip;
        return {
          ...trip,
          items: trip.items.map((item) => {
            if (item.id === itemId) {
              const nextDone = !item.done;
              if (nextDone) {
                toast.success(`Abgehakt: ${item.text}`, {
                  description: `Zuständig: ${item.by}`,
                  duration: 2500,
                });
              }
              return { ...item, done: nextDone };
            }
            return item;
          }),
        };
      })
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newItem = {
      id: Date.now(),
      text: newTaskText.trim(),
      done: false,
      by: current.members[0].name,
    };

    setTrips((prev) =>
      prev.map((trip, idx) => {
        if (idx !== activeTab) return trip;
        return {
          ...trip,
          items: [...trip.items, newItem],
        };
      })
    );

    toast.success("Aufgabe hinzugefügt", {
      description: newItem.text,
      duration: 2500,
    });
    setNewTaskText("");
    setIsAdding(false);
  };

  const doneCount = current.items.filter((i) => i.done).length;
  const totalCount = current.items.length;
  const progressPct = Math.round((doneCount / Math.max(totalCount, 1)) * 100);

  const filteredItems = current.items.filter((item) => {
    if (filter === "open") return !item.done;
    if (filter === "done") return item.done;
    return true;
  });

  return (
    <div className="planner-device-canvas" aria-label="Interaktive Live-Vorschau">
      {/* Top Device Bar */}
      <div className="device-top-bar">
        <div className="device-indicator-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="device-bar-title">Knot Erlebnisplaner · Live Vorschau</span>
        <div className="device-bar-status">
          <span className="live-pulse"></span>
          <span>Online</span>
        </div>
      </div>

      {/* Segmented Control Switcher */}
      <div className="planner-segmented-wrapper">
        <div className="planner-segmented-control" role="tablist">
          {trips.map((trip, idx) => (
            <button
              key={trip.id}
              type="button"
              role="tab"
              aria-selected={activeTab === idx}
              className={`segmented-tab ${activeTab === idx ? "active" : ""}`}
              onClick={() => {
                setActiveTab(idx);
                setIsAdding(false);
              }}
            >
              <span className="segmented-tab-text">{trip.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Canvas Main Sheet */}
      <div className="planner-sheet-body">
        {/* Event Card Header */}
        <div className="planner-event-header">
          <div className="event-primary-info">
            <span className="event-tag-badge">{current.tag}</span>
            <h3 className="planner-event-title">{current.title}</h3>
            
            <div className="event-meta-chips">
              <span className="meta-chip">
                <Calendar size={13} />
                <span>{current.date}</span>
              </span>
              <span className="meta-chip">
                <MapPin size={13} />
                <span>{current.location}</span>
              </span>
            </div>
          </div>

          {/* Members Avatars */}
          <div className="event-members-box">
            <span className="members-box-label">Teilnehmer ({current.members.length})</span>
            <div className="members-avatar-stack">
              {current.members.map((m, i) => (
                <div
                  key={i}
                  className="member-avatar"
                  style={{ backgroundColor: m.color }}
                  title={m.name}
                >
                  {m.initial}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar & Filter Bar */}
        <div className="planner-progress-card">
          <div className="progress-top-row">
            <span className="progress-label">Fortschritt der Planung</span>
            <span className="progress-value tabular-num">
              {doneCount} von {totalCount} ({progressPct}%)
            </span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="progress-fill"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="planner-tasks-section">
          <div className="tasks-header-row">
            <div className="tasks-filter-pills">
              <button
                type="button"
                className={`filter-pill ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                Alle ({current.items.length})
              </button>
              <button
                type="button"
                className={`filter-pill ${filter === "open" ? "active" : ""}`}
                onClick={() => setFilter("open")}
              >
                Offen ({current.items.filter(i => !i.done).length})
              </button>
              <button
                type="button"
                className={`filter-pill ${filter === "done" ? "active" : ""}`}
                onClick={() => setFilter("done")}
              >
                Erledigt ({doneCount})
              </button>
            </div>

            {!isAdding && (
              <button
                type="button"
                className="add-task-trigger-btn"
                onClick={() => setIsAdding(true)}
              >
                <Plus size={14} />
                <span>Aufgabe</span>
              </button>
            )}
          </div>

          {/* Quick Add Inline Form */}
          {isAdding && (
            <form className="inline-add-task-form" onSubmit={handleAddTask}>
              <input
                type="text"
                className="inline-add-input"
                placeholder="Neue Aufgabe eingeben…"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                autoFocus
              />
              <div className="inline-add-actions">
                <button type="submit" className="btn btn-primary btn-small">
                  Hinzufügen
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  onClick={() => {
                    setIsAdding(false);
                    setNewTaskText("");
                  }}
                >
                  Abbrechen
                </button>
              </div>
            </form>
          )}

          {/* Task Rows */}
          <div className="tasks-list">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`task-item-row ${item.done ? "is-completed" : ""}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className={`task-checkbox ${item.done ? "checked" : ""}`}>
                  {item.done ? <Check size={13} strokeWidth={3} /> : null}
                </div>
                <span className="task-text-content">{item.text}</span>
                <span className="task-assigned-badge">{item.by}</span>
              </button>
            ))}
            {filteredItems.length === 0 && (
              <div className="tasks-empty-state">
                Keine Aufgaben in diesem Filter.
              </div>
            )}
          </div>
        </div>

        {/* Footer Hint */}
        <div className="planner-device-footer">
          <Sparkles size={13} className="hint-icon" />
          <span>Tippe auf eine Aufgabe zum Abhaken oder füge eine eigene hinzu.</span>
        </div>
      </div>
    </div>
  );
}
