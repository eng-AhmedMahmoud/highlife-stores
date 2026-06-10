"use client";

import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { t, locale, toggleLocale } = useLocale();
  const cols = [
    { title: t.footer.shop, links: t.footer.shopLinks },
    { title: t.footer.help, links: t.footer.helpLinks },
    { title: t.footer.company, links: t.footer.companyLinks },
  ];
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-foreground" />
              <span className="font-display text-2xl tracking-tight">
                HighLife
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-foreground/65">
              {t.footer.tagline}
            </p>
            <button
              onClick={toggleLocale}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
            >
              <Globe />
              {locale === "en" ? "العربية" : "English"}
            </button>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground/85 transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
              Social
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://www.facebook.com/highlifestores/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/85 hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/85 hover:text-foreground">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/85 hover:text-foreground">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center">
          <p>{t.footer.rights}</p>
          <p>Cairo · Egypt</p>
        </div>
      </div>
    </footer>
  );
}

function Globe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
