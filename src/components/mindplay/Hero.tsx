import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import { Emblem } from "./Emblem";

export function Hero() {
  return (
    <section className="vignette relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-6">
      {/* emerging light */}
      <div
        aria-hidden
        className="animate-breathe pointer-events-none absolute left-1/2 top-[38%] size-[min(140vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.115 88 / 14%) 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <Emblem animate className="w-40 sm:w-52 md:w-64" />

        <h1 className="animate-rise mt-10 [animation-delay:900ms]">
          <span className="block font-display text-4xl leading-none tracking-[0.22em] uppercase text-gold-gradient sm:text-6xl md:text-7xl">
            MindPlay
          </span>
          <span className="mt-4 block text-[10px] tracking-[0.5em] uppercase text-muted-foreground sm:text-xs">
            Media Studios
          </span>
        </h1>

        <div
          aria-hidden
          className="animate-rise hairline mt-10 h-px w-56 [animation-delay:1300ms]"
        />

        <p className="animate-rise mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground [animation-delay:1500ms] sm:text-lg">
          Where ideas become experiences and imagination is built into media.
        </p>

        <div className="animate-rise mt-12 flex flex-col items-center gap-4 [animation-delay:1800ms] sm:flex-row">
          <Link
            to="/productions"
            className="sheen rounded-sm border border-primary/50 bg-primary/5 px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-primary transition-all duration-500 hover:border-primary hover:bg-primary/12"
          >
            Explore the Studio
          </Link>
          <a
            href="#worlds"
            className="group flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.28em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Our Worlds
            <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
