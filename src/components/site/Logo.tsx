import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-9 w-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id="pmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--brand-1)" />
          <stop offset="0.55" stopColor="var(--brand-2)" />
          <stop offset="1" stopColor="var(--brand-3)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="8" fill="url(#pmark)" />
      <path d="M13 31V9h9.5a6.5 6.5 0 0 1 0 13H17" fill="none" stroke="var(--on-brand)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 22v9" stroke="var(--on-brand)" strokeWidth="3.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function Logo({ tone = "default", className }: { tone?: "default" | "light"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className={cn("flex flex-col leading-none", tone === "light" ? "text-on-brand" : "text-primary")}>
        <span className="text-[15px] font-bold tracking-[0.18em]">PRINSIPA</span>
        <span className="mt-1 text-[9px] font-medium tracking-[0.32em] opacity-80">ENGINEERING</span>
      </span>
    </span>
  );
}
