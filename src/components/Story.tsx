"use client";

import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export function Story() {
  const { t } = useLocale();
  const bullets = [
    { title: t.story.bullet1Title, body: t.story.bullet1Body },
    { title: t.story.bullet2Title, body: t.story.bullet2Body },
    { title: t.story.bullet3Title, body: t.story.bullet3Body },
  ];
  return (
    <section id="about" className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=80"
              alt="Workshop"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
            {t.story.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {t.story.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            {t.story.body}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {bullets.map((b, i) => (
              <div key={i}>
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-full border border-line font-display text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-medium">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            {t.story.cta}
            <span className="rtl:-scale-x-100">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
