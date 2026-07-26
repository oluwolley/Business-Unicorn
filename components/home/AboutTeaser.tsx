import { ButtonLink } from "@/components/Button";
import { Portrait } from "@/components/Portrait";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function AboutTeaser() {
  return (
    <Section className="!py-0">
      <div className="overflow-hidden rounded-[2rem] bg-brand-pink px-6 py-10 text-ink md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:px-12 md:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            Meet {siteConfig.founder}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Confident Ontraport users build freer businesses
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
            Spreading clarity brings me joy. My mission is helping business
            owners feel empowered with the software they use, so you can manage
            your own account, keep admin costs sensible, and trust your
            automations.
          </p>
          <div className="mt-7">
            <ButtonLink href="/about" variant="primary">
              More about Tallie
            </ButtonLink>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Portrait size="sm" tone="onPink" />
        </div>
      </div>
    </Section>
  );
}
