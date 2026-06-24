"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  height?: "sm" | "md" | "lg";
};

const heightClass = {
  sm: "h-[220px] sm:h-[280px]",
  md: "h-[280px] sm:h-[360px] lg:h-[420px]",
  lg: "h-[360px] sm:h-[460px] lg:h-[540px]",
};

export default function ImageBand({
  src,
  alt,
  caption,
  height = "md",
}: Props) {
  return (
    <section className="relative bg-navy-950">
      <div className={`relative ${heightClass[height]} overflow-hidden`}>
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />

        {caption && (
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-lg"
              >
                <div className="h-px w-12 bg-gold-400 mb-4" />
                <p className="text-white/90 text-sm sm:text-base font-heading italic leading-relaxed">
                  {caption}
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
