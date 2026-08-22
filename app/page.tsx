import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import AnimatedText from "@/app/components/AnimatedText";
import VideoBackground from "@/app/components/VideoBackground";
import ImageBand from "@/app/components/ImageBand";
import { Adinkrahene, AkomaNtoaso, Epa, Hwemudua, MmaraKrado, Nyansapo, OkodeeMmowere, Sepow, KenteStrip } from "@/app/components/AdinkraSymbols";
import { BriefcaseBusiness, ChartNoAxesCombined, Mail, MapPin, Phone, Clock, ShieldCheck, Award, Sparkles, HandHeart, ClipboardCheck, Scale, Target, Users, TrendingUp, GraduationCap } from "lucide-react";

export default function Home() {
  const units = [
    { Icon: BriefcaseBusiness, title: "Operations Unit", body: "Coordinates day-to-day people services, workforce support, staff administration, recruitment, onboarding and professional development." },
    { Icon: ChartNoAxesCombined, title: "Strategy Unit", body: "Guides workforce planning, organisational development, policy, performance improvement and initiatives that strengthen institutional culture." },
  ];
  const contacts = [
    { Icon: MapPin, label: "Address", value: "P.O. Box 179, Makola, Accra" },
    { Icon: Phone, label: "PTC Landline", value: "030 804 8091", href: "tel:0308048091" },
    { Icon: Clock, label: "Working Hours", value: "Monday–Friday, 8:00 am–4:00 pm" },
    { Icon: Mail, label: "Directorate", value: "People, Talent & Culture" },
  ];
  const values = [
    { Icon: ShieldCheck, title: "Integrity", body: "Honesty, transparency and ethical conduct in our work." },
    { Icon: Award, title: "Merit", body: "Decisions grounded in competence, qualifications and performance." },
    { Icon: Sparkles, title: "Excellence", body: "Continuous improvement in teaching, administration and service." },
    { Icon: HandHeart, title: "Service", body: "A commitment to legal education as a public trust." },
    { Icon: ClipboardCheck, title: "Accountability", body: "Clear expectations, responsible action and fair oversight." },
    { Icon: Scale, title: "Fairness", body: "Equity, non-discrimination and due process for all." },
    { Icon: Target, title: "Discipline", body: "Respect for professional standards and institutional rules." },
    { Icon: Users, title: "Collaboration", body: "Strong partnerships across legal education and the profession." },
  ];
  const responsibilities = [
    { Icon: TrendingUp, title: "Human Capital Strategy", body: "Planning for workforce needs, capability and succession across the institution." },
    { Icon: BriefcaseBusiness, title: "Talent Management", body: "Supporting recruitment, onboarding, performance and the staff experience." },
    { Icon: GraduationCap, title: "Capacity Building", body: "Coordinating learning and development that strengthens staff capability." },
    { Icon: Scale, title: "Culture & Professional Practice", body: "Fostering an ethical, fair and service-focused workplace culture." },
  ];
  const adinkra = [
    { Icon: Adinkrahene, name: "Adinkrahene", meaning: "Greatness & Leadership" },
    { Icon: MmaraKrado, name: "Mmara Krado", meaning: "Law & Authority" },
    { Icon: Epa, name: "Epa", meaning: "Law & Justice" },
    { Icon: Sepow, name: "Sepow", meaning: "Judicial Authority" },
    { Icon: AkomaNtoaso, name: "Akoma Ntoaso", meaning: "Understanding & Agreement" },
    { Icon: Hwemudua, name: "Hwemudua", meaning: "Standards & Excellence" },
    { Icon: Nyansapo, name: "Nyansapo", meaning: "Wisdom & Ingenuity" },
    { Icon: OkodeeMmowere, name: "Okodee Mmowere", meaning: "Strength & Bravery" },
  ];

  return (
    <>
      <section id="home" className="relative min-h-[78vh] flex items-center overflow-hidden bg-navy-950">
        <Image src="/images/GSL.png" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <VideoBackground src="/videos/hero.mp4" poster="/images/GSL.png" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/55" />
        <div className="relative max-w-7xl mx-auto w-full px-6 py-28 sm:py-36">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold">People, Talent &amp; Culture Directorate</p>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] tracking-tight">
              Shaping the<br />
              <span className="text-gold-400 inline-flex"><AnimatedText words={["Talent", "Culture"]} interval={2500} /></span>{" "}of the<br />
              Workforce of Legal Education in Ghana.
            </h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed">Supporting the people who advance quality, integrity and excellence across Ghana&apos;s legal education system.</p>
            <a href="#about" className="mt-9 inline-flex bg-gold-500 text-navy-950 px-7 py-3.5 font-semibold hover:bg-gold-400 transition-colors">Discover our work</a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <FadeIn><p className="eyebrow">About the Directorate</p><h2 className="section-title">People at the heart of legal education.</h2></FadeIn>
          <FadeIn delay={0.1}><div className="space-y-5 text-lg text-institutional-muted leading-relaxed"><p>The People, Talent &amp; Culture Directorate supports the Council for Legal Education and Training by developing a capable workforce and a healthy institutional culture.</p><p>Our work brings people operations and long-term workforce strategy together, helping staff contribute effectively to the delivery of legal education in Ghana.</p></div></FadeIn>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-28 bg-institutional-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left"><div className="relative aspect-[4/5] max-w-lg overflow-hidden rounded-2xl shadow-xl"><Image src="/images/law-graduate.jpg" alt="Directorate Head" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-top" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/75 to-transparent" /></div></FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow">Leadership</p><h2 className="section-title">A welcome from the Directorate Head</h2>
            <div className="mt-7 text-lg text-institutional-muted leading-relaxed space-y-5"><p>Welcome to the People, Talent &amp; Culture Directorate. Our people are central to the strength and future of legal education in Ghana.</p><p>We are committed to creating a supportive, professional environment where talent is developed, collaboration is encouraged and every member of staff can contribute meaningfully to our shared work.</p></div>
            <div className="mt-10 max-w-sm pt-5 border-t border-navy-900/20"><p className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold">With warm regards</p><p className="mt-4 font-heading text-xl font-bold text-navy-900">Directorate Head</p><p className="mt-1 text-sm text-institutional-muted">People, Talent &amp; Culture Directorate</p><p className="mt-3 text-xs uppercase tracking-wider text-navy-700">Council for Legal Education and Training</p></div>
          </FadeIn>
        </div>
      </section>

      <section id="work" className="scroll-mt-28 bg-navy-950 py-20 sm:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">What We Do</p><h2 className="mt-4 text-3xl sm:text-5xl font-heading font-bold max-w-3xl">Supporting people throughout their working journey.</h2></FadeIn>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{responsibilities.map(({ Icon, title, body }, index) => <FadeIn key={title} delay={index * 0.08}><article className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-7"><Icon className="w-7 h-7 text-gold-400" strokeWidth={1.5} /><h3 className="mt-6 text-xl font-heading font-bold">{title}</h3><p className="mt-3 text-sm text-white/60 leading-relaxed">{body}</p></article></FadeIn>)}</div>
        </div>
      </section>

      <section id="units" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="eyebrow">Our Units</p><h2 className="section-title max-w-2xl">Two connected areas of work.</h2></FadeIn>
          <div className="mt-12 grid md:grid-cols-2 gap-6">{units.map(({ Icon, title, body }, index) => <FadeIn key={title} delay={index * 0.1}><article className="h-full rounded-2xl border border-institutional-border p-8 sm:p-10 hover:border-gold-400 hover:shadow-lg transition-all"><div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center"><Icon className="w-7 h-7" strokeWidth={1.5} /></div><h3 className="mt-7 text-2xl font-heading font-bold text-navy-900">{title}</h3><p className="mt-4 text-institutional-muted leading-relaxed">{body}</p></article></FadeIn>)}</div>
        </div>
      </section>

      <section className="bg-gold-50 py-16 sm:py-20 border-y border-gold-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><div className="text-center max-w-3xl mx-auto"><p className="eyebrow">Symbols of Our Foundation</p><h2 className="section-title">Ghanaian wisdom in our work.</h2><p className="mt-4 text-institutional-muted leading-relaxed">Adinkra symbols connect the Directorate&apos;s work to enduring ideas of leadership, justice, wisdom and shared responsibility.</p></div></FadeIn>
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-7 sm:gap-5">{adinkra.map(({ Icon, name, meaning }, index) => <FadeIn key={name} delay={index * 0.04}><div className="text-center min-w-0"><div className="aspect-square rounded-xl bg-white border border-gold-100 flex items-center justify-center p-4 sm:p-5"><Icon className="w-full h-full object-contain" /></div><h3 className="mt-3 text-xs sm:text-sm font-heading font-bold text-navy-900 break-words">{name}</h3><p className="mt-1 text-[11px] sm:text-xs leading-snug text-institutional-muted">{meaning}</p></div></FadeIn>)}</div>
        </div>
        <KenteStrip className="w-full h-2 mt-16" />
      </section>

      <ImageBand src="/images/library.jpg" alt="A legal education library" caption="A culture of learning, service and professional excellence." height="md" />

      <section id="culture" className="scroll-mt-28 bg-institutional-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="eyebrow">Our Culture &amp; Values</p><h2 className="section-title max-w-3xl">The qualities that guide how we work.</h2><p className="mt-5 text-lg text-institutional-muted max-w-3xl leading-relaxed">These shared values shape our decisions, relationships and service to Ghana&apos;s legal education system.</p></FadeIn>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{values.map(({ Icon, title, body }, index) => <FadeIn key={title} delay={index * 0.05}><article className="h-full bg-white border border-institutional-border rounded-xl p-7"><Icon className="w-6 h-6 text-gold-600" strokeWidth={1.6} /><h3 className="mt-5 text-xl font-heading font-bold text-navy-900">{title}</h3><p className="mt-3 text-sm text-institutional-muted leading-relaxed">{body}</p></article></FadeIn>)}</div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left"><div className="relative aspect-[4/3] rounded-2xl overflow-hidden"><Image src="/images/gold-scales.jpg" alt="Scales of justice" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" /></div></FadeIn>
          <FadeIn delay={0.1}><p className="eyebrow">Talent &amp; Development</p><h2 className="section-title">Growing capability for lasting impact.</h2><p className="mt-6 text-lg text-institutional-muted leading-relaxed">We support fair recruitment, thoughtful onboarding, continuous professional development and opportunities for staff to grow. By investing in capability, we strengthen the people and institutions responsible for legal education.</p><a href="#contact" className="mt-8 inline-flex border border-navy-900 text-navy-900 px-6 py-3 font-semibold hover:bg-navy-900 hover:text-white transition-colors">Contact the Directorate</a></FadeIn>
        </div>
      </section>

      <section id="events" className="scroll-mt-28 bg-navy-950 py-20 sm:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">Directorate Events</p><h2 className="mt-4 text-3xl sm:text-5xl font-heading font-bold">Learning, connection and shared progress.</h2><p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">Highlights from staff development, stakeholder engagement and institutional activities.</p></FadeIn>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { image: "/images/library.jpg", title: "Professional Development Workshop", type: "Staff Learning", body: "A practical learning session focused on strengthening capability across the workforce." },
              { image: "/images/law-graduate.jpg", title: "Talent & Leadership Forum", type: "Leadership", body: "Colleagues exchange ideas on leadership, talent development and institutional culture." },
              { image: "/images/GSL.png", title: "Directorate Stakeholder Session", type: "Engagement", body: "A collaborative session supporting stronger relationships across legal education." },
            ].map((event, index) => <FadeIn key={event.title} delay={index * 0.08}><article className="group h-full overflow-hidden rounded-2xl bg-white text-navy-900"><div className="relative aspect-[4/3] overflow-hidden"><Image src={event.image} alt="Placeholder for directorate event" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">Photo placeholder</span></div><div className="p-6"><p className="text-xs uppercase tracking-[0.18em] text-gold-700 font-semibold">{event.type}</p><h3 className="mt-3 text-xl font-heading font-bold">{event.title}</h3><p className="mt-3 text-sm text-institutional-muted leading-relaxed">{event.body}</p></div></article></FadeIn>)}
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-20 sm:py-24 border-t border-institutional-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="eyebrow">News &amp; Announcements</p><h2 className="section-title">From the Directorate.</h2></FadeIn>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { date: "5 June 2026", title: "Directorate Website Launched", body: "The Directorate opens a central point for information on its work and institutional updates." },
              { date: "1 June 2026", title: "Capacity Development Framework", body: "Work continues on a coordinated framework for the professional development of personnel." },
              { date: "28 May 2026", title: "Recruitment Standards Consultation", body: "Stakeholder engagement supports clear and merit-based recruitment practice." },
            ].map((item, index) => <FadeIn key={item.title} delay={index * 0.08}><article className="h-full bg-white rounded-xl border border-institutional-border p-7 hover:shadow-md transition-shadow"><time className="text-xs uppercase tracking-wider text-institutional-muted">{item.date}</time><h3 className="mt-3 text-xl font-heading font-bold text-navy-900">{item.title}</h3><p className="mt-3 text-sm text-institutional-muted leading-relaxed">{item.body}</p></article></FadeIn>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6"><FadeIn><Image src="/images/clet-logo.png" alt="Council for Legal Education and Training" width={160} height={160} className="w-20 h-20 object-contain mx-auto" /><p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">Republic of Ghana</p><h2 className="mt-3 text-2xl sm:text-3xl font-heading font-bold text-navy-900">Council for Legal Education and Training</h2></FadeIn></div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-navy-900 py-20 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn><p className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">Contact Us</p><h2 className="mt-4 text-3xl sm:text-5xl font-heading font-bold">We&apos;re here to help.</h2><p className="mt-5 text-white/60 text-lg max-w-lg">Reach the People, Talent &amp; Culture Directorate during our official working hours.</p></FadeIn>
          <FadeIn delay={0.1}><div className="grid sm:grid-cols-2 gap-4">{contacts.map(({ Icon, label, value, href }) => <div key={label} className="border border-white/10 rounded-xl p-6 bg-white/[0.04]"><Icon className="w-5 h-5 text-gold-400" /><p className="mt-4 text-xs uppercase tracking-widest text-white/40">{label}</p>{href ? <a href={href} className="mt-1 block font-semibold hover:text-gold-400">{value}</a> : <p className="mt-1 font-semibold">{value}</p>}</div>)}</div></FadeIn>
        </div>
      </section>
    </>
  );
}
