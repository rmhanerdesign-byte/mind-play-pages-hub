import mountainImage from "@/assets/mountain-divider.jpg";

/**
 * Short cinematic banner separating the studio content from Contact Us.
 */
export function MountainDivider() {
  return (
    <div className="relative overflow-hidden bg-ink">
      <img
        src={mountainImage}
        alt="Night sky and mountains mirrored in still water"
        width={1920}
        height={640}
        loading="lazy"
        className="h-28 w-full object-cover object-center opacity-80 sm:h-40 md:h-52"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink"
      />
      <div aria-hidden className="hairline absolute inset-x-0 bottom-0 h-px" />
    </div>
  );
}
