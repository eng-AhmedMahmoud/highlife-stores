"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

const IMAGES = [
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80",
];

export function Categories() {
  const { t } = useLocale();
  return (
    <section id="collections" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
              {t.categories.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {t.categories.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/70">
            {t.categories.lead}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.categories.items.map((c, i) => (
            <a
              key={c.title}
              href="#shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-foreground"
            >
              <Image
                src={IMAGES[i]}
                alt={c.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-background">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide opacity-80">
                    {c.count}
                  </p>
                </div>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:scale-110">
                  <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rtl:-scale-x-100"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
