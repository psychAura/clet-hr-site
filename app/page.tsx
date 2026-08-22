import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";
import { BriefcaseBusiness, ChartNoAxesCombined, Mail, MapPin, Phone, Clock } from "lucide-react";

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

  return (
    <>
      <section id="home" className="relative min-h-[78vh] flex items-center overflow-hidden bg-navy-950">
        <Image src="/images/GSL.png" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/55" />
        <div className="relative max-w-7xl mx-auto w-full px-6 py-28 sm:py-36">
          <div className="max-w-4xl">
            <p className="text-gold-400 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold">People, Talent &amp; Culture Directorate</p>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] tracking-tight">Shaping the talent and culture of the workforce of legal education in Ghana.</h1>
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
            <div className="mt-8 border-l-2 border-gold-500 pl-5"><p className="font-heading font-bold text-navy-900">Directorate Head</p><p className="text-sm text-institutional-muted">People, Talent &amp; Culture Directorate</p></div>
          </FadeIn>
        </div>
      </section>

      <section id="units" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="eyebrow">Our Units</p><h2 className="section-title max-w-2xl">Two connected areas of work.</h2></FadeIn>
          <div className="mt-12 grid md:grid-cols-2 gap-6">{units.map(({ Icon, title, body }, index) => <FadeIn key={title} delay={index * 0.1}><article className="h-full rounded-2xl border border-institutional-border p-8 sm:p-10 hover:border-gold-400 hover:shadow-lg transition-all"><div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center"><Icon className="w-7 h-7" strokeWidth={1.5} /></div><h3 className="mt-7 text-2xl font-heading font-bold text-navy-900">{title}</h3><p className="mt-4 text-institutional-muted leading-relaxed">{body}</p></article></FadeIn>)}</div>
        </div>
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
