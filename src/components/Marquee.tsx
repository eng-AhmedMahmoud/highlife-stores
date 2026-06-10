"use client";

import { useLocale } from "./LocaleProvider";

export function Marquee() {
  const { t } = useLocale();
  const items = [...t.marquee, ...t.marquee, ...t.marquee];
  return (
    <div className="overflow-hidden border-b border-line bg-foreground text-background">
      <div className="flex w-max animate-marquee gap-12 py-3 text-xs uppercase tracking-[0.2em]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {item}
            <span className="size-1 rounded-full bg-background/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
