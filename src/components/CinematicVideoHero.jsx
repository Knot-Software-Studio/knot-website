import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function CinematicVideoHero({ onDismiss }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stageRef = useRef(null);

  useEffect(() => {
    let dismissed = false;

    const handleScroll = () => {
      if (dismissed) return;
      const scrollY = window.scrollY;
      const stage = stageRef.current;
      const stageHeight = stage ? stage.offsetHeight : window.innerHeight;

      // Calculate continuous progress while scrolling inside the video
      const progress = Math.min(1, Math.max(0, scrollY / (stageHeight * 0.75)));
      setScrollProgress(progress);

      // ONLY lock out / dismiss when the user has scrolled down completely to the bottom part
      if (scrollY >= stageHeight - 40 && !dismissed) {
        dismissed = true;
        onDismiss();
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onDismiss]);

  const handleArrowClick = () => {
    const stage = stageRef.current;
    const stageHeight = stage ? stage.offsetHeight : window.innerHeight;
    window.scrollTo({ top: stageHeight, behavior: "smooth" });
  };

  // Fluid continuous transforms while scrolling inside the video
  const videoOpacity = Math.max(0, 1 - scrollProgress * 1.1);
  const videoScale = 1 + scrollProgress * 0.08;
  const videoBlur = scrollProgress * 10;

  const contentTranslateY = -scrollProgress * 75;
  const contentScale = Math.max(0.75, 1 - scrollProgress * 0.25);
  const contentOpacity = Math.max(0, 1 - scrollProgress * 1.25);

  return (
    <section 
      ref={stageRef}
      className="cinematic-hero-stage" 
      aria-label="Knot Studio Intro"
    >
      {/* Edge-to-Edge Video Backdrop Covering Full Viewport Below Topbar */}
      <div 
        className="cinematic-backdrop-wrap"
        style={{
          opacity: videoOpacity,
          transform: `scale(${videoScale})`,
          filter: `blur(${videoBlur}px)`,
        }}
      >
        <video
          className="cinematic-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/alps-hero-poster.jpg"
        >
          <source src="/assets/alps-hero.webm" type="video/webm" />
          <source src="/assets/alps-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Ambient Vignette */}
        <div className="cinematic-vignette-overlay" />
      </div>

      {/* Subtle Frosted Blur Layer (Only Bottom 12% / 1/3 size with Gentle 10px blur) */}
      <div className="cinematic-underneath-blur" aria-hidden="true" />

      {/* Monumental Centered Brand Identity */}
      <div 
        className="cinematic-center-content"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0) scale(${contentScale})`,
          opacity: contentOpacity,
        }}
      >
        <div className="cinematic-brand-capsule">
          <div className="cinematic-logo-halo">
            <img 
              src="/assets/knot-logo.png" 
              alt="Knot Brand Logo" 
              className="cinematic-hero-logo" 
              width="80" 
              height="80" 
            />
          </div>
          
          <h1 className="cinematic-hero-title">
            Knot
          </h1>
          
          <p className="cinematic-hero-slogan">
            Software die verbindet.
          </p>

          <div className="cinematic-origin-tag">
            <span className="origin-flag">🇦🇹</span>
            <span>Independent Software Studio · Graz &amp; Wien</span>
          </div>
        </div>

        {/* Interactive Apple Pill Button with Animated Arrow */}
        <button 
          type="button"
          onClick={handleArrowClick}
          className="cinematic-scroll-pill-btn"
          aria-label="Nach unten scrollen"
        >
          <span className="scroll-pill-text">Erkunden</span>
          <div className="scroll-arrow-disc">
            <ArrowDown size={15} className="scroll-arrow-anim" />
          </div>
        </button>
      </div>
    </section>
  );
}
