import { Link } from "@tanstack/react-router";

import { DoorPortal } from "./DoorPortal";
import { Reveal } from "./Reveal";

const doors = [
  { label: "About", to: "/about" },
  { label: "Studios", to: "/productions" },
  { label: "Projects", to: "/projects" },
  { label: "Creative", to: "/creative-assistance" },
];


const pills: { label: string; to: string; hash?: string }[] = [
  { label: "Community", to: "/community" },
  { label: "Contact", to: "/contact" },
  { label: "Share Your Idea", to: "/creative-assistance", hash: "share-your-idea" },
];

export function DoorwaySection() {
  return (
    <section id="doorway" className="bg-ink px-6 py-12 md:px-10 md:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <h2
          className="text-center font-display text-xs font-medium tracking-[0.34em] uppercase text-primary sm:text-sm md:text-base"
          style={{
            textShadow:
              "0 0 18px oklch(0.85 0.12 90 / 0.45), 0 0 44px oklch(0.80 0.12 88 / 0.25)",
          }}
        >
          Pick a door to start your journey
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-x-2 gap-y-0 sm:gap-x-4 md:mt-20 md:grid-cols-4 md:gap-x-16">
          {doors.map((d) => (
            <DoorPortal key={d.label} label={d.label} to={d.to} />
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4 md:mt-24">
          {pills.map((p) => (
            <Link
              key={p.label}
              to={p.to}
              hash={p.hash}
              className="rounded-[3px] px-6 py-3 text-[10px] font-semibold tracking-[0.26em] uppercase transition-all duration-300 hover:brightness-[1.04]"
              style={{
                color: "oklch(0.18 0.004 260)",
                backgroundImage:
                  "repeating-linear-gradient(41deg, oklch(0 0 0 / 0.03) 0px, oklch(0 0 0 / 0.03) 1px, transparent 1px, transparent 3px), linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.94 0.002 260) 100%)",
                boxShadow:
                  "0 8px 18px -8px oklch(0 0 0 / 0.85), inset 0 1px 0 oklch(1 0 0), inset 0 -2px 3px oklch(0 0 0 / 0.16), 0 0 0 1px oklch(0.85 0.003 260)",
              }}
            >
              {p.label}
            </Link>
          ))}

        </div>
      </Reveal>
    </section>
  );
}
