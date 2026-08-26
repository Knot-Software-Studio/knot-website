import { Toaster } from "sonner";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InteractiveDeviceCanvas from "./components/InteractiveDeviceCanvas.jsx";
import ProjectPipeline from "./components/ProjectPipeline.jsx";
import StudioPhilosophy from "./components/StudioPhilosophy.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app-root">
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
