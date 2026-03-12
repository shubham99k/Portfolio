import { useState, useEffect } from "react";

export default function MovingGrid() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {ready && (
        <div
          className="absolute inset-0 opacity-[0.06] grid-scroll"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            height: "calc(100% + 32px)",
          }}
        />
      )}
    </div>
  );
}
