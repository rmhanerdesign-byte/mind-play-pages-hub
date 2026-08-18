import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import doorVideo from "@/assets/door-master.mp4.asset.json";
import doorPoster from "@/assets/door-master-poster.jpg.asset.json";
import placardBlank from "@/assets/mindplay-placard-blank-v2.png";
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

      if (played && typeof played.catch === "function") {
        played.catch(go);
      }
    } catch {
      go();
    }
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* approved MindPlay metallic placard */}
      <div className="relative w-full max-w-[220px]">
        <img
          src={placardBlank}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="block h-auto w-full select-none"
        />

        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center font-display text-[11px] font-bold italic tracking-[0.08em] uppercase text-[#ffd84a] sm:text-xs"
          style={{
            textShadow:
              "0 1px 2px rgba(0,0,0,0.95), 0 0 8px rgba(255,205,55,0.38)",
          }}
        >
          {label}
        </span>
      </div>

      {/* Runway door master — animation remains untouched */}
      <button
        type="button"
        onClick={open}
        aria-label={`Enter ${label}`}
        className="mt-3 mx-auto block w-full max-w-[190px] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
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
          style={{
            aspectRatio: DOOR_ASPECT,
            objectFit: "contain",
          }}
        />
      </button>
    </div>
  );
}
