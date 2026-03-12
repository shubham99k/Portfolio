import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          animate={{ y: [0, -32] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.06]"
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
