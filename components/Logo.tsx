import Link from "next/link";

export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="The Business Unicorn home"
    >
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-teal to-brand-pink text-white shadow-sm transition group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M6 16c2-5 5-8 10-10l2-3 1 4c2 1 3 3 3 5-1 4-5 7-10 7-4 0-6-2-6-3z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M16 6l3-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-semibold tracking-tight md:text-xl ${titleClass}`}
        >
          The Business
        </span>
        <span className="block text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-pink">
          Unicorn
        </span>
      </span>
    </Link>
  );
}
