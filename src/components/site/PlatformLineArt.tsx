import { cn } from "@/lib/utils";

/** Thin line-art offshore platform and vessel. Inherits color via currentColor. */
export function PlatformLineArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 460" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={cn(className)} aria-hidden="true">
      {/* jacket legs */}
      <path d="M210 420 L240 230 M390 420 L360 230 M270 420 L280 230 M330 420 L320 230" />
      {/* bracing */}
      <path d="M215 390 L385 390 M222 345 L378 345 M229 300 L371 300 M235 262 L365 262" />
      <path d="M215 390 L276 345 L222 345 M385 390 L324 345 L378 345 M222 345 L278 300 M378 345 L322 300 M229 300 L280 262 M371 300 L320 262" />
      <path d="M276 345 L324 345 M278 300 L322 300" />
      {/* decks */}
      <path d="M200 230 H400 V214 H200 Z" />
      <path d="M210 214 V170 H390 V214" />
      <path d="M210 192 H390" />
      <path d="M226 170 V150 H300 V170 M310 170 V140 H372 V170" />
      <path d="M232 150 V130 H262 V150" />
      {/* helideck */}
      <path d="M390 180 H460 L440 196 H390" />
      <path d="M410 188 h20" />
      {/* drilling derrick */}
      <path d="M318 140 L332 40 L346 140 M322 110 H342 M325 80 H339 M328 58 H336 M318 140 L342 110 M346 140 L322 110" />
      {/* crane */}
      <path d="M240 130 V112 H252 V130 M246 112 L160 40 M252 112 L166 38 M160 40 L166 38 M163 40 V78" />
      <path d="M159 78 h8 v6 h-8 z" />
      {/* flare boom */}
      <path d="M200 200 L120 150 M200 210 L124 158 M120 150 l-6 -10" />
      {/* water */}
      <path d="M20 420 C60 414 100 426 140 420 S220 414 260 420 S340 426 380 420 S460 414 500 420 S560 426 590 420" />
      <path d="M60 438 C100 432 140 444 180 438 S260 432 300 438 S380 444 420 438 S500 432 540 438" opacity="0.6" />
      {/* supply vessel */}
      <path d="M440 412 L452 396 H560 L575 380 L582 412 Z" />
      <path d="M520 396 V372 H548 V396 M528 372 V360 H540 V372 M534 360 V348" />
      <path d="M460 396 V388 H500 V396" />
    </svg>
  );
}
