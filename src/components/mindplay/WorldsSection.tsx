import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { productions } from "@/lib/productions";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function WorldsSection() {
  const featured = productions.find((p) => p.featured)!;
  const rest = productions.filter((p) => !p.featured);

  return (
    <section id="worlds" className="relative bg-ink px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] tracking-[0.42em] uppercase text-primary/80">
              Productions
            </p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              The MindPlay slate
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Distinct projects, one studio signature. Open any production to see
            what it covers and where it sits in the studio.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-16">
          <WorldCard production={featured} featured />
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <WorldCard production={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function WorldCard({
  production,
  featured = false,
}: {
  production: (typeof productions)[number];
  featured?: boolean;
}) {
  const hasPage = Boolean(production.detail);

  const body = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.115 88 / 16%) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.34em] uppercase text-primary/80">
            {production.kind}
          </span>
          <span className="text-[9px] tracking-[0.26em] uppercase text-muted-foreground/70">
            {production.status}
          </span>
        </div>

        <h3
          className={cn(
            "mt-6 font-display leading-tight text-foreground",
            featured ? "text-3xl md:text-5xl" : "text-2xl",
          )}
        >
          {production.name}
        </h3>

        <p
          className={cn(
            "mt-4 text-sm leading-relaxed text-muted-foreground",
            featured && "max-w-xl md:text-base",
          )}
        >
          {production.blurb}
        </p>

        <div
          className={cn(
            "mt-8 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase transition-colors duration-500",
            hasPage
              ? "text-primary/70 group-hover:text-primary"
              : "text-muted-foreground/60",
          )}
        >
          {hasPage ? "Open production" : "In development"}
          {hasPage ? (
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : null}
        </div>
      </div>
    </>
  );

  const shell = cn(
    "sheen group relative block h-full overflow-hidden border border-border/60 bg-surface/50 transition-all duration-700",
    featured ? "p-10 md:p-14" : "p-8",
    hasPage
      ? "hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-raised/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
      : "border-dashed border-border/50",
  );

  if (!hasPage) {
    return <article className={shell}>{body}</article>;
  }

  return (
    <Link
      to="/productions/$slug"
      params={{ slug: production.slug }}
      aria-label={`Open ${production.name}`}
      className={shell}
    >
      {body}
    </Link>
  );
}

