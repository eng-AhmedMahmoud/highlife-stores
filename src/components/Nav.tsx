"use client";

import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";

export function Nav() {
  const { t, locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#shop", label: t.nav.shop },
    { href: "#collections", label: t.nav.collections },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-foreground" />
          <span className="font-display text-xl tracking-tight">
            HighLife
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="hidden rounded-full border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
            aria-label="Toggle language"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
          <button
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
            aria-label={t.nav.cart}
          >
            {t.nav.cart}
            <span className="ms-2 inline-flex size-5 items-center justify-center rounded-full bg-background/15 text-[10px]">
              0
            </span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-foreground transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-foreground transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base text-foreground/90"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLocale();
              setOpen(false);
            }}
            className="mt-2 self-start rounded-full border border-line px-4 py-2 text-sm"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
}
