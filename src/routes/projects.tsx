import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/mindplay/SiteHeader";
import { SiteFooter } from "@/components/mindplay/SiteFooter";
import { Reveal } from "@/components/mindplay/Reveal";

const title = "Projects — MindPlay Media Studios";
const description =
  "Individual MindPlay projects and works in progress, separate from the studio slate.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="vignette relative min-h-[70svh] overflow-hidden bg-ink px-6 pb-28 pt-40 md:px-10 md:pt-52">
          <Reveal className="relative z-10 mx-auto max-w-3xl">
            <p className="text-[10px] tracking-[0.42em] uppercase text-primary/80">
              Projects
            </p>
            <h1 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
              Individual works
            </h1>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Studios are the ongoing production houses. Projects are the
              individual pieces of work that come out of them — listed here as
              they become ready to show.
            </p>
            <article className="mt-12 border border-primary/35 bg-surface/70 p-6 shadow-[0_24px_80px_-48px_oklch(0.82_0.115_88_/_45%)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[10px] tracking-[0.32em] uppercase text-primary/80">
                  A MindPlay Media Studios Game
                </p>
                <span className="border border-primary/30 px-3 py-1 text-[9px] tracking-[0.24em] uppercase text-primary">
                  Live
                </span>
              </div>

              <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                Emotion Detective
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Crack one emotional case every day, reconstruct the evidence,
                face the panel of four judges, and share your score.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://daily-emotion-spotlight.lovable.app/?start=assignments"
                  className="bg-primary px-5 py-3.5 text-center font-display text-sm tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  PLAY TODAY'S CASE
                </a>
                <a
                  href="/emotion-detective"
                  className="border border-primary/55 bg-background/50 px-5 py-3.5 text-center font-display text-sm tracking-[0.2em] text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  DOWNLOAD FROM MINDPLAY
                </a>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <span className="border border-border/70 px-4 py-2 text-center text-[9px] tracking-[0.2em] uppercase text-muted-foreground/75">
                  App Store · Coming Soon
                </span>
                <span className="border border-border/70 px-4 py-2 text-center text-[9px] tracking-[0.2em] uppercase text-muted-foreground/75">
                  Google Play · Coming Soon
                </span>
              </div>
            </article>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
