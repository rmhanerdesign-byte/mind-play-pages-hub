import { Link } from "@tanstack/react-router";

import stainlessDoor from "@/assets/stainless-door-closed.png.PNG";

type DoorArea = {
  id: string;
  label: string;
  to: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const mobileDoorsAreas: DoorArea[] = [
  {
    id: "about",
    label: "About",
    to: "/about",
    left: 6,
    top: 69,
    width: 20,
    height: 25,
  },
  {
    id: "studios",
    label: "Studios",
    to: "/productions",
    left: 28,
    top: 69,
    width: 20,
    height: 25,
  },
  {
    id: "projects",
    label: "Projects",
    to: "/projects",
    left: 51,
    top: 69,
    width: 20,
    height: 25,
  },
  {
    id: "creative",
    label: "Creative",
    to: "/creative-assistance",
    left: 74,
    top: 69,
    width: 20,
    height: 25,
  },
];

const desktopDoorsAreas: DoorArea[] = [
  {
    id: "about",
    label: "About",
    to: "/about",
    left: 13,
    top: 65,
    width: 15,
    height: 33,
  },
  {
    id: "studios",
    label: "Studios",
    to: "/productions",
    left: 32,
    top: 65,
    width: 15,
    height: 33,
  },
  {
    id: "projects",
    label: "Projects",
    to: "/projects",
    left: 51,
    top: 65,
    width: 15,
    height: 33,
  },
  {
    id: "creative",
    label: "Creative",
    to: "/creative-assistance",
    left: 70,
    top: 65,
    width: 15,
    height: 33,
  },
];

function DoorLinks({ areas }: { areas: DoorArea[] }) {
  return (
    <>
      {areas.map((area) => (
        <Link
          key={area.id}
          to={area.to}
          aria-label={`Enter ${area.label}`}
          className="absolute z-10 block"
          style={{
            left: `${area.left}%`,
            top: `${area.top}%`,
            width: `${area.width}%`,
            height: `${area.height}%`,
          }}
        >
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-zinc-400 bg-zinc-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-black shadow-md">
            {area.label}
          </div>

          <img
            src={stainlessDoor}
            alt=""
            className="h-full w-full object-contain"
          />
        </Link>
      ))}
    </>
  );
}

export function VideoHero() {
  return (
    <>
      {/* MOBILE */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black md:hidden">
        <div className="relative h-[100svh] max-h-[100svh] w-full">
          <DoorLinks areas={mobileDoorsAreas} />
        </div>
      </section>

      {/* TABLET / DESKTOP */}
      <section className="relative hidden min-h-screen w-full items-center justify-center overflow-hidden bg-black md:flex">
        <div className="relative h-screen w-full">
          <DoorLinks areas={desktopDoorsAreas} />
        </div>
      </section>
    </>
  );
}
