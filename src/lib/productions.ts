export type Production = {
  slug: string;
  name: string;
  kind: string;
  blurb: string;
  status: "In Production" | "Live" | "Developing" | "Concept";
  featured?: boolean;
  /** Short line shown at the top of the detail page. */
  tagline?: string;
  /** Two short paragraphs of context beyond the card blurb. */
  detail?: string[];
  /** What this production is specifically responsible for. */
  focus?: string[];
  /** Practical facts: format, medium, stage. */
  facts?: { label: string; value: string }[];
};

export const productions: Production[] = [
  {
    slug: "rediscovery",
    name: "Rediscovery",
    kind: "Wellness Platform",
    blurb:
      "An intelligent self-care world that turns reflection into a guided, living experience.",
    status: "In Production",
    featured: true,
    tagline: "The flagship platform of the studio",
    detail: [
      "Rediscovery is the long-form home for personal practice: a place you return to rather than a session you finish. Daily reflection, mood, and progress are held in one continuous thread so the platform can respond to you over months, not minutes.",
      "It is the widest production on the slate — the connective layer other MindPlay work can plug into, from guided audio to interactive story moments.",
    ],
    focus: [
      "Guided reflection that adapts to the person using it",
      "A continuous record of practice rather than isolated exercises",
      "The platform layer other productions can extend",
    ],
    facts: [
      { label: "Format", value: "Long-form platform" },
      { label: "Stage", value: "In production" },
      { label: "Role", value: "Flagship" },
    ],
  },
  {
    slug: "emotion-detective",
    name: "Emotion Detective",
    kind: "Interactive Series",
    blurb:
      "A playful investigation into feeling — clues, cases, and quiet revelations.",
    status: "Developing",
    tagline: "Emotional literacy told as episodic mystery",
    detail: [
      "Where Rediscovery is an ongoing practice, Emotion Detective is authored and episodic. Each case is a self-contained story with a beginning and an ending, built around one feeling and the clues that give it away.",
      "The tone is deliberately light. Curiosity does the teaching, so nothing needs to be framed as a lesson.",
    ],
    focus: [
      "Episodic cases rather than open-ended practice",
      "Written characters and narrative voice",
      "Designed for younger and family audiences alongside adults",
    ],
    facts: [
      { label: "Format", value: "Episodic interactive series" },
      { label: "Stage", value: "In development" },
      { label: "Unit", value: "Case by case" },
    ],
  },
  {
    slug: "soul-immersion",
    name: "Soul Immersion",
    kind: "Immersive Experience",
    blurb:
      "Deep-listening environments built for stillness, sound, and inner motion.",
    status: "Developing",
    tagline: "Environments you stay inside",
    detail: [
      "Soul Immersion is spatial rather than musical. It composes a room — light, duration, pacing, and sound arranged so that attention can settle without instruction.",
      "Music & Audio supplies material; Soul Immersion decides how long you stay in it and what surrounds you while you do.",
    ],
    focus: [
      "Duration and pacing as the primary design material",
      "Spatial and visual accompaniment, not just a track",
      "Sessions intended to be entered, not played in the background",
    ],
    facts: [
      { label: "Format", value: "Immersive session" },
      { label: "Stage", value: "In development" },
      { label: "Focus", value: "Space and duration" },
    ],
  },
  {
    slug: "music-audio",
    name: "Music & Audio",
    kind: "Sound Studio",
    blurb:
      "Original scores, sonic identities, and audio worlds composed for our productions.",
    status: "Live",
    tagline: "The studio's working sound department",
    detail: [
      "Music & Audio is a capability, not a title. It writes score, builds sonic identity, and mixes voice for everything else on the slate — and it is the one part of the studio already delivering work today.",
      "Its output is the raw material other productions arrange: cues for film, textures for immersion, interface sound for interactive work.",
    ],
    focus: [
      "Original score and sonic identity",
      "Voice recording and mixing for narrative work",
      "Available for outside collaborations",
    ],
    facts: [
      { label: "Format", value: "Score and sound design" },
      { label: "Stage", value: "Live" },
      { label: "Serves", value: "All productions" },
    ],
  },
  {
    slug: "film-visual",
    name: "Film & Visual Storytelling",
    kind: "Screen Works",
    blurb:
      "Cinematic shorts and visual narratives that carry an idea in a single frame.",
    status: "In Production",
    tagline: "Work made to be watched, not used",
    detail: [
      "Film is the studio's linear voice. No branching, no input — a fixed cut where the idea lands through framing, edit, and score.",
      "It also sets the visual grammar the interactive productions inherit: how light behaves, how slowly things move, how much darkness a frame can hold.",
    ],
    focus: [
      "Short-form cinematic pieces with a fixed cut",
      "Visual language reference for the wider slate",
      "Close collaboration with Music & Audio on score",
    ],
    facts: [
      { label: "Format", value: "Short film and visual narrative" },
      { label: "Stage", value: "In production" },
      { label: "Mode", value: "Linear" },
    ],
  },
  {
    slug: "apps-interactive",
    name: "Apps & Interactive",
    kind: "Product Lab",
    blurb:
      "Software as storytelling — interfaces that behave like characters, not forms.",
    status: "In Production",
    tagline: "How the productions get built",
    detail: [
      "Apps & Interactive is the engineering and interaction craft behind the slate — the lab that turns a production into something you can actually open, tap, and return to.",
      "It does not hold its own story. It holds the tools, prototypes, and interface patterns that Rediscovery, Emotion Detective, and Soul Immersion are all built on.",
    ],
    focus: [
      "Interaction and interface craft across productions",
      "Prototypes that test an idea before it becomes a production",
      "Shared technical foundation and design system",
    ],
    facts: [
      { label: "Format", value: "Product and interaction lab" },
      { label: "Stage", value: "In production" },
      { label: "Serves", value: "All interactive work" },
    ],
  },
  {
    slug: "future-productions",
    name: "Future Productions",
    kind: "Reserved",
    blurb:
      "New projects are always in development. Some are not ready to be named yet.",
    status: "Concept",
  },
];

export function getProduction(slug: string) {
  return productions.find((p) => p.slug === slug);
}
