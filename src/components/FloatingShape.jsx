import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

function WireframeGlobe() {
  const canvasRef = useRef(null);
  const { dark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let angle = 0;

    const size = 300;
    canvas.width = size * 2;
    canvas.height = size * 2;

    const R = size * 0.65;
    const cx = size;
    const cy = size;

    const project = (x, y, z) => {
      const perspective = 600;
      const scale = perspective / (perspective + z);
      return {
        x: cx + x * scale,
        y: cy + y * scale,
        scale,
      };
    };

    const rotateY = (x, y, z, a) => ({
      x: x * Math.cos(a) + z * Math.sin(a),
      y,
      z: -x * Math.sin(a) + z * Math.cos(a),
    });

    const rotateX = (x, y, z, a) => ({
      x,
      y: y * Math.cos(a) - z * Math.sin(a),
      z: y * Math.sin(a) + z * Math.cos(a),
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = dark ? "255,255,255" : "0,0,0";
      angle += 0.003;

      const segments = 40;

      // Draw longitude lines (vertical)
      for (let i = 0; i < 12; i++) {
        const lon = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        for (let j = 0; j <= segments; j++) {
          const lat = (j / segments) * Math.PI - Math.PI / 2;
          let x = R * Math.cos(lat) * Math.cos(lon);
          let y = R * Math.sin(lat);
          let z = R * Math.cos(lat) * Math.sin(lon);

          let r = rotateY(x, y, z, angle);
          r = rotateX(r.x, r.y, r.z, 0.4);
          const p = project(r.x, r.y, r.z);

          const opacity = (0.08 + p.scale * 0.12).toFixed(3);
          ctx.strokeStyle = "rgba(" + color + "," + opacity + ")";

          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Draw latitude lines (horizontal)
      for (let i = 0; i < 8; i++) {
        const lat = (i / 8) * Math.PI - Math.PI / 2 + Math.PI / 16;
        const r2 = R * Math.cos(lat);
        const yy = R * Math.sin(lat);
        ctx.beginPath();
        for (let j = 0; j <= segments; j++) {
          const lon = (j / segments) * Math.PI * 2;
          let x = r2 * Math.cos(lon);
          let z = r2 * Math.sin(lon);

          let r = rotateY(x, yy, z, angle);
          r = rotateX(r.x, r.y, r.z, 0.4);
          const p = project(r.x, r.y, r.z);

          const opacity = (0.06 + p.scale * 0.1).toFixed(3);
          ctx.strokeStyle = "rgba(" + color + "," + opacity + ")";

          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Draw dots at intersections
      for (let i = 0; i < 12; i++) {
        const lon = (i / 12) * Math.PI * 2;
        for (let j = 1; j < 8; j++) {
          const lat = (j / 8) * Math.PI - Math.PI / 2;
          let x = R * Math.cos(lat) * Math.cos(lon);
          let y = R * Math.sin(lat);
          let z = R * Math.cos(lat) * Math.sin(lon);

          let r = rotateY(x, y, z, angle);
          r = rotateX(r.x, r.y, r.z, 0.4);
          const p = project(r.x, r.y, r.z);

          const opacity = (0.1 + p.scale * 0.2).toFixed(3);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + color + "," + opacity + ")";
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: "300px", height: "300px" }}
    />
  );
}

export default function FloatingShape() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D wireframe globe rendered on canvas */}
      <WireframeGlobe />

      {/* Floating gradient blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--text-primary), transparent)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--text-primary), transparent)",
        }}
      />

      {/* Orbiting ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: "600px" }}
      >
        <motion.div
          animate={{ rotateX: 75, rotateZ: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-[380px] h-[380px] rounded-full"
          style={{
            border: "1px solid var(--border-hover)",
            opacity: 0.3,
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
}
