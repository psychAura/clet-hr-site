import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About the Directorate" },
  { href: "/culture", label: "Culture, Talent & Values" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News & Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      <div className="h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/clet-ptc-logo.png"
                alt="CLET People, Talent & Culture"
                width="128"
                height="128"
                className="w-11 h-11 object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-white">CLET Ghana</p>
                <p className="text-xs text-white/40">
                  People, Talent &amp; Culture Directorate
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Advancing the human capital and institutional culture standards of
              legal education in the Republic of Ghana.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-5">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/50 space-y-2.5">
              <p>Council for Legal Education and Training</p>
              <p>Accra, Ghana</p>
              <div className="pt-2 space-y-1.5">
                <p>
                  <a
                    href="mailto:ptc@clet.gov.gh"
                    className="hover:text-white transition-colors"
                  >
                    ptc@clet.gov.gh
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+233302000000"
                    className="hover:text-white transition-colors"
                  >
                    +233 (0) 302 000 000
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/30">
          <p>
            &copy; 2026 Council for Legal Education and Training, Republic of
            Ghana
          </p>
          <p>Established under the Ghana Legal Education Reform framework</p>
        </div>
      </div>
    </footer>
  );
}
