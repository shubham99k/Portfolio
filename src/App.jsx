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
// import MarqueeText from "./components/MarqueeText";
import MovingGrid from "./components/MovingGrid";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

function App() {
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEffects(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <div
      className="min-h-screen font-sans relative fade-in"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
    >
      {showEffects && <MovingGrid />}
      {!isMobile && showEffects && <Particles />}
      <Navbar />
      <main className="relative z-10">
        <Hero showGlobe={!isMobile && showEffects} />
        {/* <MarqueeText text="FULL STACK DEVELOPER" speed={25} /> */}
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Experience />
        </div>
        {/* <MarqueeText text="REACT · NODE · MONGODB · EXPRESS" speed={30} /> */}
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        {/* <MarqueeText text="LET'S BUILD SOMETHING TOGETHER" speed={22} /> */}
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
