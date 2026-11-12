export function PrincipleCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-border pt-6">
      <span className="block h-0.5 w-10 bg-primary" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
