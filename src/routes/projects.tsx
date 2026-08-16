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
            <p className="mt-10 text-[10px] tracking-[0.28em] uppercase text-muted-foreground/70">
              First projects being prepared
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
