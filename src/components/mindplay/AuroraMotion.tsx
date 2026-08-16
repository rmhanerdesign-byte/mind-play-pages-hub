/**
 * Decorative aurora motion. Purely additive (mix-blend-screen) saturated
 * ribbons that morph IN PLACE inside the sky band, plus a softer rippling
 * reflection in the lake band.
 *
 * Design constraints:
 *  - No full-width translating sheets, no fog/haze/gray layers: every layer is
 *    a narrow, strongly saturated ribbon confined to its own region.
 *  - Additive blending only, so nothing can mute or desaturate the artwork.
 *  - Absolutely positioned + pointer-events-none: zero layout impact, so the
 *    eye, wordmark, typography, mountains, buttons, nav and ornaments never move.
 *  - prefers-reduced-motion collapses all animation (global rule in styles.css).
 */
type AuroraMotionProps = {
  /** Sky band, as % of the artwork height. */
  sky: { top: number; height: number };
  /** Lake band carrying the softened reflection, as % of artwork height. */
  water: { top: number; height: number };
  /** Horizontal field multiplier; >1 widens each ribbon (mobile). */
  spread?: number;
};

/** A single aurora curtain: vertical streaks of one saturated hue family. */
function ribbon(color: string, edge: string) {
  return `repeating-linear-gradient(
      96deg,
      transparent 0 6%,
      ${edge} 9%,
      ${color} 13%,
      ${edge} 17%,
      transparent 21% 27%
    )`;
}

type RibbonDef = {
  key: string;
  /** Region within the sky band, in %. */
  left: number;
  width: number;
  top: number;
  height: number;
  background: string;
  blur: string;
  anim: string;
  opacity: number;
};

const ribbons: RibbonDef[] = [
  {
    key: "violet",
    left: 2,
    width: 46,
    top: 4,
    height: 82,
    background: ribbon("oklch(0.62 0.28 300 / 78%)", "oklch(0.5 0.24 315 / 20%)"),
    blur: "14px",
    anim: "animate-aurora-curl-a",
    opacity: 0.9,
  },
  {
    key: "cyan",
    left: 26,
    width: 50,
    top: 0,
    height: 74,
    background: ribbon("oklch(0.74 0.2 205 / 70%)", "oklch(0.6 0.19 230 / 18%)"),
    blur: "18px",
    anim: "animate-aurora-curl-b",
    opacity: 0.85,
  },
  {
    key: "magenta",
    left: 52,
    width: 46,
    top: 6,
    height: 80,
    background: ribbon("oklch(0.66 0.27 340 / 68%)", "oklch(0.55 0.24 320 / 18%)"),
    blur: "16px",
    anim: "animate-aurora-curl-c",
    opacity: 0.85,
  },
  {
    key: "emerald",
    left: 18,
    width: 62,
    top: 10,
    height: 60,
    background: ribbon("oklch(0.78 0.2 158 / 34%)", "oklch(0.66 0.18 168 / 10%)"),
    blur: "26px",
    anim: "animate-aurora-curl-d",
    opacity: 0.5,
  },
];

/** Keeps the eye / wordmark column clear of any overlay. */
const skyMask =
  "linear-gradient(to bottom, transparent 0%, black 14%, black 76%, transparent 100%), " +
  "linear-gradient(to right, black 0%, black 24%, oklch(0 0 0 / 22%) 42%, oklch(0 0 0 / 22%) 58%, black 76%, black 100%)";

export function AuroraMotion({ sky, water, spread = 1 }: AuroraMotionProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ---- sky: colored ribbons morphing in place ---- */}
      <div
        className="absolute inset-x-0 overflow-hidden mix-blend-screen"
        style={{
          top: `${sky.top}%`,
          height: `${sky.height}%`,
          maskImage: skyMask,
          WebkitMaskImage: skyMask,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        {ribbons.map((r) => {
          const w = r.width * spread;
          const left = r.left - (w - r.width) / 2;
          return (
            <div
              key={r.key}
              className={`absolute ${r.anim}`}
              style={{
                left: `${left}%`,
                width: `${w}%`,
                top: `${r.top}%`,
                height: `${r.height}%`,
                background: r.background,
                filter: `blur(${r.blur}) saturate(1.35)`,
                opacity: r.opacity,
                transformOrigin: "50% 100%",
                maskImage:
                  "linear-gradient(to bottom, black 0%, oklch(0 0 0 / 70%) 62%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, oklch(0 0 0 / 70%) 62%, transparent 100%)",
              }}
            />
          );
        })}
      </div>

      {/* ---- lake reflection: same hues, softer, slower ripple ---- */}
      <div
        className="absolute inset-x-0 overflow-hidden mix-blend-screen"
        style={{
          top: `${water.top}%`,
          height: `${water.height}%`,
          opacity: 0.7,
          maskImage:
            "linear-gradient(to bottom, black 0%, oklch(0 0 0 / 45%) 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, oklch(0 0 0 / 45%) 60%, transparent 100%)",
        }}
      >
        <div
          className="animate-aurora-ripple absolute inset-0"
          style={{
            background: ribbon(
              "oklch(0.66 0.24 292 / 55%)",
              "oklch(0.7 0.18 210 / 16%)",
            ),
            filter: "blur(14px) saturate(1.3)",
            transformOrigin: "50% 0%",
          }}
        />
      </div>
    </div>
  );
}
