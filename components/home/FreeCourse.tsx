import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export function FreeCourse() {
  return (
    <Section>
      <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          eyebrow="Free course"
          title="Unleash your inner unicorn"
          description="Whether you are starting fresh with Ontraport or rebuilding a stuck setup, this free course walks you through campaigns, integrations, and automation — without the usual pitfalls."
        />
        <div className="rounded-3xl border border-line bg-surface-elevated p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
            Student note
          </p>
          <blockquote className="mt-4 font-display text-xl leading-snug text-ink md:text-2xl">
            “I devoted countless hours to Ontraport support videos — this free
            course surpassed them all. A wise investment of my time.”
          </blockquote>
          <p className="mt-4 text-sm font-medium text-ink-muted">Dana Shute</p>
          <div className="mt-8">
            <ButtonLink href={siteConfig.links.freeCourse} external size="lg">
              Get access to the free course
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
