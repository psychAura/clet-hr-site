import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/app/components/FadeIn";
import AnimatedText from "@/app/components/AnimatedText";
import NumberTicker from "@/app/components/NumberTicker";
import DottedSurface from "@/app/components/DottedSurface";
import {
  Adinkrahene,
  AkomaNtoaso,
  MmaraKrado,
  Epa,
  Sepow,
  Hwemudua,
  Nyansapo,
  OkodeeMmowere,
  KenteStrip,
} from "@/app/components/AdinkraSymbols";
import VideoBackground from "@/app/components/VideoBackground";
import { Briefcase, Compass } from "lucide-react";

const FEATURED_ADINKRA = [
  { Icon: Adinkrahene, name: "Adinkrahene", meaning: "Greatness & Leadership" },
  { Icon: MmaraKrado, name: "Mmara Krado", meaning: "Seal of Law & Authority" },
  { Icon: Epa, name: "Epa", meaning: "Law & Justice" },
  { Icon: Sepow, name: "Sepow", meaning: "Judicial Authority" },
  { Icon: AkomaNtoaso, name: "Akoma Ntoaso", meaning: "Understanding & Agreement" },
  { Icon: Hwemudua, name: "Hwemudua", meaning: "Standards & Excellence" },
  { Icon: Nyansapo, name: "Nyansapo", meaning: "Wisdom & Ingenuity" },
  { Icon: OkodeeMmowere, name: "Okodee Mmowere", meaning: "Strength & Bravery" },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-start bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/GSL.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.35]"
          />
          <VideoBackground
            src="/videos/hero.mp4"
            poster="/images/GSL.png"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/85 via-navy-900/80 to-navy-900/95" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-navy-600/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl w-full text-left">
            <div className="flex items-center gap-3 mb-8 justify-start">
              <Image
                src="/images/clet-ptc-logo.png"
                alt="CLET People, Talent & Culture"
                width="128"
                height="128"
                priority
                className="w-12 h-12 object-contain"
              />
              <div className="h-8 w-px bg-white/20" />
              <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
                People, Talent &amp; Culture Directorate
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              Shaping the{" "}
              <span className="text-gold-400 inline-flex">
                <AnimatedText
                  words={["people", "talent", "culture"]}
                  interval={2500}
                />
              </span>
              <br />
              of legal education
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed">
              Building the institutional culture and professional standards that
              define Ghana&apos;s legal education system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-7 py-3.5 text-sm font-semibold hover:bg-gold-400 transition-all"
              >
                Explore Our Mandate
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/culture"
                className="inline-flex items-center border border-white/20 text-white/70 px-7 py-3.5 text-sm font-semibold hover:bg-white/5 hover:border-white/40 hover:text-white transition-all"
              >
                Our Values
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      <section className="bg-white border-b border-institutional-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-institutional-border">
            {[
              { value: 200, suffix: "+", label: "Personnel in the System" },
              { value: 2, label: "Functional Units" },
              { value: 8, label: "Core Institutional Values" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <p className="text-4xl sm:text-5xl font-heading font-bold text-navy-900">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix || ""}
                  />
                </p>
                <p className="mt-3 text-sm sm:text-base text-institutional-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Our Pillars
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
                Three foundations for institutional excellence.
              </h2>
              <p className="mt-5 text-lg text-institutional-muted leading-relaxed">
                Every framework, every appointment, and every standard the
                Directorate sets traces back to one of these three pillars.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Talent Acquisition & Development",
                description:
                  "Establishing standards for the recruitment, appointment, and continuous professional development of personnel within Ghana\u2019s legal education institutions.",
                href: "/culture#talent",
                Adinkra: Hwemudua,
              },
              {
                title: "Institutional Culture & Ethics",
                description:
                  "Defining the values, professional conduct standards, and ethical frameworks that govern the administration of legal education.",
                href: "/culture#ethics",
                Adinkra: AkomaNtoaso,
              },
              {
                title: "Governance & Accountability",
                description:
                  "Ensuring transparency, fairness, and adherence to public service standards in all aspects of human capital management.",
                href: "/about#mandate",
                Adinkra: MmaraKrado,
              },
            ].map((card, i) => (
              <FadeIn key={card.href} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className="group relative block bg-white border border-institutional-border rounded-2xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gold-400"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-6 right-6 text-5xl font-heading font-bold text-gold-500/15 tabular-nums select-none group-hover:text-gold-500/25 transition-colors"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-10 bottom-10 w-[3px] bg-gold-500 rounded-r-full"
                  />
                  <div className="relative w-16 h-16 mb-8 flex items-center justify-center bg-gold-50 border border-gold-200/60 rounded-xl group-hover:bg-gold-100 transition-colors">
                    <card.Adinkra className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-navy-900 group-hover:text-gold-700 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base text-institutional-muted leading-relaxed">
                    {card.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 group-hover:gap-3 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Functional Units
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy-900 leading-tight">
                Two units. One mandate.
              </h2>
              <p className="mt-5 text-lg text-institutional-muted leading-relaxed">
                The Directorate organises its work through two complementary
                units, each carrying a distinct portfolio under a shared
                mission.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                Icon: Briefcase,
                unit: "Operational Unit",
                role: "Day-to-day execution of recruitment, training, personnel administration, and the full lifecycle of staff across CLET-regulated institutions.",
              },
              {
                Icon: Compass,
                unit: "Strategic Unit",
                role: "Policy formulation, workforce planning, institutional values, ethical frameworks, and long-term direction for human capital across the system.",
              },
            ].map((u, i) => (
              <FadeIn key={u.unit} delay={i * 0.1}>
                <div className="group relative h-full bg-white border border-institutional-border hover:border-gold-400 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-10 bottom-10 w-[3px] bg-gold-500 rounded-r-full"
                  />
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                      <u.Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-institutional-muted font-semibold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-navy-900">
                    {u.unit}
                  </h3>
                  <p className="mt-4 text-base text-institutional-muted leading-relaxed">
                    {u.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/library.jpg"
                    alt="Ghanaian professionals collaborating in a formal institutional setting"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-gold-400 text-xs uppercase tracking-[0.2em] font-semibold">
                      Our Culture
                    </p>
                    <p className="mt-2 text-white text-xl font-heading font-bold">
                      Excellence in service.
                      <br />
                      Integrity in practice.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-800/10 rounded-xl -z-10" />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                Building a culture worthy of the legal profession
              </h2>
              <p className="mt-6 text-institutional-muted leading-relaxed">
                The culture of Ghana&apos;s legal education system reflects the
                gravity of the legal profession, the dignity of public service,
                and the aspirations of a nation committed to justice and the rule
                of law.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Professional discipline & ethics",
                  "Merit-based advancement",
                  "Commitment to public service",
                  "Continuous learning & growth",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <span className="text-sm text-navy-800 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/culture"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors group"
              >
                Read our culture statement
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <VideoBackground
            src="/videos/people.mp4"
            poster="/images/library.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
                People in Action
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
                The talent behind Ghana&apos;s legal education
              </h2>
              <p className="mt-6 text-white/55 leading-relaxed">
                Behind every standard, every policy, and every framework are the
                people who make legal education possible — educators,
                administrators, assessors, and support professionals working
                across institutions nationwide.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Educators & Trainers", accent: "bg-gold-500" },
                  { label: "Administrative Staff", accent: "bg-white" },
                  { label: "Assessment Professionals", accent: "bg-gold-400" },
                  { label: "Institutional Leaders", accent: "bg-navy-600" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.accent}`} />
                    <span className="text-sm text-white/70 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/library.jpg"
                  alt="Legal education professionals at work"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/90 flex items-center justify-center backdrop-blur-sm hover:bg-gold-400 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 text-navy-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                    People · Talent · Culture
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/adinkra/background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900/60" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-2">
          <KenteStrip className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2">
          <KenteStrip className="w-full h-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold-500" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
                  Rooted in Ghanaian Heritage
                </p>
                <span className="h-px w-10 bg-gold-500" />
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-bold text-white">
                Wisdom woven with the law
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed max-w-2xl mx-auto">
                The Adinkra symbols of the Akan people carry the proverbs and
                principles of Ghanaian society — the same values that ground our
                legal tradition.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10 max-w-6xl mx-auto">
              {FEATURED_ADINKRA.map(({ Icon, name, meaning }, i) => (
                <FadeIn key={name} delay={i * 0.05}>
                  <div className="group flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="mt-3 text-[11px] text-white/80 font-semibold text-center leading-tight">
                      {name}
                    </p>
                    <p className="mt-1 text-[10px] text-white/45 text-center leading-snug max-w-[110px]">
                      {meaning}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-navy-950 py-24 overflow-hidden">
        <DottedSurface color="212, 175, 55" density={42} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-white">
                Our Areas of Responsibility
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                label: "People & Talent Development",
                href: "/culture",
              },
              { label: "Recruitment & Selection", href: "/careers" },
              { label: "Training & Capacity Building", href: "/careers" },
              {
                label: "Institutional Culture & Ethics",
                href: "/culture",
              },
              {
                label: "Vision, Mission & Values",
                href: "/culture",
              },
              { label: "Governance & Accountability", href: "/about" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.05}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/50 hover:bg-white/10 rounded-lg p-6 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <div className="w-2.5 h-2.5 bg-gold-500 rounded-sm" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {item.label}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Latest
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                News &amp; Announcements
              </h2>
              <p className="mt-4 text-sm text-institutional-muted leading-relaxed">
                Official announcements and updates from the People, Talent &amp;
                Culture Directorate.
              </p>
              <Link
                href="/news"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors group"
              >
                View all
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </FadeIn>

            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  date: "5 June 2026",
                  title: "Directorate Website Launched",
                  summary:
                    "The People, Talent & Culture Directorate launches its official website to provide public access to institutional frameworks and updates.",
                },
                {
                  date: "1 June 2026",
                  title: "Capacity Development Framework Under Review",
                  summary:
                    "A comprehensive review of the national capacity development framework for legal education personnel has commenced.",
                },
                {
                  date: "28 May 2026",
                  title: "Stakeholder Consultation on Recruitment Standards",
                  summary:
                    "Stakeholder consultations scheduled to refine merit-based recruitment standards for CLET-regulated institutions.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <article className="group border border-institutional-border border-l-[3px] border-l-gold-500 hover:border-gold-400 rounded-xl p-6 transition-all hover:shadow-md">
                    <time className="text-[11px] text-institutional-muted uppercase tracking-wider font-semibold">
                      {item.date}
                    </time>
                    <h3 className="mt-2 text-base font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-institutional-muted leading-relaxed">
                      {item.summary}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <Image
              src="/images/clet-logo.png"
              alt="Council for Legal Education and Training"
              width="160"
              height="160"
              className="w-16 h-16 object-contain mx-auto mb-6"
            />
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Established under the Ghana Legal Education Reform framework
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-bold text-navy-900">
              Council for Legal Education and Training
            </h2>
            <p className="mt-1 text-sm text-institutional-muted">
              Republic of Ghana
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
