import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ontraport automations, tutorials, and integrations from The Business Unicorn.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section reveal={false} className="pt-16 md:pt-24">
      <SectionHeading
        eyebrow="Blog"
        title="Ontraport automations, tutorials & integrations"
        description="Practical writing for people who want cleaner campaigns and calmer systems."
      />

      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-line bg-surface-elevated p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="transition hover:text-brand-teal-dark"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-brand-pink hover:text-brand-pink-dark"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
