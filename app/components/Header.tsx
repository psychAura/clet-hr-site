"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#work", label: "Our Work" },
  { href: "#units", label: "Units" },
  { href: "#culture", label: "Culture" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-navy-950 text-white/70 text-[11px] py-1.5 relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="tracking-[0.2em] uppercase font-medium">
            Republic of Ghana
          </span>
          <span className="hidden sm:inline tracking-wide">
            Council for Legal Education and Training
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-[inset_0_-1px_0_0_#e5e7eb]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-[15px]">
          <div className="flex items-center justify-between h-16">
            <Link href="#home" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/clet-ptc-logo.png"
                alt="CLET People, Talent & Culture"
                width={50}
                height={50}
                priority
                className="w-[50px] h-auto object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold leading-none">
                  CLET Ghana
                </p>
                <p className="text-sm font-heading font-bold text-navy-900 leading-tight mt-0.5">
                  People, Talent &amp; Culture
                </p>
              </div>
            </Link>

            <nav className="hidden xl:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                      className={`relative px-2.5 py-2 text-[15px] transition-colors after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-gold-500 after:transition-transform after:origin-left ${activeSection === item.href.slice(1) ? "text-navy-950 font-semibold after:scale-x-100" : "text-navy-600 hover:text-navy-900 after:scale-x-0 hover:after:scale-x-100"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 -mr-2"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span
                  className={`block h-[1.5px] bg-navy-900 transition-all duration-200 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-navy-900 transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-navy-900 transition-all duration-200 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden overflow-hidden border-t border-institutional-border bg-white"
            >
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 max-h-[calc(100vh-7rem)] overflow-y-auto" aria-label="Mobile navigation">
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                        className={`block px-3 py-3 text-sm rounded-md transition-colors ${activeSection === item.href.slice(1) ? "bg-gold-50 text-navy-950 font-semibold" : "text-navy-700 hover:text-navy-900 hover:bg-institutional-bg"}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
