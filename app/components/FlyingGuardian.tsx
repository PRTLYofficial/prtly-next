"use client";
import { useEffect, useRef } from "react";

export default function FlyingGuardian({ speed = 1 }: { speed?: number }) {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let x = -80, y = 30, vx = 0.7 * speed, vy = 0.45 * speed;
    const el = ref.current!;
    let raf = 0;

    const loop = () => {
      const w = window.innerWidth, h = window.innerHeight;
      x += vx; y += vy;

      if (x < -80 || x > w - 80) vx *= -1;
      if (y < 20 || y > h - 120) vy *= -1;

      el.style.transform = `translate(${x}px, ${y}px) rotate(${vx > 0 ? 2 : -2}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <img
      ref={ref}
      src="/guardian.png"
      alt="PRTLY Guardian"
      style={{
        position: "fixed",
        left: 0, top: 0, zIndex: 50,
        width: 120, pointerEvents: "none",
        filter: "drop-shadow(0 0 10px rgba(0,255,255,.6)) drop-shadow(0 0 18px rgba(255,0,255,.35))",
        opacity: .9
      }}
    />
  );
}
