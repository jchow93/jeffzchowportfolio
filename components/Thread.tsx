"use client";

import { useEffect, useRef } from "react";

interface ThreadProps {
  className?: string;
  color?: string;
}

/**
 * The brand motif: one line that starts tangled on the left and leaves the
 * frame straight on the right. Draws a still frame when the visitor prefers
 * reduced motion.
 */
export default function Thread({ className = "", color = "#D9541A" }: ThreadProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const size = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (ms: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const t = ms / 2600;
      const mid = h * 0.5;
      const steps = 420;

      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const p = i / steps;
        // Tangle strength: full at the left edge, zero from 72% across.
        const k = Math.pow(Math.max(0, 1 - p / 0.72), 2);
        const x = p * w + k * 46 * Math.cos(p * 58 + t) + k * 22 * Math.sin(p * 131 - t * 1.4);
        const y = mid + k * h * 0.34 * Math.sin(p * 47 + t * 0.8) + k * h * 0.12 * Math.sin(p * 113 + t * 1.7);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 1.6;
      ctx.lineJoin = "round";
      ctx.strokeStyle = color;
      ctx.stroke();

      if (!still) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      size();
      if (still) draw(0);
    };

    size();
    if (still) draw(0);
    else frame = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [color]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none block w-full ${className}`} />;
}

/** Static tangled / straight pair used on case study cards. */
export function ThreadLine({ straight = false }: { straight?: boolean }) {
  return (
    <svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true" className="block h-10 w-full">
      {straight ? (
        <path d="M0 20 L300 20" fill="none" stroke="#D9541A" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      ) : (
        <path
          d="M0 20 C40 20,52 2,70 12 S60 38,46 26 S82 0,112 20 S96 40,82 24 S132 4,162 22 S150 38,138 26 S192 8,218 22 S250 28,300 20"
          fill="none"
          stroke="#5A6B64"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}
