import { Link } from "@tanstack/react-router";

import mobileDoors from "@/assets/mindplay-mobile-doors.png";
import desktopDoors from "@/assets/hero-door-placard.PNG";

type DoorArea = {
  id: string;
  label: string;
  to: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

/* Four doors in the PORTRAIT mobile artwork. */
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

/* Four doors in the LANDSCAPE desktop artwork. */
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
          className="absolute z-10 cursor-pointer bg-transparent"
          style={{
            left: `${area.left}%`,
            top: `${area.top}%`,
            width: `${area.width}%`,
            height: `${area.height}%`,
          }}
        />
      ))}
    </>
  );
}

export function VideoHero() {
  return (
    <>
      {/* MOBILE */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black md:hidden brightness-[1.12]">
        <div className="relative h-[100svh] max-h-[100svh] w-full">
          <img
            src={mobileDoors}
            alt="MindPlay Media Studios — About, Studios, Projects, Creative"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <DoorLinks areas={mobileDoorsAreas} />
        </div>
      </section>

      {/* TABLET / DESKTOP */}
      <section className="relative hidden min-h-screen w-full items-center justify-center overflow-hidden bg-black md:flex brightness-[1.12]">
        <div className="relative h-screen w-full">
          <img
            src={desktopDoors}
            alt="MindPlay Media Studios — About, Studios, Projects, Creative"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <DoorLinks areas={desktopDoorsAreas} />
        </div>
      </section>
    </>
  );
}
