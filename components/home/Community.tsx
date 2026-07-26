import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function Community() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-ink">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/50 via-ink to-brand-pink/40" />
          <div className="absolute inset-0 flex items-end p-8">
            <p className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Community
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink">
            Need help with Ontraport?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Jump into the free Facebook group
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Geek out about automations, ask questions before you freak out, and
            connect with other Ontraport enthusiasts who get it.
          </p>
          <div className="mt-7">
            <ButtonLink href={siteConfig.links.community} external>
              Join the group
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
