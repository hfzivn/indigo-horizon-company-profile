const stages = ["Concept", "Pre-feasibility", "Feasibility", "Basic design", "Detailed design", "Construction"];

export function ValueChart() {
  const x = (i: number) => 70 + i * 120;
  return (
    <figure className="w-full">
      <svg viewBox="0 0 760 340" className="h-auto w-full" role="img" aria-labelledby="vc-title vc-desc">
        <title id="vc-title">Project value versus project stage</title>
        <desc id="vc-desc">
          Good definition in early stages leads to higher project value; poor definition limits value regardless of execution quality.
        </desc>
        {/* grid */}
        {stages.map((_, i) => (
          <line key={i} x1={x(i)} x2={x(i)} y1={30} y2={280} className="stroke-border" strokeWidth={1} />
        ))}
        <line x1={50} x2={720} y1={280} y2={280} className="stroke-muted-foreground" strokeWidth={1} />
        <line x1={50} x2={50} y1={20} y2={280} className="stroke-muted-foreground" strokeWidth={1} />
        <text x={14} y={150} transform="rotate(-90 14 150)" textAnchor="middle" className="fill-muted-foreground text-[11px]">
          Project value
        </text>
        {stages.map((s, i) => (
          <text key={s} x={x(i)} y={304} textAnchor="middle" className="fill-muted-foreground text-[11px]">
            {s}
          </text>
        ))}
        {/* good definition */}
        <path d={`M${x(0)},200 C${x(1)},190 ${x(2)},150 ${x(3)},120`} fill="none" className="stroke-primary" strokeWidth={2.5} />
        <path d={`M${x(3)},120 C${x(4)},95 ${x(4) + 60},70 ${x(5)},55`} fill="none" className="stroke-primary" strokeWidth={2.5} />
        <path d={`M${x(3)},120 C${x(4)},130 ${x(4) + 60},150 ${x(5)},160`} fill="none" className="stroke-primary" strokeWidth={1.5} strokeDasharray="5 5" />
        {/* poor definition */}
        <path d={`M${x(0)},200 C${x(1)},205 ${x(2)},210 ${x(3)},212`} fill="none" className="stroke-periwinkle" strokeWidth={2.5} />
        <path d={`M${x(3)},212 C${x(4)},205 ${x(4) + 60},195 ${x(5)},190`} fill="none" className="stroke-periwinkle" strokeWidth={2.5} />
        <path d={`M${x(3)},212 C${x(4)},230 ${x(4) + 60},250 ${x(5)},258`} fill="none" className="stroke-periwinkle" strokeWidth={1.5} strokeDasharray="5 5" />
        <circle cx={x(3)} cy={120} r={4} className="fill-primary" />
        <circle cx={x(3)} cy={212} r={4} className="fill-periwinkle" />
        <text x={x(1) - 20} y={140} className="fill-primary text-[12px] font-semibold">Good definition</text>
        <text x={x(1) + 10} y={232} className="fill-periwinkle text-[12px] font-semibold">Poor definition</text>
        <text x={x(5) - 6} y={48} textAnchor="end" className="fill-foreground text-[11px]">Good execution</text>
        <text x={x(5) - 6} y={150} textAnchor="end" className="fill-muted-foreground text-[11px]">Poor execution</text>
        <text x={x(5) - 6} y={182} textAnchor="end" className="fill-foreground text-[11px]">Good execution</text>
        <text x={x(5) - 6} y={274} textAnchor="end" className="fill-muted-foreground text-[11px]">Poor execution</text>
      </svg>
      <figcaption className="mt-2 text-xs text-muted-foreground">
        Value is set early: the biggest influence on project outcome comes before detailed design.
      </figcaption>
    </figure>
  );
}
