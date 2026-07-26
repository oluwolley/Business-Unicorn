import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Business Unicorn about Ontraport support, training, or questions.",
};

export default function ContactPage() {
  return (
    <Section reveal={false} className="pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s untangle your Ontraport setup"
            description="Share where you are stuck — foundations, campaigns, segmentation, or training — and I will get back to you."
          />
          <div className="mt-8 space-y-3 text-sm text-ink-muted">
            <p>
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-ink underline decoration-brand-teal underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              Looking for the free course?{" "}
              <a
                href={siteConfig.links.freeCourse}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-brand-pink underline-offset-4"
              >
                Get access here
              </a>
              .
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
