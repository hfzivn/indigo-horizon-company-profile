import { describe, expect, it } from "vitest";
import { emptyFilters, filterItems, gridItems } from "@/lib/project-filter";

describe("project filter", () => {
  it("shows all 10 executed and 6 ongoing projects by default", () => {
    expect(filterItems(gridItems, emptyFilters)).toHaveLength(16);
  });

  it("status Ongoing 2026 returns only the 6 ongoing projects", () => {
    const r = filterItems(gridItems, { ...emptyFilters, status: "Ongoing 2026" });
    expect(r).toHaveLength(6);
    expect(r.every((p) => p.status === "Ongoing 2026")).toBe(true);
  });

  it("combines filters: Floating PV in Indonesia", () => {
    const r = filterItems(gridItems, { ...emptyFilters, service: "Floating PV", country: "Indonesia" });
    expect(r.map((p) => p.title)).toContain("Karangkates floating PV, East Java");
    expect(r.every((p) => p.service === "Floating PV" && p.country === "Indonesia")).toBe(true);
  });
});
