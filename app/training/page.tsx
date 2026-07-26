import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Overwhelmed to Enlightened: expert Ontraport training to save time, make money, and reduce stress.",
};

const outcomes = [
  "Unlock email mastery and automation strategy inside Ontraport",
  "Stop wasting time on messy campaigns and unclear next steps",
  "Build systems that save hours and support revenue",
  "Get guidance whether you are a beginner or already deep in the tool",
];

export default function TrainingPage() {
  return (
    <>
      <Section reveal={false} className="pt-16 md:pt-24">
        <SectionHeading
          eyebrow="Training"
          title="Overwhelmed to Enlightened"
          description="Expert guidance, practical strategies, and learning resources designed to save you time, help you make money, and reduce the stress of DIY marketing ops."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Talk about training
          </ButtonLink>
          <ButtonLink href="/free-stuff" variant="secondary" size="lg">
            Start with free resources
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            What you walk away with
          </h2>
          <ul className="space-y-5">
            {outcomes.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-t border-line pt-5 text-base leading-relaxed text-ink-muted md:text-lg"
              >
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-pink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-line bg-surface-elevated px-6 py-12 md:px-12">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Your email and automation success story starts with the right
            support
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-muted md:text-lg">
            Tell me where you are in your Ontraport journey and we will find the
            right next step, from free learning to deeper 1:1 guidance.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
