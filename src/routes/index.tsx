import { createFileRoute } from "@tanstack/react-router";
import { ClientLogoGrid } from "@/components/site/ClientLogoGrid";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { PersonnelCard } from "@/components/site/PersonnelCard";
import { PhaseColumn } from "@/components/site/PhaseColumn";
import { PrincipleCard } from "@/components/site/PrincipleCard";
import { ProjectFilter } from "@/components/site/ProjectFilter";
import { ProjectMap } from "@/components/site/ProjectMap";
import { ProjectSplitCard } from "@/components/site/ProjectSplitCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionDivider } from "@/components/site/SectionDivider";
import { StatBlock } from "@/components/site/StatBlock";
import { ValueChart } from "@/components/site/ValueChart";
import {
  clientGroups,
  company,
  deliverables,
  glanceBottom,
  glanceTop,
  images,
  ongoing,
  personnel,
  phases,
  principles,
  projects,
  scope,
  software,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prinsipa Engineering | Offshore Engineering and Advisory, Jakarta" },
      {
        name: "description",
        content:
          "PT Abirama Prinsipa Engineering: Indonesian offshore engineering and advisory for energy. T&I, mooring, subsea, pipeline and floating PV across 11 countries.",
      },
      { property: "og:title", content: "Prinsipa Engineering | Excellence in consultancy" },
      {
        property: "og:description",
        content: "Offshore engineering and advisory for the energy industry, headquartered in Jakarta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({ label, title, className }: { label: string; title: string; className?: string }) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 text-4xl font-light tracking-tight text-primary md:text-5xl">{title}</h2>
    </Reveal>
  );
}

function Index() {
  const oilGas = projects.filter((p) => p.sector === "Oil, gas and marine");
  const power = projects.filter((p) => p.sector === "Power and renewables");

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* 01 COMPANY */}
        <section id="company" aria-labelledby="who-title">
          <SectionDivider title="Company" number="01" />

          <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">{company.legalName}</p>
              <h2 id="who-title" className="mt-3 text-4xl font-light tracking-tight text-primary md:text-5xl">
                Who we are
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed">
                Known for constructability and fit-for-purpose design, we deliver multi-region international projects
                from Jakarta, where optimum cost meets offshore quality requirements.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Our engineers cover the full asset life, from concept and feasibility to installation, operation and
                decommissioning, across oil and gas, LNG, marine and floating renewable power.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              <Reveal className="duotone aspect-[4/5]">
                <img src={images.platform} alt="Offshore jacket platform in open sea" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
              </Reveal>
              <Reveal delay={150} className="duotone mt-12 aspect-[4/5]">
                <img src={images.floatingSolar} alt="Floating solar PV array on a reservoir" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
              </Reveal>
            </div>
          </div>

          {/* At a glance */}
          <div className="bg-brand-gradient text-on-brand">
            <div className="container-site py-16 md:py-20">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-brand-muted">01 Company</p>
              <h2 className="mt-3 text-3xl font-light md:text-4xl">Prinsipa at a glance</h2>
              <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {glanceTop.map((s) => (
                  <StatBlock key={s.unit} stat={s} tone="onBrand" />
                ))}
              </div>
            </div>
          </div>
          <div className="container-site py-16 md:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {glanceBottom.map((s, i) => (
                <Reveal key={s.unit} delay={i * 80}>
                  <StatBlock stat={s} />
                </Reveal>
              ))}
            </div>
            <p className="mt-12 border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Quality and safety:</span> ISO 9001:2015 and ISO 45001:2018
              certificates, TÜV NORD (Prinsipa group)
            </p>
          </div>

          {/* Principles */}
          <div className="bg-brand-gradient relative overflow-hidden text-on-brand">
            <div className="container-site py-20 md:py-28">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-brand-muted">Our principles</p>
              <Reveal>
                <p className="mt-4 max-w-4xl text-4xl font-light leading-tight md:text-6xl">{company.tagline}</p>
              </Reveal>
            </div>
          </div>
          <div className="container-site grid gap-10 py-16 md:grid-cols-3 md:py-20">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <PrincipleCard {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* 02 CAPABILITY */}
        <section id="capability" aria-labelledby="cap-title">
          <SectionDivider title="Capability" number="02" />
          <div className="container-site py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow">02 Capability</p>
                <h2 id="cap-title" className="mt-3 text-3xl font-light leading-tight tracking-tight text-primary md:text-4xl">
                  Subject matter expert with a holistic approach
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  We engage early, when decisions shape most of a project's value, and stay through execution, operation
                  and decommissioning.
                </p>
              </div>
              <Reveal className="lg:col-span-8">
                <ValueChart />
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
              {phases.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <PhaseColumn index={i} {...p} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="bg-surface">
            <div className="container-site grid gap-12 py-20 md:py-24 lg:grid-cols-12">
              <SectionHeading label="Scope" title="Where we work" className="lg:col-span-4" />
              <ol className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
                {scope.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4 border-b border-border py-4">
                    <span className="w-6 text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-light">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="container-site py-20 md:py-24">
            <SectionHeading label="Typical deliverables" title="What we deliver" />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 80} className="border-t border-primary pt-5">
                  <h3 className="font-semibold leading-snug text-primary">{d.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {d.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-periwinkle" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-light text-primary">Engineering software</h3>
              <div className="mt-6 overflow-x-auto scrollbar-thin">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-primary">
                      <th scope="col" className="py-3 pr-6 font-semibold">Software</th>
                      <th scope="col" className="py-3 font-semibold">Used for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {software.map((s) => (
                      <tr key={s.name} className="border-b border-border">
                        <td className="whitespace-nowrap py-3.5 pr-6 font-medium text-primary">{s.name}</td>
                        <td className="py-3.5 text-muted-foreground">{s.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* PEOPLE */}
        <section id="people" aria-labelledby="people-title" className="border-t border-border">
          <div className="container-site py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Key personnel</p>
                <h2 id="people-title" className="mt-3 text-4xl font-light tracking-tight text-primary md:text-5xl">
                  The people behind the work
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">Full CVs available on request</p>
            </div>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {personnel.map((p, i) => (
                <Reveal key={p.name} delay={(i % 4) * 80}>
                  <PersonnelCard {...p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" aria-labelledby="projects-title">
          <div className="bg-surface">
            <div className="container-site py-20 md:py-24">
              <p className="eyebrow">Projects</p>
              <h2 id="projects-title" className="mt-3 text-4xl font-light tracking-tight text-primary md:text-5xl">
                Selected work
              </h2>
              <div className="mt-10">
                <ProjectFilter />
              </div>
            </div>
          </div>

          <SectionDivider title="Oil, gas and marine" number="03" />
          <div className="container-site space-y-10 py-20 md:py-24">
            {oilGas.map((p, i) => (
              <Reveal key={p.slug}>
                <ProjectSplitCard project={p} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>

          <SectionDivider title="Power and renewables" number="04" />
          <div className="container-site space-y-10 py-20 md:py-24">
            {power.map((p, i) => (
              <Reveal key={p.slug}>
                <ProjectSplitCard project={p} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>

          <div className="bg-surface">
            <div className="container-site py-20 md:py-24">
              <SectionHeading label="Current work" title="Ongoing projects, 2026" />
              <ol className="mt-12 grid border-t border-border md:grid-cols-2 md:gap-x-12">
                {ongoing.map((o, i) => (
                  <li key={o.title + o.client} className="flex gap-5 border-b border-border py-6">
                    <span className="text-3xl font-light leading-none text-periwinkle">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-primary">{o.title}</p>
                      <p className="mt-1 text-sm">{o.client}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{o.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="container-site py-20 md:py-24">
            <SectionHeading label="Footprint" title="Project map" />
            <div className="mt-12">
              <ProjectMap />
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section id="clients" aria-labelledby="clients-title" className="border-t border-border">
          <div className="container-site py-20 md:py-28">
            <p className="eyebrow">Trusted by</p>
            <h2 id="clients-title" className="mt-3 text-4xl font-light tracking-tight text-primary md:text-5xl">
              Clients and partners
            </h2>
            <div className="mt-14 space-y-14">
              {clientGroups.map((g) => (
                <ClientLogoGrid key={g.label} {...g} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
