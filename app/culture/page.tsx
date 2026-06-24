import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ImageBand from "@/app/components/ImageBand";
import DisplayCards from "@/app/components/DisplayCards";
import Reveal, {
  StaggerItem,
  StaggeredList,
} from "@/app/components/Reveal";
import {
  ShieldCheck,
  Award,
  Sparkles,
  HandHeart,
  ClipboardCheck,
  Scale,
  Target,
  Users,
  Lock,
  HeartHandshake,
  Wallet,
  CheckCircle2,
  TrendingUp,
  Building2,
  LineChart,
} from "lucide-react";
import { KenteBorder } from "@/app/components/CulturalAccents";
import SectionNav from "@/app/components/SectionNav";
import SectionDivider from "@/app/components/SectionDivider";
import { PhotoGallery } from "@/app/components/PhotoGallery";
import {
  Epa,
  GyeNyame,
  Nkyinkyim,
  Adinkrahene,
  AkomaNtoso,
} from "@/app/components/AdinkraSymbols";

export const metadata: Metadata = {
  title: "Culture, Talent & Values",
  description:
    "The vision, mission, core values, talent framework, and ethical standards that shape the Directorate.",
};

const values = [
  {
    icon: ShieldCheck,
    value: "Integrity",
    description:
      "Highest standards of honesty, transparency, and ethical conduct in all aspects of human capital management.",
  },
  {
    icon: Award,
    value: "Merit",
    description:
      "Personnel decisions based on demonstrated competence, qualifications, and performance — never patronage.",
  },
  {
    icon: Sparkles,
    value: "Excellence",
    description:
      "Continuous improvement of professional standards in teaching, assessment, administration, and conduct.",
  },
  {
    icon: HandHeart,
    value: "Service",
    description:
      "Legal education is a public trust. We promote a culture of service over self-interest.",
  },
  {
    icon: ClipboardCheck,
    value: "Accountability",
    description:
      "Clear expectations, monitored compliance, and effective accountability mechanisms applied fairly.",
  },
  {
    icon: Scale,
    value: "Fairness",
    description:
      "Equity, non-discrimination, and due process in all interactions with personnel.",
  },
  {
    icon: Target,
    value: "Discipline",
    description:
      "Adherence to professional standards, institutional rules, and the ethical obligations of legal education.",
  },
  {
    icon: Users,
    value: "Collaboration",
    description:
      "Effective partnerships between educators, administrators, regulators, and the legal profession.",
  },
];

const standards = [
  {
    icon: ShieldCheck,
    standard: "Professional Integrity",
    description:
      "Personnel shall conduct themselves with honesty and integrity in all professional activities.",
  },
  {
    icon: Scale,
    standard: "Impartiality",
    description:
      "Decisions made on the basis of objective criteria, free from bias, favouritism, or improper influence.",
  },
  {
    icon: Lock,
    standard: "Confidentiality",
    description:
      "Respect the confidentiality of institutional information, student records, and personnel matters.",
  },
  {
    icon: HeartHandshake,
    standard: "Respect for Persons",
    description:
      "All interactions characterised by mutual respect, courtesy, and regard for human dignity.",
  },
  {
    icon: Wallet,
    standard: "Stewardship",
    description:
      "Responsible stewardship of institutional resources — financial, material, and intellectual.",
  },
  {
    icon: CheckCircle2,
    standard: "Compliance",
    description:
      "Compliance with all applicable laws, regulations, policies, and directives.",
  },
];

const conduct = [
  "Punctuality, diligence, and commitment to assigned responsibilities",
  "Adherence to established academic and administrative procedures",
  "Constructive engagement with colleagues, students, and institutional leadership",
  "Avoidance of conduct that could bring the institution or legal education system into disrepute",
  "Commitment to continuous professional self-improvement and learning",
  "Prompt and transparent reporting of conflicts of interest",
  "Participation in institutional governance processes as required",
];

const talentObjectives = [
  {
    icon: Target,
    objective: "Workforce Quality Assurance",
    detail:
      "Establish and maintain minimum qualification and competency standards across all institutions.",
  },
  {
    icon: TrendingUp,
    objective: "Talent Pipeline Development",
    detail:
      "Create structured pathways for the identification and development of future legal educators.",
  },
  {
    icon: Sparkles,
    objective: "Professional Growth",
    detail:
      "Systematic opportunities for continuous professional development throughout careers.",
  },
  {
    icon: Building2,
    objective: "Institutional Capacity",
    detail:
      "Strengthen the organisational capacity of legal education institutions through improved HR practices.",
  },
  {
    icon: LineChart,
    objective: "Performance Management",
    detail:
      "Transparent and equitable performance assessment mechanisms that promote accountability.",
  },
];

const commitments = [
  "To ensure that the human capital of Ghana's legal education system reflects the diversity and aspirations of the nation",
  "To maintain personnel standards that command the confidence of the legal profession, the judiciary, and the public",
  "To foster a working environment within CLET-regulated institutions that attracts, retains, and develops qualified professionals",
  "To align all human capital policies with the broader objectives of the Ghana Legal Education Reform programme",
  "To operate with the transparency and accountability expected of a statutory body of the Republic of Ghana",
];

export default function CulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Culture · Talent · Values"
        title="What we stand for, and who we develop."
        subtitle="A culture grounded in integrity, a framework that builds talent, and a set of values that hold us accountable to the public we serve."
        variant="dotted-cream"
      />

      <SectionNav
        items={[
          { id: "vision", label: "Vision & Mission" },
          { id: "values", label: "Core Values" },
          { id: "ethics", label: "Ethics & Conduct" },
          { id: "talent", label: "Talent Framework" },
        ]}
      />

      <SectionDivider
        id="vision"
        eyebrow="01"
        title="Vision & Mission"
        description="What we aspire to, what we are tasked with, and the three principles we lead with."
      />

      <ImageBand
        src="/images/gold-scales.jpg"
        alt="Small gold balance scale resting on wood"
        caption="Character, capability, and conduct — woven into how every CLET-regulated institution works."
        height="md"
      />

      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <KenteBorder position="top" />
        <div
          className="absolute top-12 right-12 pointer-events-none"
          aria-hidden="true"
        >
          <GyeNyame className="w-28 h-28 opacity-[0.05]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-6">
              Our Vision
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-relaxed">
              A legal education system in Ghana distinguished by the{" "}
              <span className="text-gold-400">competence</span>,{" "}
              <span className="text-gold-400">integrity</span>, and{" "}
              <span className="text-gold-400">professionalism</span> of its
              people, sustained by a culture of excellence and public service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-institutional-border" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold">
                Our Mission
              </p>
              <div className="h-px flex-1 bg-institutional-border" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl sm:text-2xl font-heading text-navy-900 leading-relaxed text-center">
              To develop, implement, and safeguard the human capital policies,
              professional standards, and institutional culture frameworks that
              ensure Ghana&apos;s legal education and training system is
              administered by qualified, ethical, and dedicated personnel
              committed to the advancement of justice and the rule of law.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-28 relative overflow-hidden">
        <KenteBorder position="both" />
        <div
          className="absolute bottom-12 left-10 pointer-events-none"
          aria-hidden="true"
        >
          <Nkyinkyim className="w-24 h-24 opacity-[0.04]" />
        </div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold-500/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-navy-700/40 blur-[140px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
              Three Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              The principles we lead with.
            </h2>
            <p className="mt-6 text-base text-white/70 leading-relaxed max-w-md">
              Every framework, every appointment, and every standard the
              Directorate sets traces back to three commitments. Hover the stack
              to reveal them.
            </p>
          </Reveal>
          <div className="lg:col-span-7 flex justify-center lg:justify-start py-16">
            <DisplayCards
              cards={[
                {
                  icon: <ShieldCheck className="size-4 text-gold-300" />,
                  title: "Integrity",
                  description: "Honesty without exception.",
                  date: "Principle 01",
                  className:
                    "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Award className="size-4 text-gold-300" />,
                  title: "Merit",
                  description: "Competence over patronage.",
                  date: "Principle 02",
                  className:
                    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Sparkles className="size-4 text-gold-300" />,
                  title: "Excellence",
                  description: "Continuous, measurable improvement.",
                  date: "Principle 03",
                  className:
                    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <SectionDivider
        id="values"
        eyebrow="02"
        title="Core Values"
        description="Eight values that define our institutional character — from integrity to collaboration."
      />

      <section className="bg-institutional-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Our Core Values
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900">
                Eight values. One institutional character.
              </h2>
            </div>
          </Reveal>

          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group h-full bg-white border border-institutional-border hover:border-gold-400 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy-900">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <SectionDivider
        id="ethics"
        eyebrow="03"
        title="Ethics & Conduct"
        description="The culture statement, the six ethical standards, and what we expect in everyday professional life."
      />

      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <KenteBorder position="both" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,46,0.08),transparent_70%)]" />
        <div
          className="absolute top-12 right-12 pointer-events-none"
          aria-hidden="true"
        >
          <Epa className="w-32 h-32 opacity-[0.05]" />
        </div>
        <div
          className="absolute bottom-12 left-12 pointer-events-none"
          aria-hidden="true"
        >
          <GyeNyame className="w-28 h-28 opacity-[0.04]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-8">
              Culture Statement
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-relaxed">
              The culture of Ghana&apos;s legal education system shall reflect
              the <span className="text-gold-400">gravity</span> of the legal
              profession, the <span className="text-gold-400">dignity</span> of
              public service, and the{" "}
              <span className="text-gold-400">aspirations</span> of a nation
              committed to justice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Ethical Standards
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900 max-w-2xl">
              Six standards binding on all personnel.
            </h2>
            <p className="mt-4 text-institutional-muted max-w-2xl">
              These standards apply to every individual working within a
              CLET-regulated institution, without exception.
            </p>
          </Reveal>

          <StaggeredList className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {standards.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group relative h-full bg-white border border-institutional-border border-l-[3px] border-l-gold-500 hover:border-gold-400 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-md overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/15 transition-colors" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 flex items-center justify-center">
                        <s.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-institutional-muted font-semibold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy-900">
                      {s.standard}
                    </h3>
                    <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      <section className="bg-gold-50 py-24 border-y border-gold-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-700 font-semibold">
                Conduct Expectations
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900 leading-tight">
                What we expect in everyday professional life.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <StaggeredList className="space-y-px bg-gold-200/40 rounded-2xl overflow-hidden">
                {conduct.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="group bg-white p-5 flex items-start gap-4 hover:bg-gold-50 transition-colors">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-xs font-bold tabular-nums">
                        {i + 1}
                      </div>
                      <p className="text-sm text-navy-800 leading-relaxed pt-0.5">
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

      <SectionDivider
        id="talent"
        eyebrow="04"
        title="Talent Framework"
        description="Strategic objectives and the commitments that guide how we develop people across the system."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
              Talent Framework · Strategic Objectives
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-navy-900 max-w-2xl">
              Five objectives. One coherent talent strategy.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {talentObjectives.map((item, i) => {
              const spans = [
                "lg:col-span-7 lg:row-span-2",
                "lg:col-span-5",
                "lg:col-span-5",
                "lg:col-span-6",
                "lg:col-span-6",
              ];
              const isLarge = i === 0;
              return (
                <Reveal key={i} delay={i * 0.08} className={spans[i]}>
                  <div
                    className={`group h-full bg-gradient-to-br ${
                      isLarge
                        ? "from-navy-900 to-navy-950 text-white"
                        : "from-white to-institutional-bg border border-institutional-border"
                    } rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden`}
                  >
                    {isLarge && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
                    )}
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                          isLarge
                            ? "bg-gold-500 text-navy-900"
                            : "bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900"
                        } transition-colors`}
                      >
                        <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <h3
                        className={`font-heading font-bold ${
                          isLarge ? "text-2xl" : "text-lg text-navy-900"
                        }`}
                      >
                        {item.objective}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed ${
                          isLarge
                            ? "text-base text-white/60 max-w-md"
                            : "text-sm text-institutional-muted"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <KenteBorder position="both" />
        <div
          className="absolute top-12 right-12 pointer-events-none"
          aria-hidden="true"
        >
          <Adinkrahene className="w-28 h-28 opacity-[0.05]" />
        </div>
        <div
          className="absolute bottom-12 left-10 pointer-events-none"
          aria-hidden="true"
        >
          <AkomaNtoso className="w-24 h-24 opacity-[0.04]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,168,46,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Guiding Commitments
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-white leading-tight">
                Five promises that guide our pursuit.
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              <StaggeredList className="space-y-px">
                {commitments.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="group flex items-start gap-5 py-5 border-b border-white/10 hover:border-gold-500/40 transition-colors">
                      <span className="text-xs font-bold text-gold-500/60 tabular-nums shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base text-white/60 leading-relaxed group-hover:text-white transition-colors">
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

      <section className="bg-institutional-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <PhotoGallery />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Enforcement
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                Standards upheld through process.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-institutional-bg border border-institutional-border rounded-2xl p-8 sm:p-12">
              <p className="text-institutional-muted leading-relaxed">
                The Directorate is responsible for ensuring that the ethical
                standards and cultural expectations set forth in this statement
                are upheld across all CLET-regulated institutions. Enforcement
                mechanisms include periodic reviews, institutional audits,
                grievance procedures, and disciplinary processes conducted in
                accordance with the principles of natural justice and due
                process.
              </p>
              <p className="mt-5 text-institutional-muted leading-relaxed">
                Violations of ethical standards shall be addressed through
                established disciplinary procedures, with sanctions
                proportionate to the gravity of the offence and consistent with
                applicable regulations governing public service conduct.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
