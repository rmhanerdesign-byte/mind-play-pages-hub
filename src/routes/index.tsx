import { createFileRoute } from "@tanstack/react-router";

import { VideoHero } from "@/components/mindplay/VideoHero";
import { DoorwaySection } from "@/components/mindplay/DoorwaySection";

const title = "MindPlay Media Studios — Imagine, Create, Experience";
const description =
  "MindPlay Media Studios is a creative production house building wellness, sound, film, and interactive experiences. Founded by Bobby Whizkers in Los Angeles.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <VideoHero />
        <DoorwaySection />
      </main>
      <footer className="bg-ink px-6 pb-14 text-center">
        <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/90">
          Imagine · Create · Experience — MindPlay Media Studios
        </p>
      </footer>
    </>
  );
}
