import Image from "next/image";

type P = { className?: string };

function makeSymbol(src: string, alt: string) {
  const Symbol = ({ className = "" }: P) => (
    <Image
      src={src}
      alt={alt}
      width={240}
      height={240}
      className={className}
    />
  );
  Symbol.displayName = alt;
  return Symbol;
}

const A = "/images/adinkra";

export const Adinkrahene = makeSymbol(`${A}/adinkrahene.png`, "Adinkrahene");
export const Akofena = makeSymbol(`${A}/akofena.png`, "Akofena");
export const AkokoNan = makeSymbol(`${A}/akoko-nan.png`, "Akoko Nan");
export const AkomaNtoaso = makeSymbol(`${A}/akoma-ntoaso.png`, "Akoma Ntoaso");
export const Epa = makeSymbol(`${A}/epa.png`, "Epa");
export const Hwemudua = makeSymbol(`${A}/hwemudua.png`, "Hwemudua");
export const MmaraKrado = makeSymbol(`${A}/mmara-krado.png`, "Mmara Krado");
export const Mpuannum = makeSymbol(`${A}/mpuannum.png`, "Mpuannum");
export const Nkyimkyim = makeSymbol(`${A}/nkyimkyim.png`, "Nkyimkyim");
export const Nkyimu = makeSymbol(`${A}/nkyimu.png`, "Nkyimu");
export const Nsaa = makeSymbol(`${A}/nsaa.png`, "Nsaa");
export const Nserewa = makeSymbol(`${A}/nserewa.png`, "Nserewa");
export const Nyansapo = makeSymbol(`${A}/nyansapo.png`, "Nyansapo");
export const OheneAdwa = makeSymbol(`${A}/ohene-adwa.png`, "Ohene Adwa");
export const OheneAniwa = makeSymbol(`${A}/ohene-aniwa.png`, "Ohene Aniwa");
export const OkodeeMmowere = makeSymbol(`${A}/okodee-mmowere.png`, "Okodee Mmowere");
export const Onnim = makeSymbol(`${A}/onnim.png`, "Onnim");
export const OsramNeNsroma = makeSymbol(`${A}/osram-ne-nsroma.png`, "Osram ne Nsroma");
export const Sepow = makeSymbol(`${A}/sepow.png`, "Sepow");
export const UacNkanea = makeSymbol(`${A}/uac-nkanea.png`, "UAC Nkanea");
export const MateMasie = makeSymbol(`${A}/mate-masie.png`, "Mate Masie");

export const AkomaNtoso = AkomaNtoaso;
export const Nkyinkyim = Nkyimkyim;
export const GyeNyame = MmaraKrado;
export const NyameDua = Hwemudua;
export const Mpatapo = Nyansapo;
export const Sankofa = MateMasie;

export function KenteStrip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 8" preserveAspectRatio="none" className={className} aria-hidden="true">
      <rect x="0" y="0" width="24" height="8" fill="#C5961A" />
      <rect x="24" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="32" y="0" width="16" height="8" fill="#FFFFFF" />
      <rect x="48" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="56" y="0" width="24" height="8" fill="#D4A82E" />
      <rect x="80" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="88" y="0" width="16" height="8" fill="#FFFFFF" />
      <rect x="104" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="112" y="0" width="24" height="8" fill="#C5961A" />
      <rect x="136" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="144" y="0" width="16" height="8" fill="#FFFFFF" />
      <rect x="160" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="168" y="0" width="24" height="8" fill="#D4A82E" />
      <rect x="192" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="200" y="0" width="16" height="8" fill="#FFFFFF" />
      <rect x="216" y="0" width="8" height="8" fill="#0F1C33" />
      <rect x="224" y="0" width="16" height="8" fill="#C5961A" />
    </svg>
  );
}

export const ADINKRA_SYMBOLS = [
  { Icon: Adinkrahene, name: "Adinkrahene", meaning: "Greatness & Leadership" },
  { Icon: AkomaNtoaso, name: "Akoma Ntoaso", meaning: "Understanding & Agreement" },
  { Icon: MmaraKrado, name: "Mmara Krado", meaning: "Seal of Law & Authority" },
  { Icon: Epa, name: "Epa", meaning: "Law & Justice" },
  { Icon: Sepow, name: "Sepow", meaning: "Judicial Authority" },
  { Icon: Hwemudua, name: "Hwemudua", meaning: "Standards & Excellence" },
  { Icon: Nsaa, name: "Nsaa", meaning: "Excellence & Genuineness" },
  { Icon: Nyansapo, name: "Nyansapo", meaning: "Wisdom & Ingenuity" },
  { Icon: MateMasie, name: "Mate Masie", meaning: "Wisdom & Knowledge" },
  { Icon: Onnim, name: "Onnim", meaning: "Lifelong Learning" },
  { Icon: Akofena, name: "Akofena", meaning: "Courage & Heroism" },
  { Icon: OkodeeMmowere, name: "Okodee Mmowere", meaning: "Strength & Bravery" },
  { Icon: Nkyimkyim, name: "Nkyimkyim", meaning: "Adaptability & Resilience" },
  { Icon: Nkyimu, name: "Nkyimu", meaning: "Skillfulness & Precision" },
  { Icon: OheneAniwa, name: "Ohene Aniwa", meaning: "Vigilance & Discernment" },
  { Icon: Mpuannum, name: "Mpuannum", meaning: "Loyalty & Service" },
  { Icon: AkokoNan, name: "Akoko Nan", meaning: "Parental Care & Discipline" },
  { Icon: OsramNeNsroma, name: "Osram ne Nsroma", meaning: "Faithfulness & Love" },
  { Icon: Nserewa, name: "Nserewa", meaning: "Wealth & Sanctity" },
  { Icon: UacNkanea, name: "UAC Nkanea", meaning: "Lights of Guidance" },
] as const;
