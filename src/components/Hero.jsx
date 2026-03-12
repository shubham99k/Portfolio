import { useState, useEffect } from "react";
import FloatingShape from "./FloatingShape";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "(Prompt Engineer by curiosity)",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 600);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          ),
        isDeleting ? 30 : 80,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, started]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingShape />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <p
          className="hero-anim hero-anim-1 font-mono text-[12px] tracking-[0.2em] uppercase mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Shubham Sali &mdash; Vadodara, India
        </p>

        <h1
          className="hero-anim hero-anim-2 font-serif text-[3.2rem] sm:text-[4rem] md:text-[5rem] leading-[1.05] tracking-[-0.02em]"
          style={{ color: "var(--text-primary)" }}
        >
          I build things
          <br />
          <em className="italic" style={{ color: "var(--text-secondary)" }}>
            for the web
          </em>
        </h1>

        <div
          className="hero-anim hero-anim-3 mt-6 h-6 font-mono text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <span style={{ color: "var(--text-secondary)" }}>{text}</span>
          <span
            className="inline-block w-[2px] h-[1.1em] ml-0.5 align-middle cursor-blink"
            style={{ backgroundColor: "var(--text-secondary)" }}
          />
        </div>

        <p
          className="hero-anim hero-anim-4 mt-8 text-[15px] md:text-base max-w-lg mx-auto leading-[1.8] font-light"
          style={{ color: "var(--text-secondary)" }}
        >
          Final year CSE student, crafting{" "}
          <em className="font-serif" style={{ fontStyle: "italic" }}>
            scalable
          </em>{" "}
          web applications with React, Node.js, and modern technologies.
        </p>
        <p
          className="hero-anim hero-anim-5 mt-3 text-[13px] md:text-sm max-w-lg mx-auto font-mono tracking-wide"
          style={{ color: "var(--text-muted)" }}
        >
          (Recently discovering that good prompts can be <br />
          as important as good code.)
        </p>

        <div className="hero-anim hero-anim-5 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] font-medium tracking-wide"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            View Projects
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] tracking-wide"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1soXGLzlqNVLXtprXSLpMCRMbVanwFg_F/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[13px] tracking-wide"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
            Resume
          </a>
        </div>
      </div>

      <div className="hero-anim hero-anim-6 absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="scroll-indicator w-5 h-8 rounded-full flex justify-center pt-2"
          style={{ border: "1.5px solid var(--border)" }}
        >
          <div
            className="w-1 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--text-muted)" }}
          />
        </div>
      </div>
    </section>
  );
}
