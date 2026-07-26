import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:py-20">
        <div className="max-w-xl">
          <p className="animate-rise mb-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Automate & elevate your email marketing with Ontraport
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            Ontraport that finally makes sense. Automations that warm your
            leads while you run your business.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={siteConfig.links.freeCourse} external size="lg">
              Get the free course
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Work with Tallie
            </ButtonLink>
          </div>
        </div>

        <div className="animate-rise-delay-2 relative mx-auto w-full max-w-xl lg:max-w-none">
          <Image
            src="/images/hero-imac.png"
            alt="Ontraport shown on an iMac display"
            width={1357}
            height={1302}
            priority
            className="relative mx-auto h-auto w-full drop-shadow-[0_24px_40px_rgba(26,31,36,0.14)]"
          />
        </div>
      </div>
    </section>
  );
}
