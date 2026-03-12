export default function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif italic text-sm" style={{ color: "var(--text-muted)" }}>
            Shubham Sali
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-sali/" },
              { label: "GitHub", href: "https://github.com/shubham99k" },
              { label: "Email", href: "mailto:ssali71173@gmail.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[12px] tracking-wide"
                style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center mt-6 font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
          {"\u00a9 " + new Date().getFullYear() + " \u2014 Built with React, Tailwind CSS, Framer Motion & Vite"}
        </p>
      </div>
    </footer>
  );
}
