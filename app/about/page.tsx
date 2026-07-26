import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Tallie",
  description:
    "Meet Tallie, The Business Unicorn. Ontraport specialist, automation puzzle-solver, and business BFF for small business owners.",
};

export default function AboutPage() {
  return (
    <>
      <Section reveal={false} className="pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="animate-rise text-xs font-semibold uppercase tracking-[0.18em] text-brand-pink">
              About
            </p>
            <h1 className="animate-rise-delay-1 mt-3 font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
              Well hey there!
            </h1>
            <div className="animate-rise-delay-2 mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                I&apos;m Tallie, your business BFF with a knack for turning
                messy tech into systems that actually save you time every week.
              </p>
              <p>
                I help small business owners and solo operators with the stuff
                that usually slows them down: funnels, landing pages, and the
                automations that stitch it all together.
              </p>
              <p>
                If you need someone who can set it up cleanly and explain it in
                plain English, you&apos;re in the right place.
              </p>
            </div>
          </div>

          <div className="animate-rise-delay-2 mx-auto w-full max-w-xs sm:max-w-sm">
            <div className="relative mx-auto aspect-square overflow-hidden rounded-full bg-brand-teal/10">
              <Image
                src="/images/tallie.jpg"
                alt="Tallie, The Business Unicorn"
                fill
                className="object-cover object-[center_20%] scale-110"
                sizes="(max-width: 768px) 80vw, 360px"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            What I see when I look at automations
          </h2>
          <p className="mt-3 text-lg font-medium text-brand-teal-dark">
            A puzzle I can&apos;t wait to solve.
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              Sometimes you have to think a little outside the box to turn an
              automation idea into something that works in real life. I&apos;m
              the person who considers the what-ifs, buts, and maybes so your
              customer journey stays tight.
            </p>
            <p>
              No lost leads on my watch. Those could be your future superstar
              clients.
            </p>
            <p>
              I&apos;ve been working in Ontraport and other systems for over a
              decade, so I know how automation can transform a business when
              it&apos;s done properly. And I&apos;m genuinely excited to share
              that with you.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Why I&apos;m The Business Unicorn
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              You might be wondering about the name. Honestly? I love a bit of
              magic and myth in my branding, and people like me are a rare find
              on a digital team: someone who lives for automation and still
              brings design and marketing skills to the mix.
            </p>
            <p>
              Outside of work, I&apos;m a certified PADI Mermaid (yes, really),
              and I live in Kent with my husband and our husky, Nymerah. When
              I&apos;m not deep in campaigns, I&apos;m making costumes and
              accessories for Comicon. Halloween is my favourite holiday by a
              mile.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-line bg-surface-elevated px-6 py-12 text-center md:px-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Want to know more?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted md:text-lg">
            Don&apos;t be shy. Ask away. I love a good chat about Ontraport,
            automations, or where you&apos;re stuck right now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" size="lg">
              Get in touch
            </ButtonLink>
            <ButtonLink href="/free-stuff" variant="secondary" size="lg">
              Explore free stuff
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
