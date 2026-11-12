import { Link } from "@tanstack/react-router";
import { Download, Globe, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { company, navItems } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Logo } from "./Logo";
import { PlatformLineArt } from "./PlatformLineArt";

export function Footer() {
  return (
    <footer>
      <section id="contact" aria-labelledby="contact-title" className="bg-brand-gradient relative isolate overflow-hidden text-on-brand">
        <PlatformLineArt className="pointer-events-none absolute -right-16 top-10 -z-10 w-[36rem] text-on-brand/30 md:w-[44rem]" />
        <div className="container-site py-20 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-brand-muted">Thank you</p>
          <h2 id="contact-title" className="mt-4 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
            Let's explore a sustainable future with us
          </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={company.phoneHref} className="hover:underline">{company.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a>
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`https://${company.website}`} className="hover:underline" target="_blank" rel="noreferrer">{company.website}</a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">
                    {company.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </li>
              </ul>
              <Button
                variant="onBrand"
                size="pill"
                className="mt-8"
                onClick={() =>
                  toast("Company profile PDF", { description: `The PDF is being prepared. Email ${company.email} to receive a copy.` })
                }
              >
                <Download /> Download Company Profile (PDF)
              </Button>
            </div>
            <div className="rounded-md bg-card p-6 text-card-foreground md:p-8 lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-navy text-navy-foreground">
        <div className="container-site flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm text-on-brand-muted">{company.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navItems.map((n) => (
              <Link key={n.id} to="/" hash={n.id} className="text-on-brand-muted hover:text-on-brand">
                {n.en}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container-site flex flex-col gap-2 border-t border-on-brand/15 py-6 text-xs text-on-brand-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <p>ISO 9001:2015 · ISO 45001:2018 · TÜV NORD (Prinsipa group)</p>
        </div>
      </div>
    </footer>
  );
}
