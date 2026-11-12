import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, whatWeDo } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { PlatformLineArt } from "./PlatformLineArt";

export function Hero() {
  const { t } = useLang();
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden text-on-brand">
      <div className="duotone absolute inset-0 -z-20">
        <img src={images.hero} alt="Heavy-lift crane vessel installing an offshore platform module at dawn" width={1920} height={1088} className="h-full w-full object-cover" />
      </div>
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <PlatformLineArt className="pointer-events-none absolute -right-10 bottom-36 hidden w-[34rem] text-on-brand/45 md:block lg:right-4 lg:w-[40rem]" />

      <div className="container-site relative pb-12 pt-20 md:pb-16 md:pt-28">
        <h1 className="leading-[0.95]">
          <span className="block text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">Excellence in</span>
          <span className="mt-1 block pl-[8%] text-6xl font-light tracking-tight sm:text-7xl md:pl-[14%] md:text-8xl lg:text-[9.5rem]">
            consultancy
          </span>
        </h1>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-on-brand-muted md:text-lg">{t("heroSub")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="solidLight" size="pill">
            <Link to="/" hash="projects">
              {t("viewProjects")} <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="onBrand" size="pill">
            <Link to="/" hash="contact">{t("contactUs")}</Link>
          </Button>
        </div>

        <div className="mt-24 md:mt-32">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-brand-muted">{t("whatWeDo")}</p>
          <ul className="mt-4 grid gap-6 md:grid-cols-3 md:gap-8">
            {whatWeDo.map((w, i) => (
              <li key={w} className="border-t border-on-brand/40 pt-4">
                <span className="text-xs text-on-brand-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-lg font-light">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
