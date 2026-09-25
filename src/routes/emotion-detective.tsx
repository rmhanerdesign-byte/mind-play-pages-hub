import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/mindplay/Reveal";
import { SiteFooter } from "@/components/mindplay/SiteFooter";
import { SiteHeader } from "@/components/mindplay/SiteHeader";

const title = "Get Emotion Detective — MindPlay Media Studios";
const description =
  "Play or install Emotion Detective, a daily brain healthy game from MindPlay Media Studios.";

export const Route = createFileRoute("/emotion-detective")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EmotionDetectivePage,
});

function EmotionDetectivePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="vignette relative min-h-[82svh] overflow-hidden bg-ink px-6 pb-24 pt-36 md:px-10 md:pt-48">
          <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-[10px] tracking-[0.42em] uppercase text-primary/80">
              MindPlay Media Studios Presents
            </p>
            <h1 className="mt-7 font-display text-4xl leading-none sm:text-6xl">
              Emotion Detective
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Crack one emotional case every day, reconstruct the evidence,
              face the panel of four judges, and share your score.
            </p>

            <div className="mx-auto mt-12 max-w-xl border border-primary/35 bg-surface/75 p-6 text-left sm:p-8">
              <p className="text-center text-[10px] tracking-[0.3em] uppercase text-primary/80">
                Choose how you want to enter
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://daily-emotion-spotlight.lovable.app/install?from=mindplay"
                  className="bg-primary px-5 py-4 text-center font-display text-base tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  INSTALL EMOTION DETECTIVE
                </a>
                <a
                  href="https://daily-emotion-spotlight.lovable.app/?start=assignments"
                  className="border border-primary/55 bg-background/50 px-5 py-4 text-center font-display text-base tracking-[0.2em] text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  PLAY TODAY'S CASE
                </a>
              </div>

              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                No sign-in is required to try today&apos;s case. Website installation
                adds the Emotion Detective icon to your device.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <span className="border border-border/70 px-4 py-2.5 text-center text-[9px] tracking-[0.2em] uppercase text-muted-foreground/75">
                  App Store · Coming Soon
                </span>
                <span className="border border-border/70 px-4 py-2.5 text-center text-[9px] tracking-[0.2em] uppercase text-muted-foreground/75">
                  Google Play · Coming Soon
                </span>
              </div>
            </div>

            <p className="mt-9 text-[10px] tracking-[0.24em] uppercase text-muted-foreground/70">
              Not Just Recovery — Rediscovery
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
