/**
 * Aurora motion sourced from the project's ORIGINAL approved hero video
 * (src/assets/hero-video.mp4) — the last implementation in this project where
 * the aurora movement was genuinely, visibly flowing.
 *
 * The approved static master artwork stays exactly as-is. The video is layered
 * ON TOP of it, but:
 *  - masked strictly to the sky wings and the outer lake band, so the eye,
 *    wordmark, taglines, buttons, nav, ornaments, mountains and horizon are
 *    never covered,
 *  - blended additively (mix-blend-screen), so the video's near-black areas
 *    contribute nothing and only its moving colored aurora light shows through
 *    — the master art can only gain light, never be muted or washed out,
 *  - pointer-events-none, zero layout impact.
 *
 * iOS Safari notes (playback fix, no visual change intended):
 *  - The two masks are applied on SEPARATE nested elements instead of two mask
 *    layers on one element with `mask-composite: intersect`. WebKit does not
 *    support multi-layer mask compositing the same way, which could blank the
 *    layer or ignore the mask entirely on iPhone.
 *  - mix-blend-mode lives on the <video> itself, not on the masked wrapper;
 *    a masked element creates its own stacking/compositing context in WebKit
 *    and the blend could be dropped.
 *  - `muted` is also set imperatively (React does not always reflect the
 *    attribute before the first play attempt) and `webkit-playsinline` is set
 *    for older iOS.
 *  - Playback is re-nudged on visibilitychange / pageshow (iOS pauses media
 *    when a tab is backgrounded or restored from the page cache) and on the
 *    first user interaction, which is the only reliable recovery when Low
 *    Power Mode blocks autoplay.
 */
import { useEffect, useRef } from "react";

import heroVideo from "@/assets/hero-video.mp4.asset.json";

type Band = {
  /** Band position within the artwork, in % of artwork height. */
  top: number;
  height: number;
  /** Additive strength of this band. */
  opacity: number;
  /** Softening blur. */
  blur: string;
  /** How the video frame is anchored inside the band. */
  objectPosition: string;
  /** Extra scale so the video's aurora fills the band. */
  scale: number;
  /** Vertical flip (used for the lake reflection band). */
  flip?: boolean;
  /** Vertical mask (band fade). */
  mask: string;
  /** Horizontal mask keeping the central branding / copy column clear. */
  centreMask: string;
};

/**
 * Fully clears the vertical centre column where the eye, wordmark, taglines,
 * buttons and nav live. The centre is 100% transparent (no motion light at all),
 * only the outer left/right streamer wings stay visible.
 * `soft` is kept for API compatibility and ignored.
 */
export const centreClear = (_soft?: number) =>
  `linear-gradient(to right, black 0%, black 20%, transparent 20%, transparent 80%, black 80%, black 100%)`;


export type AuroraVideoProps = {
  sky: Band;
  water: Band;
  /**
   * Mobile master and source video share the same 2:3 composition. In this
   * mode one full-frame video preserves the source streamers' exact position
   * and motion instead of re-cropping them into two shallow video elements.
   */
  exactSourceFrame?: boolean;
};

export function AuroraVideo({ sky, water, exactSourceFrame = false }: AuroraVideoProps) {
  const skyRef = useRef<HTMLVideoElement>(null);
  const waterRef = useRef<HTMLVideoElement>(null);
  const exactRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nudge = () => {
      for (const el of [skyRef.current, waterRef.current, exactRef.current]) {
        if (!el) continue;
        const host = el.closest("section");
        if (host && window.getComputedStyle(host).display === "none") {
          el.pause();
          continue;
        }
        if (reduce) {
          el.pause();
          continue;
        }
        // iOS refuses autoplay unless the element is genuinely muted/inline.
        el.muted = true;
        el.defaultMuted = true;
        el.volume = 0;
        el.setAttribute("muted", "");
        el.setAttribute("playsinline", "");
        el.setAttribute("webkit-playsinline", "true");
        // Slightly faster than real time so the ribbons' own shape change in the
        // source footage reads as flowing within the first couple of seconds.
        try {
          el.playbackRate = 1.6;
        } catch {
          /* ignore */
        }
        if (el.paused) {
          const p = el.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      }
    };

    nudge();

    if (reduce) return;

    const onInteract = () => nudge();
    document.addEventListener("visibilitychange", nudge);
    window.addEventListener("pageshow", nudge);
    window.addEventListener("touchstart", onInteract, { passive: true });
    window.addEventListener("pointerdown", onInteract, { passive: true });
    // A couple of late retries cover iOS deferring playback until decode is ready.
    const timers = [setTimeout(nudge, 600), setTimeout(nudge, 2000)];

    return () => {
      document.removeEventListener("visibilitychange", nudge);
      window.removeEventListener("pageshow", nudge);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  if (exactSourceFrame) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 7%, black 10%, black 59%, transparent 61%, transparent 74%, black 76%, black 88.5%, transparent 91%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 7%, black 10%, black 59%, transparent 61%, transparent 74%, black 76%, black 88.5%, transparent 91%, transparent 100%)",
        }}
      >
        <div
          className="h-full w-full"
          style={{
            maskImage: centreClear(),
            WebkitMaskImage: centreClear(),
          }}
        >
          <video
            ref={exactRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            disablePictureInPicture
            preload="auto"
            tabIndex={-1}
          >
            <source src={heroVideo.url} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  const bands: Array<{ key: string; band: Band; ref: typeof skyRef }> = [
    { key: "sky", band: sky, ref: skyRef },
    { key: "water", band: water, ref: waterRef },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bands.map(({ key, band, ref }) => (
        <div
          key={key}
          className="absolute inset-x-0 overflow-hidden"
          style={{
            top: `${band.top}%`,
            height: `${band.height}%`,
            opacity: band.opacity,
            maskImage: band.mask,
            WebkitMaskImage: band.mask,
          }}
        >
          {/* Second, separate mask element: keeps the branding column clear
              without relying on multi-layer mask compositing. */}
          <div
            className="h-full w-full"
            style={{
              maskImage: band.centreMask,
              WebkitMaskImage: band.centreMask,
            }}
          >
            <video
              ref={ref}
              className="h-full w-full"
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              disablePictureInPicture
              preload="auto"
              tabIndex={-1}
              style={{
                objectFit: "cover",
                objectPosition: band.objectPosition,
                transform: `scale(${band.scale})${band.flip ? " scaleY(-1)" : ""}`,
                // Keep only the saturated colored streamers: high contrast +
                // saturation crushes the video's soft grey haze/glow to black
                // (which contributes nothing under `screen`), while the vivid
                // ribbons survive. Minimal blur so the ribbons stay ribbons
                // instead of becoming a cloudy wash.
                filter: `blur(${band.blur}) saturate(2.2) contrast(1.75) brightness(0.85)`,

                mixBlendMode: "screen",
                willChange: "transform",
              }}
            >
              <source src={heroVideo.url} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Sky band preset: fade top/bottom. */
export const skyMask = (fadeTop: number, fadeBottom: number) =>
  `linear-gradient(to bottom, transparent 0%, black ${fadeTop}%, black ${fadeBottom}%, transparent 100%)`;

/** Lake band preset: strongest at the shoreline, fading toward the viewer. */
export const waterMask = () =>
  `linear-gradient(to bottom, black 0%, oklch(0 0 0 / 55%) 55%, transparent 100%)`;
