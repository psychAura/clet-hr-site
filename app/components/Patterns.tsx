"use client";

import { motion } from "framer-motion";

export default function GridPattern({
  className = "",
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  const id = `grid-${size}`;
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id={id}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="dots"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function DiagonalLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="diag"
          width="10"
          height="10"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

export function AnimatedOrbs({
  variant = "gold",
}: {
  variant?: "gold" | "navy" | "mixed";
}) {
  const colors = {
    gold: ["bg-gold-500/15", "bg-gold-400/10"],
    navy: ["bg-navy-600/20", "bg-navy-800/15"],
    mixed: ["bg-gold-500/10", "bg-navy-600/15"],
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-32 -left-32 w-96 h-96 ${colors[variant][0]} rounded-full blur-[120px]`}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -bottom-32 -right-32 w-[500px] h-[500px] ${colors[variant][1]} rounded-full blur-[120px]`}
      />
    </div>
  );
}
