import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ImageBand from "@/app/components/ImageBand";
import DottedSurface from "@/app/components/DottedSurface";
import Reveal, {
  StaggerItem,
  StaggeredList,
} from "@/app/components/Reveal";
import NumberTicker from "@/app/components/NumberTicker";
import {
  Users,
  Compass,
  ShieldCheck,
  GraduationCap,
  Scale,
  TrendingUp,
  BookOpen,
  Landmark,
  Gavel,
  BookMarked,
} from "lucide-react";
import { KenteBorder } from "@/app/components/CulturalAccents";
import SectionNav from "@/app/components/SectionNav";
import SectionDivider from "@/app/components/SectionDivider";
import {
  Adinkrahene,
  NyameDua,
  Mpatapo,
  Sankofa,
} from "@/app/components/AdinkraSymbols";

export const metadata: Metadata = {
  title: "About the Directorate",
  description:
    "Overview, statutory mandate, and leadership of the People, Talent & Culture Directorate of CLET Ghana.",
};

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Personnel in the System" },
  { icon: BookOpen, value: 2, label: "Functional Units" },
  { icon: ShieldCheck, value: 8, label: "Core Values" },
];

const areas = [
  {
    icon: TrendingUp,
    title: "Human Capital Strategy",
    description:
      "Long-term planning for the staffing needs of legal education institutions, including workforce analytics and succession planning.",
  },
  {
    icon: Scale,
    title: "Professional Standards",
    description:
      "Setting and maintaining the professional standards expected of legal educators, trainers, and support staff.",
  },
  {
    icon: Compass,
    title: "Culture & Values",
    description:
      "Promoting an institutional culture grounded in the principles of justice, integrity, diligence, and public service.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "Designing and coordinating training programmes, workshops, and development initiatives to enhance personnel capabilities.",
  },
];

const mandates = [
  "Develop and implement human capital policies and strategies for the legal education sector",
  "Establish and enforce professional standards for legal educators, trainers, assessors, and administrative personnel",
  "Formulate recruitment and selection frameworks based on merit, competence, and institutional need",
  "Design and coordinate capacity development programmes for personnel within CLET-regulated institutions",
  "Define and promote the institutional culture, values, and ethical standards of legal education in Ghana",
  "Advise the Council on matters relating to human resource management and institutional culture",
  "Monitor and evaluate the implementation of human capital policies across regulated institutions",
  "Develop and maintain competency frameworks for all categories of legal education personnel",
  "Promote fairness, inclusion, and meritocracy in all personnel-related processes",
];

const scope = [
  "The Ghana School of Law and its affiliated programmes",
  "University law faculties and departments offering accredited legal education programmes",
  "Professional legal training institutions regulated by CLET",
  "Continuing legal education providers approved by the Council",
  "Any institution or programme designated by the Council as falling within its regulatory jurisdiction",
];

const partners = [
  "Other directorates of CLET",
  "The General Legal Council",
  "The Judicial Service of Ghana",
  "The Ministry of Education",
  "The Ministry of Justice & Attorney General",
  "Universities & accredited legal institutions",
  "The Public Services Commission",
  "Professional legal bodies & associations",
];

const units = [
  {
    icon: Users,
    unit: "Operational Unit",
    role: "Day-to-day execution of recruitment, training, personnel administration, and the full lifecycle of staff across CLET-regulated institutions.",
  },
  {
    icon: Compass,
    unit: "Strategic Unit",
    role: "Policy formulation, workforce planning, institutional values, ethical frameworks, and long-term direction for human capital across the system.",
  },
];

const governance = [
  "Clear lines of authority and accountability within the organisational hierarchy",
  "Separation of policy formulation from operational implementation",
  "Regular reporting to the Council on the performance and activities of the Directorate",
  "Adherence to the financial management and administrative procedures of the public service",
  "Consultation with relevant stakeholders in the development of policies and frameworks",
  "Periodic review and evaluation of the Directorate's organisational structure and effectiveness",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Directorate"
        title="The Directorate Behind Ghana's Legal Education Workforce."
        subtitle="A national-level body shaping the human capital, professional standards, and culture of every CLET-regulated institution — drawing authority from statute, owing accountability to the public."
        variant="navy-orbs"
      />

      <SectionNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "mandate", label: "Mandate" },
          { id: "coordination", label: "Coordination" },
        ]}
      />

      <SectionDivider
        id="overview"
        eyebrow="01"
        title="Overview"
        description="Who we are, what we do, and the scale of the system we serve."
      />

      <ImageBand
        src="/images/library.jpg"
        alt="Modern institutional workspace"
        caption="A national-level body shaping the people who shape legal education in Ghana."
        height="md"
      />

      <section className="bg-white border-b border-institutional-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-institutional-border">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="py-10 px-6">
                  <stat.icon
                    className="w-6 h-6 text-gold-600 mb-3"
                    strokeWidth={1.5}
                  />
                  <p className="text-4xl sm:text-5xl font-heading font-bold text-navy-900">
                    <NumberTicker
                      value={stat.value}
                      suffix={stat.suffix || ""}
                    />
                  </p>
                  <p className="mt-3 text-sm text-institutional-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                About the Directorate
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900 leading-tight">
                Custodians Of The Human Capital Behind Legal Education In Ghana.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-7 space-y-5">
              <p className="text-institutional-muted leading-relaxed">
                The People, Talent &amp; Culture Directorate is one of the
                principal directorates of the Council for Legal Education and
                Training (CLET), Republic of Ghana. Established under the Ghana
                Legal Education Reform framework, the Directorate is responsible
                for the formulation and implementation of human capital
                policies, institutional culture standards, and professional
                development frameworks across Ghana&apos;s legal education and
                training system.
              </p>
              <p className="text-institutional-muted leading-relaxed">
                The Directorate serves as the custodian of CLET&apos;s
                organisational values and professional standards. It provides
                strategic leadership in matters relating to the recruitment,
                development, welfare, and conduct of personnel within
                CLET-regulated institutions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider
        id="mandate"
        eyebrow="02"
        title="Mandate"
        description="The statutory foundation, the nine responsibilities, and the four domains of work."
      />

      <section className="bg-institutional-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Statutory Foundation
            </p>
            <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900 max-w-2xl">
              Authority Derived From Statute. Accountability Owed To The Public.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="h-full bg-white border border-institutional-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                  <Landmark className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900">
                  Statutory Foundation
                </h3>
                <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                  CLET is established as a statutory body under the Ghana Legal
                  Education Reform framework, with regulatory authority over
                  the standardisation and improvement of legal education.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full bg-white border border-institutional-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                  <Gavel className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900">
                  Regulatory Authority
                </h3>
                <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                  The Council exercises regulatory, supervisory, and advisory
                  functions in relation to the quality and standards of legal
                  education across the Republic.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full bg-white border border-institutional-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                  <BookMarked className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900">
                  Operational Independence
                </h3>
                <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                  CLET operates with the autonomy required to fulfil its
                  statutory obligations, free from improper political or
                  partisan interference.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <KenteBorder position="both" />
        <div
          className="absolute top-16 right-16 pointer-events-none"
          aria-hidden="true"
        >
          <Mpatapo className="w-28 h-28 opacity-[0.05]" />
        </div>
        <div
          className="absolute bottom-16 left-12 pointer-events-none"
          aria-hidden="true"
        >
          <Sankofa className="w-24 h-24 opacity-[0.04]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,46,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Mandate of the Directorate
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-white max-w-2xl">
              Nine Specific Responsibilities Granted To The Directorate.
            </h2>
          </Reveal>

          <StaggeredList className="mt-14 space-y-3 max-w-4xl">
            {mandates.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group flex items-start gap-6 py-5 border-b border-white/10 hover:border-gold-500/40 transition-colors">
                  <span className="text-3xl font-heading font-bold text-gold-500/40 group-hover:text-gold-400 transition-colors shrink-0 w-12 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-white/70 leading-relaxed pt-1.5 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Key Functional Areas
            </p>
            <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900 max-w-2xl">
              Four Interconnected Domains Of Work.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-institutional-border border border-institutional-border rounded-2xl overflow-hidden">
            {areas.map((area, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group bg-white p-8 h-full hover:bg-gold-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    <area.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Functional Units
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900 max-w-2xl">
              Two Units. One Mandate.
            </h2>
          </Reveal>

          <StaggeredList className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {units.map((u, i) => (
              <StaggerItem key={i}>
                <div className="group h-full bg-white border border-institutional-border hover:border-gold-400 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                      <u.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-institutional-muted font-semibold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy-900">
                    {u.unit}
                  </h3>
                  <p className="mt-4 text-base text-institutional-muted leading-relaxed">
                    {u.role}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <SectionDivider
        id="coordination"
        eyebrow="03"
        title="Coordination"
        description="Who we regulate, who we work with, and how we govern ourselves."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Regulatory Scope
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                Institutions Within Our Jurisdiction
              </h2>
              <ul className="mt-8 space-y-4">
                {scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    </div>
                    <span className="text-sm text-institutional-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Coordination
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                Bodies We Work With
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {partners.map((item, i) => (
                  <div
                    key={i}
                    className="border border-institutional-border rounded-lg p-4 hover:border-gold-400 hover:bg-gold-50/40 transition-colors"
                  >
                    <span className="text-sm text-navy-800 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Governance Principles
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900 leading-tight">
                How We Govern Ourselves.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <StaggeredList className="space-y-3">
                {governance.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4 py-4 border-b border-institutional-border last:border-0">
                      <div className="shrink-0 w-1.5 h-1.5 bg-gold-500 rounded-full mt-2.5" />
                      <p className="text-sm text-institutional-muted leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggeredList>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <KenteBorder position="both" />
        <div
          className="absolute top-10 right-10 pointer-events-none"
          aria-hidden="true"
        >
          <Adinkrahene className="w-28 h-28 opacity-[0.05]" />
        </div>
        <div
          className="absolute bottom-10 left-14 pointer-events-none"
          aria-hidden="true"
        >
          <NyameDua className="w-24 h-24 opacity-[0.04]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Institutional Context
            </p>
            <p className="mt-6 text-xl sm:text-2xl font-heading text-white leading-relaxed">
              The Directorate works in coordination with other CLET
              directorates, relevant ministries, the General Legal Council, the
              Judicial Service, universities, and other stakeholders in the
              legal education ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gold-50 border-y border-gold-200/60 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-sm text-navy-800 leading-relaxed text-center">
              <span className="font-semibold">Note —</span> Individual
              leadership appointments and biographical details will be published
              on this page as positions are filled through the Council&apos;s
              established appointment processes.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
