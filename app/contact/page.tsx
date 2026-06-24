import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ImageBand from "@/app/components/ImageBand";
import Reveal from "@/app/components/Reveal";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Information",
};

const contacts = [
  {
    icon: Mail,
    label: "General Enquiries",
    value: "ptc@clet.gov.gh",
    href: "mailto:ptc@clet.gov.gh",
    accent: true,
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+233 (0) 302 000 000",
    href: "tel:+233302000000",
    accent: true,
  },
  {
    icon: Mail,
    label: "Council Switchboard",
    value: "info@clet.gov.gh",
    href: "mailto:info@clet.gov.gh",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri · 8:00 AM – 5:00 PM",
    sub: "Closed on weekends and public holidays",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        subtitle="The People, Talent & Culture Directorate is available to receive correspondence, enquiries, and stakeholder engagement."
        variant="navy-orbs"
      />

      <ImageBand
        src="/images/gavel-white.jpg"
        alt="Modern institutional workspace"
        height="sm"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Reveal className="lg:col-span-5">
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-10 h-full relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-500/15 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center mb-6">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                    Visit Us
                  </p>
                  <h2 className="mt-3 text-2xl font-heading font-bold text-white">
                    Office Address
                  </h2>
                  <address className="not-italic mt-5 text-white/70 leading-relaxed">
                    <p className="font-semibold text-white">
                      People, Talent &amp; Culture Directorate
                    </p>
                    <p className="mt-1">
                      Council for Legal Education and Training
                    </p>
                    <p>Accra, Ghana</p>
                  </address>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
                      For Official Correspondence
                    </p>
                    <address className="not-italic text-sm text-white/60 leading-relaxed">
                      <p className="text-white font-semibold">The Director</p>
                      <p>People, Talent &amp; Culture Directorate</p>
                      <p>Council for Legal Education and Training</p>
                      <p>Accra, Ghana</p>
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Contact Details
              </p>
              <h2 className="mt-3 text-3xl font-heading font-bold text-navy-900">
                How to reach us
              </h2>

              <div className="mt-8 space-y-3">
                {contacts.map((c, i) => {
                  const Wrapper = c.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={i}
                      href={c.href}
                      className={`group flex items-center gap-5 p-5 bg-white border border-institutional-border rounded-2xl transition-all ${
                        c.href ? "hover:border-gold-400 hover:shadow-sm" : ""
                      }`}
                    >
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          c.accent
                            ? "bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-900"
                            : "bg-institutional-bg text-navy-700"
                        }`}
                      >
                        <c.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-institutional-muted font-semibold">
                          {c.label}
                        </p>
                        <p
                          className={`mt-0.5 text-base font-semibold text-navy-900 ${
                            c.href ? "group-hover:text-gold-600" : ""
                          } transition-colors`}
                        >
                          {c.value}
                        </p>
                        {c.sub && (
                          <p className="text-xs text-institutional-muted mt-0.5">
                            {c.sub}
                          </p>
                        )}
                      </div>
                      {c.href && (
                        <Send
                          className="w-4 h-4 text-institutional-muted group-hover:text-gold-600 group-hover:translate-x-0.5 transition-all"
                          strokeWidth={1.5}
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-institutional-bg py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-white border border-institutional-border rounded-2xl p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-semibold">
                    Complaints &amp; Feedback
                  </p>
                  <h3 className="mt-2 text-xl font-heading font-bold text-navy-900">
                    We welcome stakeholder feedback
                  </h3>
                  <p className="mt-3 text-sm text-institutional-muted leading-relaxed">
                    Complaints regarding recruitment processes, professional
                    standards, or institutional culture within CLET-regulated
                    institutions may be submitted in writing to the Director
                    through the channels above. All complaints are handled in
                    accordance with the Council&apos;s established procedures.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
