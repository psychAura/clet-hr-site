type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionDivider({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 border-y ${
        isDark
          ? "bg-navy-950 border-white/5"
          : "bg-white border-institutional-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-2">
            <p
              className={`text-[64px] sm:text-[88px] leading-none font-heading font-bold tabular-nums ${
                isDark ? "text-gold-400/30" : "text-gold-500/40"
              }`}
            >
              {eyebrow}
            </p>
          </div>
          <div className="lg:col-span-10 lg:pt-6">
            <div
              className={`h-px w-16 mb-6 ${
                isDark ? "bg-gold-400" : "bg-gold-500"
              }`}
            />
            <h2
              className={`text-3xl sm:text-4xl font-heading font-bold leading-tight ${
                isDark ? "text-white" : "text-navy-900"
              }`}
            >
              {title}
            </h2>
            {description && (
              <p
                className={`mt-4 text-base leading-relaxed max-w-2xl ${
                  isDark ? "text-white/60" : "text-institutional-muted"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
