import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Section label */}
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
          About
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight" style={{ color: "var(--text-primary)" }}>
          A bit about <em className="italic" style={{ color: "var(--text-secondary)" }}>myself</em>
        </h2>

        <p className="mt-8 text-[15px] leading-[1.8] font-light" style={{ color: "var(--text-secondary)" }}>
          I&apos;m a B.E. Computer Engineering student at{" "}
          <strong className="font-medium" style={{ color: "var(--text-primary)" }}>
            Sardar Vallabhbhai Patel Institute of Technology, Vasad
          </strong>{" "}
          (GTU) with a <strong className="font-medium" style={{ color: "var(--text-primary)" }}>CGPA of 8.41/10</strong>.
          I&apos;m passionate about building{" "}
          <em className="font-serif italic">scalable, responsive</em>{" "}
          web applications and solving real-world problems through technology.
        </p>

        <p className="mt-4 text-[15px] leading-[1.8] font-light" style={{ color: "var(--text-secondary)" }}>
          My interests span full-stack development, system design, and creating{" "}
          <em className="font-serif italic">intuitive</em> user experiences.
          Currently training as a Full Stack Developer at Aarya Softex LLP.
        </p>

        {/* Info grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Location", value: "Vadodara, IN" },
            { label: "Education", value: "B.E. CSE" },
            { label: "CGPA", value: "8.41 / 10" },
            { label: "Passing Year", value: "2026" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                {item.label}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/shubham99k", icon: (
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            )},
            { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-sali/", icon: (
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            )},
            { label: "Email", href: "mailto:ssali71173@gmail.com", icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )},
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-[13px]"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
