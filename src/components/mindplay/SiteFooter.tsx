import { Link } from "@tanstack/react-router";

import footerLockup from "@/assets/mindplay-footer-lockup.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src={footerLockup.url}
              alt="MindPlay Media Studios"
              className="block w-[180px] max-w-full select-none"
              draggable={false}
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A studio for turning imagination into media — across wellness,
              sound, screen, and interactive worlds.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <p className="text-[10px] tracking-[0.34em] uppercase text-primary/80">
                Studio
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productions"
                    className="transition-colors hover:text-foreground"
                  >
                    Productions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.34em] uppercase text-primary/80">
                Worlds
              </p>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>Rediscovery</li>
                <li>Emotion Detective</li>
                <li>Soul Immersion</li>
                <li>Music & Audio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/50 pt-8 text-[10px] tracking-[0.28em] uppercase text-muted-foreground/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} MindPlay Media Studios</span>
          <span>Ideas become experiences</span>
        </div>
      </div>
    </footer>
  );
}
