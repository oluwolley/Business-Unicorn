import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogPreview({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="The blog"
          title="Ontraport automations, tutorials & integrations"
          description="Practical guides to help you move faster with cleaner campaigns."
        />
        <ButtonLink href="/blog" variant="secondary">
          View all posts
        </ButtonLink>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-line bg-surface-elevated p-6 transition hover:border-brand-teal/50"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand-teal-dark">
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-brand-pink hover:text-brand-pink-dark"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
