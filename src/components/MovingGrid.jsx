import { motion } from "framer-motion";

export default function MovingGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -32] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          height: "calc(100% + 32px)",
        }}
      />
    </div>
  );
}
