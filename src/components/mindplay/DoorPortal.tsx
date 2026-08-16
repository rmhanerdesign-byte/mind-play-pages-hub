import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import doorVideo from "@/assets/door-master.mp4.asset.json";
import doorPoster from "@/assets/door-master-poster.jpg.asset.json";
import { cn } from "@/lib/utils";

/** Native aspect ratio of the Runway master door asset (496 x 864). */
const DOOR_ASPECT = "496 / 864";

type DoorPortalProps = {
  /** Placard text above the door. */
  label: string;
  /** Destination pathname, navigated when the opening animation ends. */
  to: string;
  className?: string;
};

export function DoorPortal({ label, to, className }: DoorPortalProps) {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigatedRef = useRef(false);
  const [opening, setOpening] = useState(false);

  function go() {
    if (navigatedRef.current) return;
    navigatedRef.current = true;
    navigate({ to });
  }

  function open() {
    if (opening) return;
    setOpening(true);
    const video = videoRef.current;
    if (!video) {
      go();
      return;
    }
    try {
      video.currentTime = 0;
      const played = video.play();
      if (played && typeof played.catch === "function") played.catch(go);
    } catch {
      go();
    }
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* raised white architectural placard */}
      <span
        className="rounded-[3px] px-4 py-2 text-[9px] font-semibold tracking-[0.32em] uppercase sm:text-[10px]"
        style={{
          color: "oklch(0.18 0.004 260)",
          backgroundImage:
            "repeating-linear-gradient(41deg, oklch(0 0 0 / 0.03) 0px, oklch(0 0 0 / 0.03) 1px, transparent 1px, transparent 3px), linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.94 0.002 260) 100%)",
          boxShadow:
            "0 6px 14px -6px oklch(0 0 0 / 0.85), inset 0 1px 0 oklch(1 0 0), inset 0 -2px 3px oklch(0 0 0 / 0.16), 0 0 0 1px oklch(0.85 0.003 260)",
        }}
      >
        {label}
      </span>

      {/* door slot — Runway master asset only, native aspect ratio, no transforms */}
      <button
        type="button"
        onClick={open}
        aria-label={`Enter ${label}`}
        className="mt-6 mx-auto block w-full max-w-[190px] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
      >
        <video
          ref={videoRef}
          src={doorVideo.url}
          poster={doorPoster.url}
          muted
          playsInline
          preload="auto"
          onEnded={go}
          className="block h-auto w-full"
          style={{ aspectRatio: DOOR_ASPECT, objectFit: "contain" }}
        />
      </button>
    </div>
  );
}
