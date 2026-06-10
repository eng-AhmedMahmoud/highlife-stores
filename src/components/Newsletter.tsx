"use client";

import { useState } from "react";
import { useLocale } from "./LocaleProvider";

export function Newsletter() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="contact" className="border-t border-line bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-60">
            {t.newsletter.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {t.newsletter.title}
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="max-w-md text-base leading-relaxed opacity-80">
            {t.newsletter.lead}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="flex-1 rounded-full border border-background/20 bg-transparent px-5 py-3 text-sm text-background placeholder:text-background/40 focus:border-background focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              {done ? "✓" : t.newsletter.cta}
            </button>
          </form>
          <p className="mt-3 text-xs opacity-50">{t.newsletter.note}</p>
        </div>
      </div>
    </section>
  );
}
