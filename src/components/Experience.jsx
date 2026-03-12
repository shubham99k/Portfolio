import { motion } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "Trainee — Full Stack Developer",
    company: "Aarya Softex LLP",
    period: "Feb 2026 — Present",
    location: "Vadodara, Gujarat",
    points: [
      "Built a feature-rich React frontend integrated with the FakeStore API, covering complete product and user management workflows",
      "Developed dynamic pages for listing, viewing, adding, and editing both products and users, with search and filter functionality",
      "Implemented cart and wishlist features, enabling users to manage selected products with a smooth and interactive UI experience",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "CareerNaksha",
    period: "Dec 2025 — Feb 2026",
    location: "Vadodara, Gujarat",
    points: [
      "Engineered an offline-first test application enabling users to access and attempt tests without continuous internet connectivity",
      "Designed and developed a Node.js and Express.js backend serving versioned HTML, CSS, and JavaScript assets through structured REST APIs",
      "Implemented IndexedDB-based backup and restore functionality with JSON export support for reliable local data persistence",
    ],
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform("")}
      style={{ transform, transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            Where I&apos;ve <em className="italic" style={{ color: "var(--text-secondary)" }}>worked</em>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <TiltCard key={i}>
              <div
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <p className="font-serif italic text-[15px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5">
                    <span className="font-mono text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>
                      {exp.period}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] leading-[1.65]" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-muted)" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
