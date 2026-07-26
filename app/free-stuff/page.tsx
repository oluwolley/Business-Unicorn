import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { isConfiguredUrl } from "@/lib/links";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Stuff",
  description:
    "Free Ontraport course, resources, and a trial to help you start strong.",
};

const resources = [
  {
    title: "Unleash Your Inner Unicorn",
    body: "A free Ontraport course covering campaigns, integrations, and automation basics without the usual pitfalls.",
    cta: "Get course access",
    href: siteConfig.links.freeCourse,
    external: true,
    primary: true,
  },
  {
    title: "Free Ontraport trial",
    body: "Trying Ontraport for the first time? Start with a trial and learn alongside the free course.",
    cta: "Start a trial",
    href: siteConfig.links.ontraportTrial,
    external: true,
    primary: false,
  },
  ...(isConfiguredUrl(siteConfig.links.community)
    ? [
        {
          title: "Facebook community",
          body: "Ask questions, share wins, and get unstuck with other Ontraport users.",
          cta: "Join the group",
          href: siteConfig.links.community,
          external: true,
          primary: false,
        },
      ]
    : [
        {
          title: "Ask a question",
          body: "Not sure where to start? Send Tallie a message and get pointed in the right direction.",
          cta: "Contact Tallie",
          href: "/contact",
          external: false,
          primary: false,
        },
      ]),
];

export default function FreeStuffPage() {
  return (
    <>
      <Section reveal={false} className="pt-16 md:pt-24">
        <SectionHeading
          eyebrow="Free stuff"
          title="Tools to start strong with Ontraport"
          description="No fluff. Just practical free resources so you can build confidence before you invest further."
        />
      </Section>

      <Section className="!pt-0">
        <div className="space-y-6">
          {resources.map((item) => (
            <article
              key={item.title}
              className={`rounded-[1.75rem] border px-6 py-8 md:px-10 md:py-10 ${
                item.primary
                  ? "border-brand-teal/40 bg-brand-teal/10"
                  : "border-line bg-surface-elevated"
              }`}
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={item.href}
                  external={item.external}
                  variant={item.primary ? "primary" : "secondary"}
                >
                  {item.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
