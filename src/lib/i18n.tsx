import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "id";

const dict = {
  contactUs: { en: "Contact Us", id: "Hubungi Kami" },
  viewProjects: { en: "View Projects", id: "Lihat Proyek" },
  whatWeDo: { en: "What we do", id: "Layanan kami" },
  heroSub: {
    en: "Prinsipa is a wholly-owned, Indonesian citizen-led offshore engineering and advisory company for the energy industry, headquartered in Jakarta.",
    id: "Prinsipa adalah perusahaan rekayasa dan konsultansi lepas pantai untuk industri energi, sepenuhnya dimiliki dan dipimpin warga negara Indonesia, berkantor pusat di Jakarta.",
  },
} as const;

type Key = keyof typeof dict;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k].en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: (k) => dict[k][lang] }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
