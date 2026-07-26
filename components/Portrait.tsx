import Image from "next/image";

type PortraitProps = {
  className?: string;
  priority?: boolean;
  /** Visual scale of the frame */
  size?: "sm" | "lg";
  /** Use on pink surfaces so accents stay visible */
  tone?: "default" | "onPink";
};

/**
 * Soft square portrait with offset brand mats — shared by About + home teaser.
 * Uses inline aspect-ratio so the frame cannot collapse if a Tailwind
 * arbitrary class is missing from the compiled CSS.
 */
export function Portrait({
  className = "",
  priority = false,
  size = "lg",
  tone = "default",
}: PortraitProps) {
  const frame =
    size === "lg"
      ? "max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem]"
      : "max-w-[13rem] md:max-w-[15rem]";

  const matClass = tone === "onPink" ? "bg-white/85" : "bg-brand-teal";
  const accentClass = tone === "onPink" ? "bg-ink" : "bg-brand-pink";

  return (
    <div className={`relative mx-auto w-full ${frame} ${className}`.trim()}>
      <div
        aria-hidden
        className={`absolute inset-3 translate-x-3 translate-y-3 rotate-3 rounded-[1.75rem] md:inset-4 md:translate-x-4 md:translate-y-4 ${matClass}`}
      />
      <div
        aria-hidden
        className={`absolute -bottom-2 -left-2 h-14 w-14 rounded-2xl md:h-16 md:w-16 ${accentClass}`}
      />

      <div
        className="relative w-full overflow-hidden rounded-[1.75rem] bg-brand-teal/15 ring-1 ring-ink/5"
        style={{ aspectRatio: "4 / 5" }}
      >
        <Image
          src="/images/tallie.jpg"
          alt="Tallie, The Business Unicorn"
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition: "center 18%" }}
          sizes={
            size === "lg"
              ? "(max-width: 768px) 80vw, 352px"
              : "(max-width: 768px) 50vw, 240px"
          }
        />
      </div>
    </div>
  );
}
