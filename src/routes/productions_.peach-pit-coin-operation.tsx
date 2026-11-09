import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/mindplay/SiteHeader";
import { SiteFooter } from "@/components/mindplay/SiteFooter";

export const Route = createFileRoute("/productions/peach-pit-coin-operation")({
  head: () => ({ meta: [
    { title: "Jealous Lee Ruckus & The Peach Pit Coin Operation | MindPlay" },
    { name: "description", content: "Music, videos, and upcoming releases from Jealous Lee Ruckus & The Peach Pit Coin Operation, a MindPlay Media Studios production." }
  ] }),
  component: PeachPit,
});

function PeachPit() {
  const [videoAvailable, setVideoAvailable] = useState(true);
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#100d13] text-[#f5eaf0]">
        <section className="relative overflow-hidden border-b border-[#bd8c78]/25 px-6 pb-24 pt-36 md:px-10 md:pt-48" style={{background:"radial-gradient(ellipse at 78% 20%, #4c2547 0%, #241622 45%, #100d13 85%)"}}>
          <div className="mx-auto max-w-6xl">
            <Link to="/productions" className="text-xs uppercase tracking-[0.25em] text-[#e5b28e] hover:underline">← Back to Studios</Link>
            <p className="mt-16 text-xs uppercase tracking-[0.4em] text-[#e6a77f]">MindPlay Media Studios presents</p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">Jealous Lee Ruckus <span className="text-[#f5b88b]">&</span><br/>The Peach Pit Coin Operation</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#d6c2d0]">Tribal percussion. Dark synth. Driving bass. Fuzzy guitars. Unapologetic creative mischief.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em]">
              <a className="border border-[#e6a77f] px-5 py-3 text-[#f5b88b] hover:bg-[#e6a77f]/10" href="#videos">Videos & Visuals</a>
              <a className="border border-[#a4778f]/60 px-5 py-3" href="#releases">Upcoming Releases</a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-24 px-6 py-20 md:px-10">
          <section id="videos" aria-labelledby="videos-heading">
            <p className="text-xs uppercase tracking-[0.34em] text-[#e6a77f]">The moving picture show</p>
            <h2 id="videos-heading" className="mt-3 font-display text-4xl sm:text-5xl">Videos & Visuals</h2>
            <div className="mt-8 overflow-hidden border border-[#b78d92]/40 bg-black">
              {videoAvailable ? (
                <video controls playsInline preload="metadata" className="aspect-video w-full bg-black object-contain" onError={() => setVideoAvailable(false)}>
                  <source src="/videos/warning-promo.mp4" type="video/mp4"/>
                  Your browser does not support video playback.
                </video>
              ) : (
                <div className="flex aspect-video items-center justify-center p-8 text-center text-[#d4b7c9]">
                  <p>WARNING — Promotional video<br/><span className="mt-3 block text-sm text-[#a996a4]">Video upload pending</span></p>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-2xl">WARNING</h3>
                <p className="mt-2 text-sm text-[#bfa9b7]">Official promotional video · Jealous Lee Ruckus & The Peach Pit Coin Operation</p>
              </div>
            </div>
          </section>

          <section id="releases" aria-labelledby="releases-heading">
            <p className="text-xs uppercase tracking-[0.34em] text-[#e6a77f]">What's coming down the groove</p>
            <h2 id="releases-heading" className="mt-3 font-display text-4xl sm:text-5xl">Upcoming Releases</h2>
            <article className="mt-8 border border-[#b78d92]/40 bg-[#211724] p-7 sm:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#e6a77f]">Album in development</p>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl">All Go Rhythms / algorhythms</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#d1bac8]">An original collision of tribal rhythms, dark wave atmosphere, raw guitars and melodies with an afterlife. More music and release announcements are on the way.</p>
            </article>
          </section>

          <section aria-labelledby="about-heading">
            <p className="text-xs uppercase tracking-[0.34em] text-[#e6a77f]">Meet the operation</p>
            <h2 id="about-heading" className="mt-3 font-display text-4xl sm:text-5xl">JLR & The Coin Operators</h2>
            <p className="mt-6 max-w-3xl text-base leading-loose text-[#d1bac8]">Jealous Lee Ruckus leads The Peach Pit Coin Operation: a restless creative experiment built on hypnotic grooves, fearless voices, and unexpected sonic turns. The members are the Coin Operators. Part music act, part storytelling machine, all MindPlay.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
