"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import GridPattern, { AnimatedOrbs, DotPattern, DiagonalLines } from "./Patterns";

type HeroVariant =
  | "navy-orbs"
  | "split-gold"
  | "grid-light"
  | "dotted-cream"
  | "diagonal-dark"
  | "minimal-gold-bar"
  | "centered-emblem"
  | "side-accent";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: HeroVariant;
  icon?: ReactNode;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow = "People, Talent & Culture Directorate",
  title,
  subtitle,
  variant = "navy-orbs",
  icon,
  children,
}: PageHeroProps) {
  if (variant === "navy-orbs") {
    return (
      <section className="relative bg-navy-900 overflow-hidden">
        <AnimatedOrbs variant="gold" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </section>
    );
  }

  if (variant === "split-gold") {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex items-center px-6 lg:px-12 py-20"
          >
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-6 text-lg text-institutional-muted leading-relaxed">
                  {subtitle}
                </p>
              )}
              {children}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 relative overflow-hidden flex items-center justify-center"
          >
            <DotPattern className="absolute inset-0 w-full h-full text-navy-900/15" />
            <div className="relative text-navy-900 p-12 text-center">
              {icon}
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "grid-light") {
    return (
      <section className="relative bg-institutional-bg overflow-hidden">
        <GridPattern className="absolute inset-0 w-full h-full text-navy-900/[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-institutional-bg" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-institutional-border">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-navy-700 font-semibold">
                {eyebrow}
              </p>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-institutional-muted max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "dotted-cream") {
    return (
      <section className="relative bg-gold-50 overflow-hidden border-b border-gold-200/40">
        <DotPattern className="absolute inset-0 w-full h-full text-gold-700/15" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-navy-800/70 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "diagonal-dark") {
    return (
      <section className="relative bg-navy-950 overflow-hidden">
        <DiagonalLines className="absolute inset-0 w-full h-full text-white/[0.04]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gold-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "centered-emblem") {
    return (
      <section className="relative bg-white overflow-hidden border-b border-institutional-border">
        <GridPattern className="absolute inset-0 w-full h-full text-navy-900/[0.03]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            {icon}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-institutional-muted max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "side-accent") {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-500 via-gold-400 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-institutional-muted leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </section>
    );
  }

  // minimal-gold-bar default
  return (
    <section className="relative bg-white overflow-hidden border-b border-institutional-border">
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-institutional-muted max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8 w-16 h-[3px] bg-gold-500 rounded-full" />
          {children}
        </motion.div>
      </div>
    </section>
  );
}
