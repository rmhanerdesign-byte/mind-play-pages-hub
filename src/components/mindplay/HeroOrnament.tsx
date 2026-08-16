/**
 * Decorative gold rule + diamond ornament used to finish the black
 * top and bottom areas of the mobile hero.
 */
export function HeroOrnament({
  className,
  idSuffix = "",
}: {
  className?: string;
  idSuffix?: string;
}) {
  const gid = `mp-orn${idSuffix}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 840 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="840" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.62 0.1 78)" stopOpacity="0.15" />
          <stop offset="0.2" stopColor="oklch(0.82 0.115 88)" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="oklch(0.93 0.06 92)" />
          <stop offset="0.8" stopColor="oklch(0.82 0.115 88)" stopOpacity="0.9" />
          <stop offset="1" stopColor="oklch(0.62 0.1 78)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* long tapered double rules */}
      <path d="M14 20 H358" stroke={`url(#${gid})`} strokeWidth="3" strokeLinecap="round" />
      <path d="M482 20 H826" stroke={`url(#${gid})`} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 13.5 H352" stroke={`url(#${gid})`} strokeWidth="1" strokeLinecap="round" opacity="0.75" />
      <path d="M488 13.5 H780" stroke={`url(#${gid})`} strokeWidth="1" strokeLinecap="round" opacity="0.75" />

      {/* end caps */}
      <circle cx="8" cy="20" r="3.5" fill={`url(#${gid})`} />
      <circle cx="832" cy="20" r="3.5" fill={`url(#${gid})`} />

      {/* center diamond */}
      <path d="M420 3 L437 20 L420 37 L403 20 Z" stroke={`url(#${gid})`} strokeWidth="2" />
      <path d="M420 12 L428 20 L420 28 L412 20 Z" fill={`url(#${gid})`} />
    </svg>
  );
}
