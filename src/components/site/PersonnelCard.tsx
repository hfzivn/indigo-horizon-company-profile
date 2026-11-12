export function PersonnelCard({ years, name, role, highlight }: { years: string; name: string; role: string; highlight: string }) {
  return (
    <div className="border-t border-border pt-6">
      <p className="text-5xl font-light leading-none tracking-tight text-primary">{years}</p>
      <p className="mt-5 font-bold text-foreground">{name}</p>
      <p className="mt-1 text-sm font-medium text-primary">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{highlight}</p>
    </div>
  );
}
