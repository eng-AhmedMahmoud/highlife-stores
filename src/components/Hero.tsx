"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-20">
        <div className="md:col-span-6 md:pt-10">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted animate-fade-up">
            {t.hero.eyebrow}
          </p>
          <h1
            className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            {t.hero.title}
          </h1>
          <p
            className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Stat value={t.hero.stat1Value} label={t.hero.stat1Label} />
            <Stat value={t.hero.stat2Value} label={t.hero.stat2Label} />
            <Stat value={t.hero.stat3Value} label={t.hero.stat3Label} />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative grid grid-cols-6 gap-3">
            <div className="relative col-span-4 aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Modern living room"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
                <Image
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
                  alt="Office chair detail"
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-foreground text-background">
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <span className="text-xs uppercase tracking-[0.2em] opacity-70">
                    01 / 06
                  </span>
                  <div>
                    <p className="font-display text-2xl leading-tight">
                      Editorial
                    </p>
                    <p className="mt-1 text-xs opacity-70">2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}
