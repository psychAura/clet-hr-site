import type { Metadata } from "next";
import Image from "next/image";
import Reveal, {
  StaggerItem,
  StaggeredList,
} from "@/app/components/Reveal";
import {
  Megaphone,
  Newspaper,
  FileText,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "News & Publications",
  description:
    "Announcements, institutional updates, and the policy documents that shape the Directorate's frameworks.",
};

const announcements = [
  {
    date: "5 June 2026",
    category: "Announcement",
    title: "Directorate Website Launched",
    content:
      "The People, Talent & Culture Directorate has launched its official website to provide public access to institutional frameworks, policy documents, and updates.",
    image: "/images/law-graduate.jpg",
    imageAlt: "Law graduate in formal robes",
    featured: true,
  },
  {
    date: "1 June 2026",
    category: "Policy Review",
    title: "Capacity Development Framework Under Review",
    content:
      "The Directorate has commenced a comprehensive review of the national capacity development framework for legal education personnel.",
    image: "/images/library.jpg",
    imageAlt: "Library shelves with readers",
  },
  {
    date: "28 May 2026",
    category: "Consultation",
    title: "Stakeholder Consultation on Recruitment Standards",
    content:
      "Consultations scheduled to refine merit-based recruitment standards for CLET-regulated institutions.",
    image: "/images/lady-justice-statue.jpg",
    imageAlt: "Statue of Lady Justice",
  },
  {
    date: "15 May 2026",
    category: "Framework",
    title: "Institutional Culture Framework Initiated",
    content:
      "Development of a comprehensive institutional culture framework has begun \u2014 defining values, behavioural standards, and professional expectations.",
    image: "/images/gold-scales.jpg",
    imageAlt: "Gold balance scale",
  },
  {
    date: "1 May 2026",
    category: "Establishment",
    title: "Directorate Established Within CLET Structure",
    content:
      "Formally established within CLET as the principal body responsible for human capital policy.",
    image: "/images/gavel-wood.jpg",
    imageAlt: "Judge's gavel on a wooden table",
  },
];

const documents = [
  {
    title: "People & Talent Development Framework",
    type: "Policy Framework",
    status: "Under Development",
  },
  {
    title: "Recruitment & Selection Standards",
    type: "Regulatory Standard",
    status: "Under Development",
  },
  {
    title: "Institutional Culture & Ethics Code",
    type: "Code of Conduct",
    status: "Under Development",
  },
  {
    title: "Continuing Professional Development Policy",
    type: "Policy Directive",
    status: "Under Development",
  },
  {
    title: "Competency Framework for Legal Education Personnel",
    type: "Technical Framework",
    status: "Under Development",
  },
];

export default function NewsPage() {
  const featured = announcements[0];
  return (
    <>
      <section className="bg-white border-b border-institutional-border">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                News &amp; Publications
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
                Announcements, updates, and the documents we publish.
              </h1>
            </div>
            <div className="flex gap-6 sm:gap-8 shrink-0">
              <div>
                <p className="text-3xl font-heading font-bold text-navy-900 tabular-nums">
                  {announcements.length}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-institutional-muted mt-1">
                  Recent posts
                </p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-navy-900 tabular-nums">
                  {documents.length}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-institutional-muted mt-1">
                  Documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <article className="group relative grid lg:grid-cols-2 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-navy-950/80 lg:bg-gradient-to-l lg:from-navy-950/80 lg:via-transparent lg:to-transparent" />
              </div>
              <div className="relative p-10 sm:p-12 flex flex-col justify-center">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-gold-500 text-navy-900 flex items-center justify-center">
                      <Megaphone className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                      Featured · {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    {featured.content}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-institutional-bg py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-heading font-bold text-navy-900 mb-8">
            Recent announcements
          </h2>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.slice(1).map((item, i) => (
              <StaggerItem key={i}>
                <article className="group h-full flex flex-col bg-white border border-institutional-border border-l-[3px] border-l-gold-500 hover:border-gold-400 rounded-xl overflow-hidden transition-all hover:shadow-md">
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-semibold text-gold-700 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <time className="text-[11px] text-institutional-muted uppercase tracking-wider font-semibold">
                      {item.date}
                    </time>
                    <h3 className="mt-1.5 text-base font-heading font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-institutional-muted leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-institutional-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-xl font-heading font-bold text-navy-900">
              Publications &amp; policy documents
            </h2>
            <span className="text-xs text-institutional-muted">
              Updated monthly
            </span>
          </div>

          <StaggeredList className="space-y-2.5">
            {documents.map((doc, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white border border-institutional-border hover:border-gold-400 rounded-xl p-5 transition-colors flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-institutional-bg text-gold-700 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                    <FileText className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-institutional-muted font-semibold">
                      {doc.type}
                    </p>
                    <h3 className="mt-1 text-sm font-heading font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {doc.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-semibold text-gold-700 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full whitespace-nowrap">
                      {doc.status}
                    </span>
                    <button
                      disabled
                      className="w-9 h-9 rounded-lg bg-institutional-bg border border-institutional-border text-institutional-muted flex items-center justify-center cursor-not-allowed"
                      aria-label="Download (unavailable)"
                    >
                      <Download className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <section className="bg-institutional-bg py-12 border-t border-institutional-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-institutional-border rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-5">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center">
              <Newspaper className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-heading font-bold text-navy-900">
                Media &amp; press enquiries
              </h3>
              <p className="mt-1.5 text-sm text-institutional-muted leading-relaxed">
                Direct all media enquiries to the Communications Office of the
                Council. The Directorate does not issue statements
                independently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
