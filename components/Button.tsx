import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-teal text-ink shadow-[0_10px_30px_-12px_rgba(103,200,203,0.85)] hover:-translate-y-0.5 hover:bg-brand-teal-dark hover:shadow-[0_14px_34px_-12px_rgba(103,200,203,0.95)]",
  secondary:
    "border border-brand-pink bg-transparent text-ink hover:-translate-y-0.5 hover:bg-brand-pink/10",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: SharedProps & ComponentProps<"button">) {
  return (
    <button
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...props
}: SharedProps &
  Omit<ComponentProps<typeof Link>, "href" | "className"> & {
    href: string;
    external?: boolean;
  }) {
  const classes = cx(base, variants[variant], sizes[size], className);

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
