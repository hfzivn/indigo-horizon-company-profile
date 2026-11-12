import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const fmt = new Intl.NumberFormat("en-US");

export function CountUp({ value, prefix = "", suffix = "", duration = 1600 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [n, setN] = useState(value);

  useEffect(() => {
    // Reset to 0 only on the client so server-rendered HTML shows the real number.
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setN(0);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${fmt.format(value)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {fmt.format(n)}
        {suffix}
      </span>
    </span>
  );
}
