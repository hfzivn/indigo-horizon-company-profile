import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { getProject, projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found | Prinsipa Engineering" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    const title = `${p.giant} ${p.subtitle} | Prinsipa Engineering`;
    return {
      meta: [
        { title },
        { name: "description", content: `${p.title}. ${p.description}`.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="container-site py-32 text-center">
        <h1 className="text-4xl font-light text-primary">Project not found</h1>
        <p className="mt-3 text-muted-foreground">This project may have moved.</p>
        <Link to="/" hash="projects" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </main>
    </>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const facts = [
    { k: "Client", v: p.client },
    { k: "Year", v: p.yearLabel },
    { k: "Country", v: p.country },
    { k: "Sector", v: p.sector },
    { k: "Service", v: p.service },
    { k: "Status", v: p.status },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden text-on-brand">
          <div className="duotone absolute inset-0 -z-20">
            <img src={p.image} alt={p.title} width={1280} height={960} className="h-full w-full object-cover" />
          </div>
          <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
          <div className="container-site pb-14 pt-12 md:pb-20">
            <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-on-brand-muted hover:text-on-brand">
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
            <h1 className="mt-16 md:mt-24">
              <span className="block text-5xl font-bold tracking-tight md:text-7xl">{p.giant}</span>
              <span className="mt-2 block text-3xl font-light md:text-5xl">{p.subtitle}</span>
            </h1>
            <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-on-brand/35 pt-6">
              {p.stats.map((s) => (
                <div key={s.value + s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-4xl font-light leading-none md:text-5xl">{s.value}</dd>
                  <dd className="mt-2 text-sm text-on-brand-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container-site grid gap-14 py-20 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{p.service}</p>
            <h2 className="mt-3 text-3xl font-light leading-tight text-primary md:text-4xl">{p.title}</h2>
            <p className="mt-8 text-lg font-light leading-relaxed">{p.description}</p>
            <h3 className="mt-12 font-semibold">Scope</h3>
            <ul className="mt-4 border-t border-border">
              {p.scope.map((s, i) => (
                <li key={s} className="flex gap-4 border-b border-border py-4">
                  <span className="w-6 text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <aside className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
              {facts.map((f) => (
                <div key={f.k} className="border-t border-primary pt-3">
                  <dt className="eyebrow">{f.k}</dt>
                  <dd className="mt-1.5 text-sm font-medium">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {p.gallery.map((g, i) => (
                <div key={i} className="duotone aspect-[4/3]">
                  <img src={g} alt="" loading="lazy" width={640} height={480} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-t border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="container-site group flex items-center justify-between gap-6 py-12"
          >
            <span>
              <span className="eyebrow block">Next project</span>
              <span className="mt-2 block text-2xl font-light text-primary md:text-3xl">
                <span className="font-semibold">{next.giant}</span> {next.subtitle}
              </span>
            </span>
            <ArrowRight className="h-8 w-8 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
