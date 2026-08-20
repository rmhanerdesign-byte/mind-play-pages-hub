const doors = [
  {
    id: "about",
    label: "ABOUT",
    to: "/about",
  },
  {
    id: "studios",
    label: "STUDIOS",
    to: "/productions",
  },
  {
    id: "projects",
    label: "PROJECTS",
    to: "/projects",
  },
  {
    id: "Create",
    label: "Let's Create",
    to: "/creative-assistance",
  },
];

function DoorCard({
  label,
  to,
}: {
  label: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      aria-label={`Enter ${label}`}
      className="group flex flex-col items-center"
    >
      {/* PLACARD */}
      <div className="mb-3 rounded-md border border-[#d8b25c]/70 bg-black/80 px-5 py-2 shadow-lg">
        <span className="text-sm font-semibold tracking-[0.22em] text-[#f4c95d] sm:text-base">
          {label}
        </span>
      </div>

      {/* DOOR */}
      <div className="relative w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.025] sm:max-w-[250px] lg:max-w-[270px]">
        <img
          src={stainlessDoor}
          alt={`${label} stainless steel doorway`}
          className="block h-auto w-full object-contain"
        />
      </div>
    </Link>
  );
}

export function VideoHero() {
  return (
    <section className="relative w-full bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-serif text-xl tracking-[0.28em] text-[#e3bc69] sm:text-2xl">
          PICK A DOOR TO START YOUR JOURNEY
        </h2>

        <div className="grid grid-cols-2 items-end gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
          {doors.map((door) => (
            <DoorCard
              key={door.id}
              label={door.label}
              to={door.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
