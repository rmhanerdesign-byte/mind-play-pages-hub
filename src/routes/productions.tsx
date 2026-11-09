import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/mindplay/SiteHeader";
import { SiteFooter } from "@/components/mindplay/SiteFooter";

export const Route = createFileRoute("/productions")({
  head: () => ({ meta: [{ title: "Studios — MindPlay Media Studios" }, { name: "description", content: "Explore MindPlay Media Studios creative worlds and the Peach Pit Coin Operation music project." }] }),
  component: Studios,
});

function Studios() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-ink px-6 pb-28 pt-36 md:px-10 md:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">MindPlay Media Studios</p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl">STUDIOS</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">Step inside our creative worlds. Music, film, interactive experiences, and ideas in motion.</p>
          <Link to="/productions/peach-pit-coin-operation" className="group relative mt-14 block overflow-hidden border border-[#ca926a]/60 bg-gradient-to-br from-[#321d33] via-[#14131c] to-black p-8 transition-all hover:border-[#f0ba8b] sm:p-12">
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#edbb92]">Music studio · Enter the folder</span>
            <div className="mt-8 text-6xl" aria-hidden="true">🍑</div>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">The Peach Pit<br/>Coin Operation</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#e4d4dc]">Jealous Lee Ruckus and the Coin Operators: tribal punk, dark synth, dirty grooves, and cinematic mischief.</p>
            <span className="mt-8 inline-block border border-[#f0ba8b]/60 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#f0ba8b] group-hover:bg-[#f0ba8b]/10">Open studio →</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
