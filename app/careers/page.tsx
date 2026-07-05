import type { Metadata } from "next";
import Link from "next/link";
import Reveal, {
  StaggerItem,
  StaggeredList,
} from "@/app/components/Reveal";
import {
  Award,
  Eye,
  Scale,
  Ban,
  Sparkles,
  GraduationCap,
  Briefcase,
  Crown,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Inbox,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open positions and how the People, Talent & Culture Directorate hires and develops people.",
};

const openings = [
  {
    title: "Senior Legal Educator",
    department: "Faculty of Law · Ghana School of Law",
    location: "Accra",
    type: "Full-time · Permanent",
    status: "Open" as const,
    closes: "Closes 30 Jun 2026",
  },
  {
    title: "Programme Officer, Continuing Professional Development",
    department: "Training & Professional Development Unit",
    location: "Accra",
    type: "Full-time · 3-year contract",
    status: "Open" as const,
    closes: "Closes 12 Jul 2026",
  },
  {
    title: "Curriculum Development Specialist",
    department: "Office of the Director",
    location: "Accra · Hybrid",
    type: "Full-time · Permanent",
    status: "Open" as const,
    closes: "Closes 25 Jul 2026",
  },
  {
    title: "Monitoring & Evaluation Analyst",
    department: "Monitoring & Evaluation Unit",
    location: "Accra",
    type: "Full-time · Permanent",
    status: "Coming soon" as const,
    closes: "Posting soon",
  },
];

const principles = [
  {
    icon: Award,
    title: "Merit only",
    detail: "Qualifications, competence, demonstrated ability.",
  },
  {
    icon: Eye,
    title: "Transparent",
    detail: "Open criteria, documented decisions, accessible to scrutiny.",
  },
  {
    icon: Scale,
    title: "Due process",
    detail: "Review and appeal mechanisms in every appointment.",
  },
  {
    icon: Ban,
    title: "No patronage",
    detail: "No political interference. No personal connections.",
  },
];

const tiers = [
  {
    icon: Sparkles,
    title: "Induction",
    detail: "Structured orientation to institution, regulation, and procedure.",
  },
  {
    icon: GraduationCap,
    title: "CPD",
    detail: "Minimum continuing professional development for every role.",
  },
  {
    icon: Briefcase,
    title: "Specialised",
    detail: "Targeted skills — pedagogy, assessment, legal research, edtech.",
  },
  {
    icon: Crown,
    title: "Leadership",
    detail: "Management, governance, and institutional leadership pathways.",
  },
];

export default function CareersPage() {
  const openCount = openings.filter((o) => o.status === "Open").length;
  return (
    <>
      <section className="bg-white border-b border-institutional-border">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Careers
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Work in Ghana&apos;s legal education system.
              </h1>
              <p className="mt-4 text-base text-institutional-muted leading-relaxed">
                Open positions across teaching, programme delivery, policy, and
                evaluation. Merit-based hiring, structured development.
              </p>
            </div>
            <div className="flex gap-6 sm:gap-8 shrink-0">
              <div>
                <p className="text-3xl font-heading font-bold text-navy-900 tabular-nums">
                  {openCount}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-institutional-muted mt-1">
                  Open now
                </p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-navy-900 tabular-nums">
                  {openings.length - openCount}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-institutional-muted mt-1">
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-xl font-heading font-bold text-navy-900">
              Open positions
            </h2>
            <Link
              href="/contact"
              className="text-xs font-semibold text-gold-700 hover:text-gold-800 inline-flex items-center gap-1.5"
            >
              Register interest in future roles
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <StaggeredList className="space-y-3">
            {openings.map((job, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white border border-institutional-border border-l-[3px] border-l-gold-500 hover:border-gold-400 rounded-xl p-6 transition-all hover:shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider ${
                            job.status === "Open"
                              ? "text-gold-700"
                              : "text-institutional-muted"
                          }`}
                        >
                          {job.status}
                        </span>
                        <span className="text-institutional-muted">·</span>
                        <span className="text-[11px] text-institutional-muted">
                          {job.closes}
                        </span>
                      </div>
                      <h3 className="text-base font-heading font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-institutional-muted">
                        {job.department}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-institutional-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {job.status === "Open" ? (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                          Apply
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 bg-white text-institutional-muted text-sm font-semibold px-5 py-2.5 rounded-lg border border-institutional-border">
                          Notify me
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-institutional-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                How we hire
              </p>
              <h2 className="mt-3 text-2xl font-heading font-bold text-navy-900">
                Four rules. No exceptions.
              </h2>
              <ul className="mt-8 space-y-4">
                {principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center">
                      <p.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-navy-900">
                        {p.title}
                      </p>
                      <p className="mt-0.5 text-sm text-institutional-muted leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-institutional-muted">
                Read the full recruitment philosophy on{" "}
                <Link
                  href="/culture"
                  className="text-gold-700 hover:text-gold-800 font-semibold"
                >
                  Culture &amp; Values
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                How we grow you
              </p>
              <h2 className="mt-3 text-2xl font-heading font-bold text-navy-900">
                Four Tiers Of Structured Development.
              </h2>
              <ul className="mt-8 space-y-4">
                {tiers.map((t, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center">
                      <t.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-navy-900">
                        {t.title}
                      </p>
                      <p className="mt-0.5 text-sm text-institutional-muted leading-relaxed">
                        {t.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Don&apos;t see your role?
              </p>
              <h2 className="mt-3 text-2xl font-heading font-bold text-white">
                Tell Us What You Bring.
              </h2>
              <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xl">
                Qualified professionals may register interest in future
                openings. New positions are posted here as workforce plans are
                approved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={2} />
                Contact us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Inbox className="w-4 h-4" strokeWidth={1.5} />
                Register interest
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
