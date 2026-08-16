import { cn } from "@/lib/utils";

/**
 * MindPlay eye / play emblem: an almond eye whose iris holds a play triangle.
 */
export function Emblem({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      role="img"
      aria-label="MindPlay eye and play emblem"
      className={cn("h-auto w-full", animate && "animate-iris", className)}
    >
      <defs>
        <linearGradient id="mp-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.1 78)" />
          <stop offset="45%" stopColor="oklch(0.92 0.06 92)" />
          <stop offset="70%" stopColor="oklch(0.82 0.115 88)" />
          <stop offset="100%" stopColor="oklch(0.55 0.09 76)" />
        </linearGradient>
        <radialGradient id="mp-iris-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.82 0.115 88 / 45%)" />
          <stop offset="100%" stopColor="oklch(0.82 0.115 88 / 0%)" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="60" r="52" fill="url(#mp-iris-glow)" />

      {/* eye outline */}
      <path
        d="M6 60C36 18 68 4 100 4s64 14 94 56c-30 42-62 56-94 56S36 102 6 60Z"
        fill="none"
        stroke="url(#mp-gold)"
        strokeWidth="1.6"
        opacity="0.95"
      />
      <path
        d="M28 60c22-30 46-42 72-42s50 12 72 42c-22 30-46 42-72 42S50 90 28 60Z"
        fill="none"
        stroke="url(#mp-gold)"
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* iris */}
      <circle
        cx="100"
        cy="60"
        r="31"
        fill="none"
        stroke="url(#mp-gold)"
        strokeWidth="1.4"
      />
      <circle
        cx="100"
        cy="60"
        r="22"
        fill="oklch(0.17 0.006 265)"
        stroke="url(#mp-gold)"
        strokeWidth="0.6"
        opacity="0.9"
      />

      {/* play triangle */}
      <path d="M92 49.5 116 60 92 70.5Z" fill="url(#mp-gold)" />

      {/* lashes / rays */}
      <g stroke="url(#mp-gold)" strokeWidth="1" opacity="0.5">
        <path d="M100 4V-6" />
        <path d="M100 116v10" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display tracking-[0.34em] uppercase text-gold-gradient",
        className,
      )}
    >
      MindPlay
    </span>
  );
}
