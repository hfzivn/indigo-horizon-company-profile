export function PhaseColumn({ index, name, items }: { index: number; name: string; items: string[] }) {
  return (
    <div className="border-t border-primary pt-4">
      <p className="text-xs font-medium text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
      <h4 className="mt-1 text-lg font-semibold text-primary">{name}</h4>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-periwinkle" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
