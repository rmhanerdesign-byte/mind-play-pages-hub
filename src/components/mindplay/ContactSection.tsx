import { useState } from "react";

import { Reveal } from "./Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-background px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.42em] uppercase text-primary/80">
            Contact Us
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            Tell us the idea
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Collaborations, productions, and quiet conversations about what we
            are building next.
          </p>
        </div>

        {sent ? (
          <p className="mt-12 border border-primary/40 bg-primary/5 p-8 text-center text-xs tracking-[0.24em] uppercase text-primary">
            Thank you — we'll be in touch shortly.
          </p>
        ) : (
          <form
            className="mt-12 flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Name
              </span>
              <input
                required
                name="name"
                className="w-full min-w-0 border border-input bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full min-w-0 border border-input bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full min-w-0 resize-none border border-input bg-surface/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
              />
            </label>
            <button
              type="submit"
              className="sheen mt-2 rounded-sm border border-primary/50 bg-primary/5 px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-primary transition-all duration-500 hover:border-primary hover:bg-primary/12"
            >
              Send Message
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
