import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Emblem } from "./Emblem";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/productions", label: "Productions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Emblem className="w-9 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.32em] uppercase text-gold-gradient">
              MindPlay
            </span>
            <span className="mt-1 text-[9px] tracking-[0.42em] uppercase text-muted-foreground">
              Media Studios
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[11px] tracking-[0.28em] uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/productions"
            className="sheen rounded-sm border border-primary/40 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/10"
          >
            Enter MindPlay
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-rise border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 text-xs tracking-[0.28em] uppercase text-muted-foreground last:border-none"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
