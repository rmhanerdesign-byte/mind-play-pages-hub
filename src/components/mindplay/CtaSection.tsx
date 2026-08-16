import { Link } from "@tanstack/react-router";

import { Emblem } from "./Emblem";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="vignette relative overflow-hidden bg-background px-6 py-32 md:px-10 md:py-44">
      <div
        aria-hidden
        className="animate-breathe pointer-events-none absolute left-1/2 top-1/2 size-[min(120vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.115 88 / 10%) 0%, transparent 65%)",
        }}
      />
      <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <Emblem className="w-16 opacity-80" />
        <h2 className="mt-10 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          Step inside the studio
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Collaborations, productions, and quiet conversations about what we are
          building next.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/productions"
            className="sheen rounded-sm border border-primary/50 bg-primary/5 px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-primary transition-all duration-500 hover:border-primary hover:bg-primary/12"
          >
            Enter MindPlay
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-border/70 px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-muted-foreground transition-all duration-500 hover:border-foreground/40 hover:text-foreground"
          >
            Contact the Studio
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
