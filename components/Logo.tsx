import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="The Business Unicorn home"
    >
      <Image
        src="/images/logo.png"
        alt="The Business Unicorn"
        width={1024}
        height={186}
        priority
        className={`h-8 w-auto md:h-10 ${
          tone === "dark" ? "brightness-110" : ""
        }`}
      />
    </Link>
  );
}
