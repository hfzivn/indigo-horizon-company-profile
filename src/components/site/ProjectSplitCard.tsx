import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProjectSplitCard({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className="grid overflow-hidden border border-border md:grid-cols-2">
      <div className={cn("relative min-h-[26rem] text-on-brand", flip && "md:order-2")}>
        <div className="duotone absolute inset-0">
          <img src={project.image} alt={project.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
        </div>
        <div className="bg-card-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-between p-7 md:p-10">
          <div>
            <p className="text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl">{project.giant}</p>
            <p className="mt-2 text-2xl font-light md:text-3xl">{project.subtitle}</p>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {project.stats.map((s) => (
              <div key={s.value + s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-light leading-none md:text-4xl">{s.value}</dd>
                <dd className="mt-1.5 text-xs text-on-brand-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="flex flex-col bg-card p-7 md:p-10">
        <p className="eyebrow">{project.service}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-primary md:text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.client} · {project.yearLabel}
        </p>
        <p className="mt-5 leading-relaxed">{project.description}</p>
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-sm font-semibold">Scope</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {project.scope.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {project.gallery.map((g, i) => (
            <div key={i} className="duotone aspect-[4/3]">
              <img src={g} alt="" loading="lazy" width={640} height={480} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline"
        >
          View project details <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
