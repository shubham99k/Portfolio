import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

const mobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function Particles() {
  const canvasRef = useRef(null);
  const { dark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    if (!mobile) {
      const handleMouse = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      window.addEventListener("mousemove", handleMouse);
    }

    const count = mobile
      ? Math.min(
          30,
          Math.floor((window.innerWidth * window.innerHeight) / 40000),
        )
      : Math.min(
          80,
          Math.floor((window.innerWidth * window.innerHeight) / 25000),
        );

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (mobile ? 0.3 : 0.6),
        vy: (Math.random() - 0.5) * (mobile ? 0.3 : 0.6),
        size: Math.random() * 1.2 + 0.2,
      });
    }

    const animate = () => {
      frame++;
      if (mobile && frame % 2 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = dark ? "255,255,255" : "0,0,0";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (!mobile) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            p.x += dx * 0.02;
            p.y += dy * 0.02;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + color + ",0.6)";
        ctx.fill();

        if (!mobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
            if (d < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle =
                "rgba(" + color + "," + 0.09 * (1 - d / 120) + ")";
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ animation: "fadeIn 1s ease both", willChange: "transform" }}
    />
  );
}
