"use client";

import { useLocale } from "./LocaleProvider";

const ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h13v8H3zM16 10h4l1 2v3h-5M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9M3 12V3M3 12h9" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
];

export function Values() {
  const { t } = useLocale();
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
            {t.values.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {t.values.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-white"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-line">
                <span className="block size-5">{ICONS[i]}</span>
              </span>
              <div>
                <h3 className="text-base font-medium">{it.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
