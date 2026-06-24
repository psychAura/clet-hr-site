"use client";

import { useEffect, useRef, useState } from "react";

export type SectionNavItem = {
  id: string;
  label: string;
};

type Props = {
  items: SectionNavItem[];
};

export default function SectionNav({ items }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemRefs = useRef<Map<string, HTMLAnchorElement | null>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive((visible[0].target as HTMLElement).id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const el = itemRefs.current.get(active);
    if (el) {
      el.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [active]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        aria-label="Page sections"
        className="hidden xl:block fixed top-1/2 -translate-y-1/2 right-6 z-30 max-h-[70vh]"
      >
        <div className="bg-white/90 backdrop-blur-md border border-institutional-border rounded-2xl shadow-lg p-2 max-w-[220px]">
          <p className="px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-gold-600 font-semibold border-b border-institutional-border mb-1">
            On this page
          </p>
          <ul className="space-y-0.5">
            {items.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    ref={(node) => {
                      itemRefs.current.set(item.id, node);
                    }}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all ${
                      isActive
                        ? "bg-navy-950 text-white"
                        : "text-navy-700 hover:bg-gold-50 hover:text-navy-900"
                    }`}
                  >
                    <span
                      className={`tabular-nums text-[10px] font-bold ${
                        isActive ? "text-gold-400" : "text-institutional-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium truncate">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="xl:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-institutional-border">
        <div className="max-w-7xl mx-auto px-6">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 text-left"
            aria-expanded={mobileOpen}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold shrink-0">
                On this page
              </span>
              <span className="text-sm font-semibold text-navy-900 truncate">
                {items.find((i) => i.id === active)?.label ?? items[0]?.label}
              </span>
            </span>
            <svg
              className={`w-4 h-4 text-navy-700 shrink-0 transition-transform ${
                mobileOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileOpen && (
            <ul className="pb-3 space-y-0.5 max-h-[60vh] overflow-y-auto">
              {items.map((item, i) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-navy-950 text-white"
                          : "text-navy-700 hover:bg-gold-50"
                      }`}
                    >
                      <span
                        className={`tabular-nums text-[10px] font-bold ${
                          isActive
                            ? "text-gold-400"
                            : "text-institutional-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
