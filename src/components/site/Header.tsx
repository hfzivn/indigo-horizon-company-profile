import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const sectionIds = [...navItems.map((n) => n.id), "contact"] as const;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium">
      {(["en", "id"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { lang, t } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? sectionIds : []);
  const [open, setOpen] = useState(false);

  const label = (n: (typeof navItems)[number]) => (lang === "en" ? n.en : n.id_);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" aria-label="Prinsipa Engineering home" className="rounded-sm">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.id}
              to="/"
              hash={n.id}
              className={cn(
                "relative py-1 text-sm transition-colors hover:text-primary",
                active === n.id ? "font-medium text-primary" : "text-foreground",
              )}
            >
              {label(n)}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                  active === n.id ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <Button asChild variant="brand" size="pill" className="hidden h-10 sm:inline-flex">
            <Link to="/" hash="contact">{t("contactUs")}</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button type="button" className="rounded-md p-2 text-primary lg:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
                {navItems.map((n) => (
                  <Link
                    key={n.id}
                    to="/"
                    hash={n.id}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-border py-3 text-lg font-light",
                      active === n.id ? "text-primary" : "text-foreground",
                    )}
                  >
                    {label(n)}
                  </Link>
                ))}
                <Button asChild variant="brand" size="pill" className="mt-6">
                  <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                    {t("contactUs")}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
