"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1567538096631-e7fb1d7f1d36?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505797149-35ebcd28a458?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
];

export function Featured() {
  const { t } = useLocale();
  return (
    <section id="shop" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
              {t.featured.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {t.featured.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/70">
              {t.featured.lead}
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {t.featured.viewAll}
            <span className="rtl:-scale-x-100">→</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.featured.products.map((p, i) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={PRODUCT_IMAGES[i]}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {p.tag && (
                  <span className="absolute start-4 top-4 rounded-full bg-background px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground">
                    {p.tag}
                  </span>
                )}
                <button className="absolute end-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">{p.price}</p>
                </div>
                <button className="inline-flex size-9 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:bg-foreground hover:text-background">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
