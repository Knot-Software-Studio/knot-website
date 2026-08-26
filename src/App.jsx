import { useEffect } from "react";
import { Toaster } from "sonner";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InteractiveDeviceCanvas from "./components/InteractiveDeviceCanvas.jsx";
import ProjectPipeline from "./components/ProjectPipeline.jsx";
import StudioPhilosophy from "./components/StudioPhilosophy.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    // Global Scroll Reveal Observer with threshold
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.08 }
    );

    revealElements.forEach((el) => observer.observe(el));

    // 60fps Spatial Parallax & Scroll Depth Engine
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId = null;

    const handleScroll = () => {
      if (prefersReducedMotion) return;
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      document.documentElement.style.setProperty("--scroll-y", `${scrollY}px`);
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);

      // Multi-layer ambient mesh orbs parallax
      const orb1 = document.getElementById("ambient-orb-1");
      const orb2 = document.getElementById("ambient-orb-2");
      const orb3 = document.getElementById("ambient-orb-3");
      const orb4 = document.getElementById("ambient-orb-4");

      if (orb1) orb1.style.transform = `translate3d(${scrollY * 0.05}px, ${scrollY * 0.22}px, 0)`;
      if (orb2) orb2.style.transform = `translate3d(${-scrollY * 0.04}px, ${scrollY * 0.15}px, 0)`;
      if (orb3) orb3.style.transform = `translate3d(${scrollY * 0.06}px, ${scrollY * 0.18}px, 0)`;
      if (orb4) orb4.style.transform = `translate3d(${-scrollY * 0.05}px, ${scrollY * 0.12}px, 0)`;
    };

    const onScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="app-root">
      {/* Dynamic Multi-Layer Spatial Parallax Glow Mesh */}
      <div className="ambient-parallax-mesh" aria-hidden="true">
        <div id="ambient-orb-1" className="ambient-orb orb-frost-top"></div>
        <div id="ambient-orb-2" className="ambient-orb orb-periwinkle-mid"></div>
        <div id="ambient-orb-3" className="ambient-orb orb-indigo-lower"></div>
        <div id="ambient-orb-4" className="ambient-orb orb-frost-bottom"></div>
      </div>

      {/* Background Architectural Grid Lines for Spatial Depth */}
      <div className="ambient-grid-guides" aria-hidden="true">
        <div className="ambient-guide-line"></div>
        <div className="ambient-guide-line"></div>
        <div className="ambient-guide-line"></div>
        <div className="ambient-guide-line"></div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "var(--font-body)",
            background: "rgba(18, 18, 21, 0.94)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            color: "#F5F5F7",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "14px",
            fontSize: "0.88rem",
            boxShadow: "0 18px 40px -10px rgba(0, 0, 0, 0.5)",
            padding: "12px 16px",
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <InteractiveDeviceCanvas />
        <ProjectPipeline />
        <StudioPhilosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
