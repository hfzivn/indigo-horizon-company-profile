import { cn } from "@/lib/utils";
import type { Stat } from "@/data/site";
import { CountUp } from "./CountUp";

export function StatBlock({ stat, tone = "light" }: { stat: Stat; tone?: "light" | "onBrand" }) {
  const onBrand = tone === "onBrand";
  return (
    <div className={cn("border-t pt-5", onBrand ? "border-on-brand/35" : "border-primary")}>
      <p className={cn("text-4xl font-light leading-none tracking-tight md:text-5xl", onBrand ? "text-on-brand" : "text-primary")}>
        <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
      </p>
      <p className={cn("mt-3 text-sm font-semibold", onBrand ? "text-on-brand" : "text-foreground")}>{stat.unit}</p>
      <p className={cn("mt-1 max-w-[16rem] text-sm leading-relaxed", onBrand ? "text-on-brand-muted" : "text-muted-foreground")}>
        {stat.caption}
      </p>
    </div>
  );
}
