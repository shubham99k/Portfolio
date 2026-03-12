import { motion } from "framer-motion";

export default function MarqueeText({ text = "FULL STACK DEVELOPER", speed = 20 }) {
  const repeated = Array(6).fill(text).join(" \u2014 ");

  return (
    <div className="py-12 overflow-hidden select-none" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex"
      >
        <span
          className="font-serif italic text-[4rem] md:text-[6rem] tracking-tight pr-8 opacity-[0.04]"
          style={{ color: "var(--text-primary)" }}
        >
          {repeated}
        </span>
        <span
          className="font-serif italic text-[4rem] md:text-[6rem] tracking-tight pr-8 opacity-[0.04]"
          style={{ color: "var(--text-primary)" }}
        >
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
