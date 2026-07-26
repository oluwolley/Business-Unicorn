import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section reveal={false} className="pt-24 text-center md:pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        That page has wandered off. Let&apos;s get you back to something useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </Section>
  );
}
