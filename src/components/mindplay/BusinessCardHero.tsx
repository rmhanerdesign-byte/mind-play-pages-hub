import { Emblem } from "./Emblem";

/**
 * Homepage hero modeled on the MindPlay Media Studios business card:
 * black field, thin double gold border, gold eye/play mark, distressed gold
 * MINDPLAY lettering, spaced MEDIA STUDIOS, tagline and founder identity.
 */
export function BusinessCardHero() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 md:px-10">
      <div
        aria-hidden
        className="animate-breathe pointer-events-none absolute left-1/2 top-1/2 size-[min(130vw,860px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.115 88 / 12%) 0%, transparent 63%)",
        }}
      />

      {/* outer gold border */}
      <div className="relative z-10 mx-auto w-full max-w-4xl border border-primary/55 p-1.5 sm:p-2">
        {/* inner gold border */}
        <div className="flex flex-col items-center border border-primary/30 px-5 py-12 text-center sm:px-10 sm:py-16 md:py-24">
          <Emblem animate className="w-28 sm:w-36 md:w-44" />

          <h1 className="mt-8 flex w-full min-w-0 flex-col items-center sm:mt-10">
            <span className="distressed-gold block w-full font-display text-[clamp(2.4rem,13vw,7rem)] leading-none tracking-[0.08em] uppercase">
              MindPlay
            </span>
            <span className="mt-4 block text-[clamp(0.55rem,2.6vw,0.95rem)] tracking-[0.42em] uppercase text-primary/85 sm:mt-5">
              Media Studios
            </span>
          </h1>

          <div aria-hidden className="hairline mt-8 h-px w-40 sm:w-56" />

          <p className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[clamp(0.55rem,2.4vw,0.75rem)] tracking-[0.3em] uppercase text-muted-foreground">
            <span>Imagine</span>
            <span aria-hidden className="text-primary">
              &#9654;
            </span>
            <span>Create</span>
            <span aria-hidden className="text-primary">
              &#9654;
            </span>
            <span>Experience</span>
          </p>

          <div aria-hidden className="hairline mt-10 h-px w-24 sm:w-32" />

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="font-display text-lg tracking-[0.24em] uppercase text-gold-gradient sm:text-2xl">
              Bobby Whizkers
            </p>
            <p className="text-[9px] tracking-[0.34em] uppercase text-muted-foreground sm:text-[10px]">
              Creative Founder / CEO
            </p>
            <p className="text-[9px] tracking-[0.34em] uppercase text-muted-foreground/80 sm:text-[10px]">
              Los Angeles &bull; Global
            </p>
            <div className="mt-2 flex flex-col items-center gap-2 text-[10px] tracking-[0.24em] uppercase sm:flex-row sm:gap-6">
              <a
                href="tel:+14246664488"
                className="text-primary/90 transition-colors hover:text-primary"
              >
                424.666.4488
              </a>
              <span
                aria-hidden
                className="hidden h-3 w-px bg-border sm:block"
              />
              <a
                href="https://mindplaymedia.studio"
                className="text-primary/90 transition-colors hover:text-primary"
              >
                mindplaymedia.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
