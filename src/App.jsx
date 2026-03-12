import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import MarqueeText from "./components/MarqueeText";
import MovingGrid from "./components/MovingGrid";

const isMobile = () => window.innerWidth < 768;

function App() {
  const [loading, setLoading] = useState(true);
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isMobile()) return;
      const timer = setTimeout(() => setShowEffects(true), 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">
          <p className="loader-name font-serif">Shubham Sali</p>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen font-sans relative fade-in"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      {showEffects && <MovingGrid />}
      {showEffects && <Particles />}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeText text="FULL STACK DEVELOPER" speed={25} />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Experience />
        </div>
        <MarqueeText text="REACT · NODE · MONGODB · EXPRESS" speed={30} />
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <MarqueeText text="LET'S BUILD SOMETHING TOGETHER" speed={22} />
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
