"use client";

import { KenteStrip } from "./AdinkraSymbols";
import { ADINKRA_SYMBOLS } from "./AdinkraSymbols";

export function KenteBorder({
  position = "top",
  className = "",
}: {
  position?: "top" | "bottom" | "both";
  className?: string;
}) {
  return (
    <div className={className}>
      {(position === "top" || position === "both") && (
        <div className="absolute top-0 left-0 right-0 h-1.5 z-10">
          <KenteStrip className="w-full h-full" />
        </div>
      )}
      {(position === "bottom" || position === "both") && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10">
          <KenteStrip className="w-full h-full" />
        </div>
      )}
    </div>
  );
}

export function AdinkraWatermark({
  count = 3,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const symbols = ADINKRA_SYMBOLS.slice(0, count);
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {symbols.map(({ Icon, name }, i) => {
        const positions = [
          "top-8 right-8",
          "bottom-12 left-10",
          "top-1/2 right-1/4",
          "bottom-8 right-16",
          "top-16 left-1/3",
        ];
        return (
          <div
            key={name}
            className={`absolute ${positions[i % positions.length]}`}
          >
            <Icon className="w-24 h-24 opacity-[0.04]" />
          </div>
        );
      })}
    </div>
  );
}

export function KenteAccentCard({
  children,
  className = "",
  accentColor = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  accentColor?: "gold" | "red" | "navy";
}) {
  const accents = {
    gold: "border-l-gold-500 hover:border-gold-400",
    red: "border-l-[#8B1A1A] hover:border-[#8B1A1A]",
    navy: "border-l-navy-800 hover:border-navy-600",
  };
  return (
    <div
      className={`group relative bg-white border border-institutional-border ${accents[accentColor]} border-l-[3px] rounded-xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/[0.03] rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors" />
      <div className="relative">{children}</div>
    </div>
  );
}
