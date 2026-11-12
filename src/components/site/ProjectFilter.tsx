import { Link } from "@tanstack/react-router";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ALL, emptyFilters, filterItems, gridItems, optionsFor, type Filters } from "@/lib/project-filter";
import { cn } from "@/lib/utils";

const fields: { key: keyof Filters; label: string }[] = [
  { key: "sector", label: "Sector" },
  { key: "service", label: "Service" },
  { key: "country", label: "Country" },
  { key: "year", label: "Year" },
  { key: "status", label: "Status" },
];

export function ProjectFilter() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const results = useMemo(() => filterItems(gridItems, filters), [filters]);
  const dirty = Object.values(filters).some((v) => v !== ALL);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))_auto]">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="eyebrow mb-1.5 block" id={`filter-${f.key}`}>
              {f.label}
            </label>
            <Select value={filters[f.key]} onValueChange={(v) => setFilters((s) => ({ ...s, [f.key]: v }))}>
              <SelectTrigger aria-labelledby={`filter-${f.key}`} className="h-10 rounded-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All</SelectItem>
                {optionsFor(gridItems, f.key).map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setFilters(emptyFilters)}
          disabled={!dirty}
          className="inline-flex h-10 items-center gap-1.5 self-end rounded-sm px-3 text-sm text-primary disabled:opacity-40"
        >
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing {results.length} of {gridItems.length} projects
      </p>

      <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className={cn("h-2 w-2 rounded-full", p.status === "Executed" ? "bg-navy" : "bg-periwinkle")}
                  />
                  {p.status} · {p.country} · {p.year}
                </span>
                {p.slug && <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />}
              </div>
              <p className="mt-2 font-semibold leading-snug text-foreground group-hover:text-primary">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
              <p className="mt-3 text-lg font-light text-primary">{p.highlight}</p>
            </>
          );
          return (
            <li key={p.key} className="border-t border-border">
              {p.slug ? (
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block py-5">
                  {inner}
                </Link>
              ) : (
                <div className="group py-5">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
      {results.length === 0 && (
        <p className="border-t border-border py-10 text-center text-muted-foreground">No projects match these filters.</p>
      )}
    </div>
  );
}
