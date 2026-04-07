import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["JavaScript", "Java"] },
  { title: "Frontend", skills: ["React","Redux Toolkit", "Bootstrap", "Tailwind CSS", "Material UI", "EJS", "HTML", "CSS" ] },
  { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { title: "Databases/ODM", skills: ["MySQL", "MongoDB", "Mongoose"] },
  { title: "Developer Tools", skills: ["Git", "GitHub", "VS Code", "Cursor","Postman", "Render", "Vercel"] },
  { title: "Coursework", skills: ["DSA", "DBMS", "OOP", "Computer Networks", "Operating Systems"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            Skills
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            Technologies I <em className="italic" style={{ color: "var(--text-secondary)" }}>work with</em>
          </h2>
        </div>

        <div className="space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-[13px]"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--text-primary)";
                      e.currentTarget.style.color = "var(--bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--tag-bg)";
                      e.currentTarget.style.color = "var(--tag-text)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
