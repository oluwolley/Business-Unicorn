import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

const secondaryLinks = [
  { href: "/free-stuff", label: "Free resources" },
  { href: siteConfig.links.ontraportTrial, label: "Trial Ontraport", external: true },
  { href: siteConfig.links.coursesAccess, label: "Access your courses", external: true },
  { href: "/contact", label: "Tech support" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Helping Ontraport users build email automations that save time,
            reduce stress, and actually convert.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Connect
          </p>
          <ul className="mt-4 space-y-3">
            {secondaryLinks.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 flex gap-4">
            <SocialLink href={siteConfig.links.facebook} label="Facebook">
              <path d="M14 8h-2a2 2 0 0 0-2 2v2H8v3h2v7h3v-7h2.2l.3-3H13v-1.5c0-.3.2-.5.5-.5H14V8z" />
            </SocialLink>
            <SocialLink href={siteConfig.links.instagram} label="Instagram">
              <rect x="6" y="6" width="12" height="12" rx="3" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
            </SocialLink>
            <SocialLink href={siteConfig.links.linkedin} label="LinkedIn">
              <path d="M8 10v8M8 7.5v.01M12 18v-5a2 2 0 1 1 4 0v5M12 10.5V18" />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white/80">
              Terms of use
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-brand-teal hover:text-brand-teal"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        {children}
      </svg>
    </a>
  );
}
