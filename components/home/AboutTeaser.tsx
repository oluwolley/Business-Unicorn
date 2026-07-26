import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function AboutTeaser() {
  return (
    <Section className="!py-0">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-pink to-[#f3a3d8] px-6 py-10 text-ink md:grid md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 md:px-12 md:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            Meet {siteConfig.founder}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Confident Ontraport users build freer businesses
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
            Spreading clarity brings me joy. My mission is helping business
            owners feel empowered with the software they use — so you can manage
            your own account, keep admin costs sensible, and trust your
            automations.
          </p>
          <div className="mt-7">
            <ButtonLink href="/about" variant="primary">
              More about Tallie
            </ButtonLink>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:mt-0 md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-white/30 blur-md" aria-hidden />
            <div className="relative grid h-48 w-48 place-items-center overflow-hidden rounded-full border-4 border-white/70 bg-ink text-white shadow-xl md:h-56 md:w-56">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/40 to-brand-pink/40" />
              <span className="relative font-display text-5xl font-semibold">T</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
