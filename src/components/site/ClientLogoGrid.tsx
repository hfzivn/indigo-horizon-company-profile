export function ClientLogoGrid({ label, names }: { label: string; names: string[] }) {
  return (
    <div>
      <h3 className="inline-block border-b-2 border-primary pb-2 font-bold text-primary">{label}</h3>
      <ul className="mt-6 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-6">
        {names.map((n) => (
          <li
            key={n}
            className="flex min-h-24 items-center justify-center border-b border-r border-border px-4 py-6 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground/80 transition-colors hover:text-primary"
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
