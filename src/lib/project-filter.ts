import { ongoing, projects, type Sector, type Service, type Status } from "@/data/site";

export type GridItem = {
  key: string;
  slug?: string;
  title: string;
  client: string;
  sector: Sector;
  service: Service;
  country: string;
  year: number;
  status: Status;
  highlight: string;
};

export const gridItems: GridItem[] = [
  ...projects.map((p) => ({
    key: p.slug,
    slug: p.slug,
    title: p.title,
    client: p.client,
    sector: p.sector,
    service: p.service,
    country: p.country,
    year: p.year,
    status: p.status,
    highlight: p.stats[0]?.value ?? "",
  })),
  ...ongoing.map((o, i) => ({
    key: `ongoing-${i}`,
    title: o.title,
    client: o.client,
    sector: o.sector,
    service: o.service,
    country: o.country,
    year: 2026,
    status: "Ongoing 2026" as const,
    highlight: o.detail,
  })),
];

export type Filters = {
  sector: string;
  service: string;
  country: string;
  year: string;
  status: string;
};

export const ALL = "all";
export const emptyFilters: Filters = { sector: ALL, service: ALL, country: ALL, year: ALL, status: ALL };

export function filterItems(items: GridItem[], f: Filters): GridItem[] {
  return items.filter(
    (it) =>
      (f.sector === ALL || it.sector === f.sector) &&
      (f.service === ALL || it.service === f.service) &&
      (f.country === ALL || it.country === f.country) &&
      (f.year === ALL || String(it.year) === f.year) &&
      (f.status === ALL || it.status === f.status),
  );
}

export function optionsFor(items: GridItem[], field: keyof Filters): string[] {
  const vals = Array.from(new Set(items.map((i) => String(i[field]))));
  return field === "year" ? vals.sort((a, b) => Number(b) - Number(a)) : vals.sort();
}
