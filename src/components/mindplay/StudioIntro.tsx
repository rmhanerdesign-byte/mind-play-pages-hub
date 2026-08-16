import { Reveal } from "./Reveal";

const pillars = [
  {
    label: "One studio",
    text: "MindPlay is the house. Every production shares its craft, tone, and care.",
  },
  {
    label: "Many worlds",
    text: "Each project is its own world — wellness, sound, screen, or interactive.",
  },
  {
    label: "Always in motion",
    text: "Some worlds are live, some are in production, some are still unnamed.",
  },
];

export function StudioIntro() {
  return (
    <section id="studio" className="relative bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] tracking-[0.42em] uppercase text-primary/80">
            The Studio
          </p>
          <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            MindPlay is not one project.
            <span className="block text-muted-foreground">
              It is a collection of creative worlds.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-border/60 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 140}>
              <div className="h-full bg-surface/40 p-8 md:p-10">
                <p className="text-[10px] tracking-[0.34em] uppercase text-primary/80">
                  {p.label}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
