import { useRef, useState } from "react";

const projects = [
  {
    title: "TiffinBox",
    subtitle: "City-Based Home Food Pre-Order Platform",
    description:
      "A city-based home food pre-order platform connecting home cooks with nearby customers, featuring a 2-3 hour pre-order window that reduces food waste and ensures freshly cooked meals.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT"],
    points: [
      "Built role-based access for Customers, Cooks, and Admins with JWT authentication and email OTP verification.",
      "Added an admin approval gate for cook onboarding and integrated Cloudinary for image uploads.",
      "Designed 37 REST API endpoints across auth, orders, menus, reviews, and admin modules.",
      "Engineered cutoff-time validation, real-time portion decrement with auto-menu closure, a star rating system, and Nodemailer status notifications.",
    ],
    github: "https://github.com/shubham99k/TiffinBox",
    live: "https://tiffinbox.shubhamsali.site/",
  },
  {
    title: "Wanderlust",
    subtitle: "Full-Stack Accommodation Platform",
    description:
      "A full-stack Airbnb-style accommodation platform with a React.js SPA frontend and Express.js REST API backend, featuring user authentication, role-based authorization, and Cloudinary image uploads.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Cloudinary",
    ],
    points: [
      "React.js SPA frontend with Context API for global state",
      "User auth via Passport.js with owner-based authorization",
      "Reviews and star ratings with real-time search",
      "Server-side validation with Joi, MongoDB Atlas database",
    ],
    github: "https://github.com/shubham99k/Wanderlust-using-React.git",
    live: "https://wanderlust.shubhamsali.site/",
  },
  {
    title: "QuickPost",
    subtitle: "Full-Stack CRUD Blogging Platform",
    description:
      "A full-stack CRUD blogging platform with MongoDB and Mongoose ODM, leveraging schema-based data modeling to support efficient, scalable post creation and retrieval.",
    tech: ["Express.js", "Node.js", "EJS", "MongoDB", "Mongoose"],
    points: [
      "RESTful API endpoints (GET, POST, PATCH, DELETE)",
      "Server-side EJS-rendered views with Express routing",
      "Schema-based data modeling with Mongoose ODM",
      "Smooth, dynamic user experience with CRUD operations",
    ],
    github: "https://github.com/shubham99k/QuickPost",
  },
  {
    title: "Weather App",
    subtitle: "Live Weather Dashboard",
    description:
      "A React weather application that fetches and displays live temperature, humidity, and weather conditions for any city via the OpenWeather API.",
    tech: ["React.js", "Material UI", "OpenWeather API"],
    points: [
      "Live temperature, humidity, and conditions display",
      "Responsive UI using Material UI components",
      "React hooks managing API calls and state",
      "Seamless city search experience",
    ],
    github: "https://github.com/shubham99k/Weather-React-App",
    live: "https://weatherapp.shubhamsali.site/",
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      "perspective(800px) rotateY(" + x * 5 + "deg) rotateX(" + -y * 5 + "deg)",
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform("")}
      style={{ transform, transition: "transform 0.15s ease-out" }}>
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id='projects' className='py-24 md:py-32'>
      <div className='max-w-2xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <p
            className='font-mono text-[11px] tracking-[0.2em] uppercase mb-4'
            style={{ color: "var(--text-muted)" }}>
            Projects
          </p>
          <h2
            className='font-serif text-3xl md:text-4xl tracking-tight'
            style={{ color: "var(--text-primary)" }}>
            {"Things I\u2019ve "}
            <em className='italic' style={{ color: "var(--text-secondary)" }}>
              built
            </em>
          </h2>
        </div>

        <div className='space-y-8'>
          {projects.map((project, i) => (
            <TiltCard key={project.title}>
              <div
                className='rounded-xl p-6 md:p-8 group'
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }>
                <div className='flex items-start justify-between gap-4 mb-3'>
                  <div>
                    <h3
                      className='font-serif text-xl md:text-2xl'
                      style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p
                      className='font-serif italic text-[14px] mt-0.5'
                      style={{ color: "var(--text-muted)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className='flex items-center gap-3 shrink-0 pt-1'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        color: "var(--text-muted)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }>
                      <svg
                        width='18'
                        height='18'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          color: "var(--text-muted)",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--text-primary)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text-muted)")
                        }>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.5'>
                          <path
                            d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className='text-[14px] leading-[1.7] mb-5'
                  style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <ul className='space-y-1.5 mb-5'>
                  {project.points.map((point, j) => (
                    <li
                      key={j}
                      className='flex items-start gap-2.5 text-[13px] leading-[1.6]'
                      style={{ color: "var(--text-secondary)" }}>
                      <span
                        className='mt-[7px] w-1 h-1 rounded-full shrink-0'
                        style={{ backgroundColor: "var(--text-muted)" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-1.5'>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className='font-mono text-[11px] px-2.5 py-1 rounded-full'
                      style={{
                        backgroundColor: "var(--tag-bg)",
                        color: "var(--tag-text)",
                      }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
