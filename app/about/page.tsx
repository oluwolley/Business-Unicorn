import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tallie",
  description:
    "Meet Tallie, Certified Ontraport Expert and founder of The Business Unicorn.",
};

export default function AboutPage() {
  return (
    <>
      <Section reveal={false} className="pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="animate-rise text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink">
              About
            </p>
            <h1 className="animate-rise-delay-1 mt-3 font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Hi, I&apos;m {siteConfig.founder} — The Business Unicorn
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              I am a Certified Ontraport Expert helping business owners feel
              confident and empowered with the software they already pay for.
            </p>
          </div>
          <div className="animate-rise-delay-2 relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-teal/30 to-brand-pink/30 blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/50 via-ink to-brand-pink/40" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="font-display text-3xl font-semibold text-white">
                    {siteConfig.founder}
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Certified Ontraport Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The mission"
          title="From confusion to clear, converting automations"
          description="Over the years I have helped countless businesses with Ontraport accounts, integrations, and automations. What I keep discovering: most people are not failing at marketing — they are missing foundations, underusing features, and drowning in messy lists."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clarity first",
              body: "We map what you already have, what is broken, and what actually moves the needle.",
            },
            {
              title: "Own your system",
              body: "You leave more confident managing your own Ontraport account — and your admin budget.",
            },
            {
              title: "Results that feel calm",
              body: "Better segmentation, cleaner journeys, and emails your audience actually wants to read.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              <h2 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Work with Tallie
          </ButtonLink>
          <ButtonLink href="/free-stuff" variant="secondary" size="lg">
            Explore free resources
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
