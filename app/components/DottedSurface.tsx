"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  color?: string;
  density?: number;
  speed?: number;
};

export default function DottedSurface({
  className = "",
  color = "212, 175, 55",
  density = 36,
  speed = 0.0008,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const dprRef = useRef<number>(1);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      sizeRef.current = { w, h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const draw = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = (t - startRef.current) * speed;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const cols = density;
      const rows = Math.round((density * h) / w);
      const stepX = w / (cols - 1);
      const stepY = h / (rows - 1);

      const tilt = 0.55;
      const baseY = h * 0.15;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const nx = c / (cols - 1) - 0.5;
          const nz = r / (rows - 1);
          const wave =
            Math.sin(nx * 4 + elapsed * 2 + nz * 3) * 0.5 +
            Math.cos(nz * 5 - elapsed * 1.5) * 0.5;

          const perspective = 0.4 + nz * 0.9;
          const px = w / 2 + nx * stepX * cols * perspective;
          const py =
            baseY + nz * h * tilt + wave * 18 * (0.3 + nz * 0.7);

          const distFromCenter = Math.abs(nx) * 2;
          const fade = (1 - distFromCenter * 0.6) * (0.25 + nz * 0.75);
          const alpha = Math.max(0, Math.min(1, fade));
          const radius = 0.6 + nz * 1.4;

          ctx.fillStyle = `rgba(${color}, ${alpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [color, density, speed]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
