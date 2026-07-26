import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function Community() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative flex min-h-[280px] items-end overflow-hidden rounded-[2rem] bg-brand-teal px-8 py-8">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Community
          </p>
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
