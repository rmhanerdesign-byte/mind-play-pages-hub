import { Link } from "@tanstack/react-router";
import mobileMaster from "@/../CFFF275B-B96D-4838-8DBE-989CA5B7082D.PNG";
import heroMaster from "@/../776BCE76-7F75-4A6E-BE13-365352628965.PNG";

type MasterArea = {
  id: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  to?: string;
};

/** Percentage coordinates measured from the 1536x1024 master artwork. */
const masterAreas: MasterArea[] = [
  { id: "m-explore", label: "Explore Our Studios", left: 30.6, top: 77.3, width: 20.9, height: 5.6, to: "/productions" },
  { id: "m-mission", label: "Our Mission", left: 53.9, top: 77.3, width: 15.3, height: 5.6, to: "/about" },
  { id: "m-about", label: "About", left: 14.2, top: 91.6, width: 4.8, height: 3.6, to: "/about" },
  { id: "m-studios", label: "Studios", left: 25.7, top: 91.6, width: 6.2, height: 3.6, to: "/productions" },
  { id: "m-projects", label: "Projects", left: 36.5, top: 91.6, width: 7.8, height: 3.6 },
  { id: "m-community", label: "Community", left: 56.4, top: 91.6, width: 8.8, height: 3.6 },
  { id: "m-contact", label: "Contact", left: 72, top: 91.6, width: 6.5, height: 3.6, to: "/contact" },
];


type HitArea =
  | {
      id: string;
      label: string;
      left: number;
      top: number;
      width: number;
      height: number;
      kind: "link";
      to: string;
    }
  | {
      id: string;
      label: string;
      left: number;
      top: number;
      width: number;
      height: number;
      kind: "scroll";
    }
  | {
      id: string;
      label: string;
      left: number;
      top: number;
      width: number;
      height: number;
      kind: "disabled";
    };

/** Percentage coordinates measured from the 1024x1536 mobile master artwork. */
const mobileAreas: HitArea[] = [
  { id: "m-explore", label: "Explore Our Studios", left: 20, top: 61.4, width: 32.5, height: 3.7, kind: "link", to: "/productions" },
  { id: "m-mission", label: "Our Mission", left: 53.5, top: 61.4, width: 26, height: 3.7, kind: "link", to: "/about" },
  { id: "m-scroll", label: "Scroll", left: 44, top: 78.5, width: 12, height: 5.5, kind: "scroll" },
  { id: "m-about", label: "About", left: 9, top: 89.9, width: 8.5, height: 2.4, kind: "link", to: "/about" },
  { id: "m-studios", label: "Studios", left: 25, top: 89.9, width: 10, height: 2.4, kind: "link", to: "/productions" },
  { id: "m-projects", label: "Projects", left: 42.5, top: 89.9, width: 11, height: 2.4, kind: "disabled" },
  { id: "m-community", label: "Community", left: 60.5, top: 89.9, width: 13.5, height: 2.4, kind: "disabled" },
  { id: "m-contact", label: "Contact", left: 80.5, top: 89.9, width: 10, height: 2.4, kind: "link", to: "/contact" },
];



export function VideoHero() {
  const handleScroll = () => {
    document.getElementById("doorway")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      {/* ---------- MOBILE: locked master artwork + hit areas ---------- */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink md:hidden">
        <div className="relative aspect-[1024/1536] w-full max-w-[min(100vw,calc(100vh*1024/1536))]">
          <img
            src={mobileMaster.url}
            alt="MindPlay Media Studios — Imagine, Create, Experience"
            width={1024}
            height={1536}
            className="h-full w-full object-contain"
          />


          {mobileAreas.map((area) =>

            area.kind === "scroll" ? (
              <button
                key={area.id}
                type="button"
                aria-label={area.label}
                onClick={handleScroll}
                className="absolute cursor-pointer bg-transparent"
                style={{
                  left: `${area.left}%`,
                  top: `${area.top}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                }}
              />
            ) : area.kind === "link" ? (
              <Link
                key={area.id}
                to={area.to}
                aria-label={area.label}
                className="absolute bg-transparent"
                style={{
                  left: `${area.left}%`,
                  top: `${area.top}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                }}
              />
            ) : (
              <span
                key={area.id}
                aria-label={area.label}
                aria-disabled="true"
                className="pointer-events-none absolute bg-transparent"
                style={{
                  left: `${area.left}%`,
                  top: `${area.top}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                }}
              />
            ),
          )}
        </div>
      </section>


      {/* ---------- DESKTOP / TABLET: locked master artwork + hit areas ---------- */}
      <section className="relative hidden min-h-screen w-full items-center justify-center overflow-hidden bg-ink md:flex">
        <div className="relative aspect-[1536/1024] w-full max-w-[calc(100vh*1.5)]">
          <img
            src={heroMaster.url}
            alt="MindPlay Media Studios — Imagine, Create, Experience"
            width={1536}
            height={1024}
            className="h-full w-full object-contain"
          />


          {masterAreas.map((area) =>

            area.to ? (
              <Link
                key={area.id}
                to={area.to}
                aria-label={area.label}
                className="absolute bg-transparent"
                style={{
                  left: `${area.left}%`,
                  top: `${area.top}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                }}
              />
            ) : (
              <span
                key={area.id}
                aria-label={area.label}
                aria-disabled="true"
                className="pointer-events-none absolute bg-transparent"
                style={{
                  left: `${area.left}%`,
                  top: `${area.top}%`,
                  width: `${area.width}%`,
                  height: `${area.height}%`,
                }}
              />
            ),
          )}
        </div>
      </section>

    </>
  );
}
