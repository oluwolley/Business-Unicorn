import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/lib/site";

function CampaignMap({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-rise-delay-2 ${className}`} aria-hidden>
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-teal/25 via-transparent to-brand-pink/30 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink shadow-[0_40px_80px_-40px_rgba(26,31,36,0.45)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-pink/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-teal/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-3 text-xs text-white/45">
              Ontraport automations
            </span>
          </div>
          <div className="space-y-4 bg-gradient-to-b from-[#243038] to-[#1a1f24] p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-brand-teal">
                  Campaign map
                </p>
                <p className="mt-1 font-display text-xl text-white">
                  Welcome sequence
                </p>
              </div>
              <span className="rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-semibold text-brand-pink">
                Live
              </span>
            </div>
            <div className="grid gap-3">
              {[
                "New lead captured",
                "Tagged & segmented",
                "Nurture emails fire",
                "Booked call / purchase",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-teal/20 text-sm font-semibold text-brand-teal">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/85">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden grain">
      <div className="hero-atmosphere absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
        <div className="max-w-xl">
          <p className="animate-rise mb-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-3xl font-medium tracking-tight text-ink text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Automate & elevate your email marketing with Ontraport
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            Ontraport that finally makes sense — automations that warm your
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

        <CampaignMap className="w-full" />
      </div>
    </section>
  );
}
