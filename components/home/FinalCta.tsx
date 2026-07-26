import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <Section>
      <div className="rounded-[2rem] bg-ink px-6 py-12 text-center text-white md:px-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
          Ready when you are
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          From overwhelmed to enlightened — starting with one clear next step
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
          Take the free course, join the community, or book time with Tallie to
          untangle your Ontraport setup.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={siteConfig.links.freeCourse} external size="lg">
            Start the free course
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
