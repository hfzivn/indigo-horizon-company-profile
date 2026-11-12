import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ongoing, projects, type MapPoint } from "@/data/site";
import { AFRICA_MAP, SEA_MAP } from "@/data/map-paths";
import { cn } from "@/lib/utils";

type Pin = { n: number; label: string; sub: string; ongoing: boolean; loc: MapPoint; slug?: string };

const pins: Pin[] = [
  ...projects.filter((p) => p.location).map((p) => ({ label: p.giant, sub: p.subtitle, ongoing: false, loc: p.location!, slug: p.slug })),
  ...ongoing.filter((o) => o.location).map((o) => ({ label: o.title, sub: o.client, ongoing: true, loc: o.location! })),
].map((p, i) => ({ ...p, n: i + 1 }));

function project(map: typeof SEA_MAP | typeof AFRICA_MAP, lon: number, lat: number) {
  const [x0, y0, x1, y1] = map.bbox;
  return { x: ((lon - x0) / (x1 - x0)) * map.width, y: ((y1 - lat) / (y1 - y0)) * map.height };
}

function MapSvg({ map, region, active, setActive, label, r }: { map: typeof SEA_MAP | typeof AFRICA_MAP; region: MapPoint["region"]; active: number | null; setActive: (n: number | null) => void; label: string; r: number }) {
  return (
    <svg viewBox={`0 0 ${map.width} ${map.height}`} className="h-auto w-full" role="group" aria-label={label}>
      <rect width={map.width} height={map.height} className="fill-surface" />
      <path d={map.path} className="fill-map-land stroke-background" strokeWidth={0.8} />
      {pins
        .filter((p) => p.loc.region === region)
        .map((p) => {
          const { x, y } = project(map, p.loc.lon, p.loc.lat);
          const on = active === p.n;
          return (
            <g
              key={p.n}
              tabIndex={0}
              role="button"
              aria-label={`${p.n}. ${p.label}, ${p.sub}${p.ongoing ? " (ongoing 2026)" : ""}`}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p.n)}
              onBlur={() => setActive(null)}
              className="cursor-pointer outline-none"
            >
              {on && <circle cx={x} cy={y} r={r * 1.8} className={p.ongoing ? "fill-periwinkle/25" : "fill-navy/20"} />}
              <circle cx={x} cy={y} r={r} className={cn(p.ongoing ? "fill-periwinkle" : "fill-navy", "stroke-background")} strokeWidth={2} />
              <text x={x} y={y} dy="0.35em" textAnchor="middle" className="pointer-events-none fill-on-brand font-semibold" style={{ fontSize: r * 1.05 }}>
                {p.n}
              </text>
            </g>
          );
        })}
    </svg>
  );
}

export function ProjectMap() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <div className="border border-border">
        <MapSvg map={SEA_MAP} region="sea" active={active} setActive={setActive} label="Southeast Asia project locations" r={13} />
      </div>
      <div className="flex flex-col gap-6">
        <div className="border border-border">
          <p className="eyebrow px-3 pt-3">Africa</p>
          <MapSvg map={AFRICA_MAP} region="africa" active={active} setActive={setActive} label="Africa project locations" r={15} />
        </div>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-navy" aria-hidden="true" /> Executed</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-periwinkle" aria-hidden="true" /> Ongoing 2026</span>
        </div>
        <ol className="text-sm">
          {pins.map((p) => {
            const content = (
              <span className="flex gap-3 py-2">
                <span className={cn("w-5 shrink-0 font-semibold", p.ongoing ? "text-periwinkle" : "text-navy")}>{p.n}</span>
                <span>
                  <span className="font-medium">{p.label}</span> <span className="text-muted-foreground">{p.sub}</span>
                </span>
              </span>
            );
            return (
              <li
                key={p.n}
                onMouseEnter={() => setActive(p.n)}
                onMouseLeave={() => setActive(null)}
                className={cn("border-t border-border transition-colors", active === p.n && "bg-accent")}
              >
                {p.slug ? (
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="block px-1 hover:text-primary" onFocus={() => setActive(p.n)} onBlur={() => setActive(null)}>
                    {content}
                  </Link>
                ) : (
                  <span className="block px-1">{content}</span>
                )}
              </li>
            );
          })}
        </ol>
        <p className="text-xs italic text-muted-foreground">Locations indicative</p>
      </div>
    </div>
  );
}
