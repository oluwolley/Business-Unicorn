import { Section, SectionHeading } from "@/components/Section";
import { culprits } from "@/lib/site";

export function Culprits() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The quiet blockers"
        title="Three things holding back your Ontraport results"
        description="Whether you are already in Ontraport or joining the family, these are the patterns I see again and again, and the ones we clear first."
      />
      <ol className="mt-12 space-y-8 md:mt-16">
        {culprits.map((item) => (
          <li
            key={item.number}
            className="grid gap-4 border-t border-line pt-8 md:grid-cols-[7rem_1fr] md:gap-10"
          >
            <span className="font-display text-4xl font-semibold text-brand-teal md:text-5xl">
              {item.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
