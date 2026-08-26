import { useState } from "react";
import { Mail, Check, Copy, ArrowRight, Smartphone, ShieldCheck, Sparkles, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [platform, setPlatform] = useState("ios"); // "ios" | "android"
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Bitte gib eine E-Mail-Adresse ein.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return "Bitte gib eine vollständige E-Mail-Adresse ein (z. B. name@domain.at).";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateEmail(email);
    if (errorMsg) {
      setEmailError(errorMsg);
      toast.error(errorMsg);
      return;
    }
    setEmailError("");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Erfolgreich auf der Warteliste!", {
        description: `Einladung für ${platform === "ios" ? "Apple TestFlight" : "Google Play Beta"} wird an ${email} versendet.`,
        duration: 4000,
      });
    }, 450);
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("In die Zwischenablage kopiert", {
      description: text,
      duration: 2000,
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="kontakt" className="contact-architectural-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="contact-header-row reveal-on-scroll">
          <div className="contact-title-group">
            <h2 className="contact-main-heading">
              Werde Teil der ersten <em>Test-Welle.</em>
            </h2>
          </div>
          <p className="contact-lead-text">
            Der Knot Event-Planer startet im Q3 2026 in die geschlossene Beta. 
            Sichere dir deinen frühen Zugang für Apple TestFlight oder Google Play.
          </p>
        </div>

        {/* 2-Column Desk */}
        <div className="contact-desk-grid">
          
          {/* LEFT: Direct Founder Desk & Channels */}
          <div className="founder-desk-column reveal-on-scroll">
            <div className="desk-inner-content">
              <h3 className="desk-title">Studio Desk &amp; Gründerkontakt</h3>
              <p className="desk-text">
                Hast du Feedback, Ideen für eine Kooperation oder möchtest du dich als Creator oder Event-Host vernetzen? Schreib direkt an unser Team.
              </p>

              <div className="desk-channels-stack">
                <div className="desk-channel-line">
                  <div className="channel-info-group">
                    <span className="ch-type">Allgemeine Anfragen &amp; Partnerschaften</span>
                    <span className="ch-addr">office@knot-software.com</span>
                  </div>
                  <button 
                    type="button" 
                    className="btn-ch-copy"
                    onClick={() => copyToClipboard("office@knot-software.com", "office")}
                    title="E-Mail kopieren"
                  >
                    {copiedKey === "office" ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === "office" ? "Kopiert" : "Kopieren"}</span>
                  </button>
                </div>

                <div className="desk-channel-line">
                  <div className="channel-info-group">
                    <span className="ch-type">Technischer Support &amp; Beta-Feedback</span>
                    <span className="ch-addr">support@knot-software.com</span>
                  </div>
                  <button 
                    type="button" 
                    className="btn-ch-copy"
                    onClick={() => copyToClipboard("support@knot-software.com", "support")}
                    title="E-Mail kopieren"
                  >
                    {copiedKey === "support" ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === "support" ? "Kopiert" : "Kopieren"}</span>
                  </button>
                </div>
              </div>

              <div className="desk-privacy-note">
                <ShieldCheck size={16} />
                <span>Zero-Spam Garantie. Deine E-Mail wird niemals an Dritte weitergegeben.</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Beta Access Form */}
          <div className="beta-form-column reveal-on-scroll">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="architectural-form">
                <div className="form-head-meta">
                  <h3 className="form-main-title">Frühzugang sichern</h3>
                  <p className="form-sub-desc">Wähle dein Betriebssystem für die Beta-Einladung:</p>
                </div>

                {/* Platform Toggle */}
                <div className="platform-segmented-switch">
                  <button
                    type="button"
                    className={`seg-btn ${platform === "ios" ? "is-active" : ""}`}
                    onClick={() => setPlatform("ios")}
                  >
                    <Smartphone size={15} />
                    <span>iOS (TestFlight)</span>
                  </button>

                  <button
                    type="button"
                    className={`seg-btn ${platform === "android" ? "is-active" : ""}`}
                    onClick={() => setPlatform("android")}
                  >
                    <Smartphone size={15} />
                    <span>Android (Google Play)</span>
                  </button>
                </div>

                {/* Email Input */}
                <div className="form-field-group">
                  <label htmlFor="beta-email-input" className="field-label-mono">E-MAIL-ADRESSE</label>
                  <div className="input-frame">
                    <Mail size={16} className="input-leading-icon" />
                    <input
                      id="beta-email-input"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      className={`architectural-input ${emailError ? "has-error" : ""}`}
                      placeholder="name@beispiel.at"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      aria-invalid={!!emailError}
                      aria-describedby={emailError ? "beta-email-error" : undefined}
                      required
                      disabled={loading}
                    />
                  </div>
                  {emailError && (
                    <span id="beta-email-error" className="field-error-msg" role="alert">
                      {emailError}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-architectural btn-primary-brand btn-submit-full"
                  disabled={loading}
                >
                  <span>{loading ? "Wird eingetragen..." : "Für Beta-Start eintragen"}</span>
                  <ArrowRight size={16} />
                </button>

                <span className="form-bottom-fineprint">
                  Kostenlos · Keine Kreditkarte nötig · Abmeldung jederzeit mit 1 Klick.
                </span>
              </form>
            ) : (
              <div className="form-confirmed-panel">
                <div className="confirmed-mark">
                  <Check size={28} />
                </div>
                <h3 className="confirmed-title">Du bist vorgemerkt!</h3>
                <p className="confirmed-desc">
                  Wir haben deine E-Mail (<strong>{email}</strong>) für die <strong>{platform === "ios" ? "iOS TestFlight" : "Android Play Beta"}</strong> registriert. Sobald die Einladungs-Welle startet, erhältst du deinen persönlichen Installations-Link.
                </p>
                <button
                  type="button"
                  className="btn-architectural btn-ghost-line"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                    setEmailError("");
                  }}
                >
                  <span>Weitere E-Mail registrieren</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
