export default function Contact() {
  const contactMethods = [
    {
      id: "email",
      label: "Email",
      value: "ssali71173@gmail.com",
      href: "mailto:ssali71173@gmail.com",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 7434055474",
      href: "tel:+917434055474",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "shubham-sali",
      href: "https://www.linkedin.com/in/shubham-sali/",
      ext: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      value: "shubham99k",
      href: "https://github.com/shubham99k",
      ext: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@_ig.shubham",
      href: "https://www.instagram.com/_ig.shubham",
      ext: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1.5"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: "var(--accent-soft)",
              border: "1px solid var(--border)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{
                  backgroundColor: "#22c55e",
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "#22c55e" }}
              />
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.1em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Available for opportunities
            </span>
          </div>

          <p
            className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Contact
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
            style={{ color: "var(--text-primary)" }}
          >
            {"Let\u2019s build something "}
            <em className="italic" style={{ color: "var(--text-secondary)" }}>
              great
            </em>
          </h2>
          <p
            className="mt-6 text-[15px] leading-[1.8] font-light max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {
              "I\u2019m always open to new opportunities, collaborations, and interesting conversations. Drop me a line and let\u2019s make something happen."
            }
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.ext ? "_blank" : undefined}
              rel={method.ext ? "noopener noreferrer" : undefined}
              className="group rounded-2xl p-5 flex items-center gap-4"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--text-secondary)",
                }}
              >
                {method.icon}
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className="font-mono text-[10px] tracking-[0.15em] uppercase block"
                  style={{ color: "var(--text-muted)" }}
                >
                  {method.label}
                </span>
                <span
                  className="text-[13px] font-medium block truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {method.value}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform group-hover:translate-x-1"
                style={{ color: "var(--text-muted)" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
