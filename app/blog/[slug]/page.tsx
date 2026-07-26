import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <Section reveal={false} className="pt-16 md:pt-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-semibold text-brand-pink hover:text-brand-pink-dark"
        >
          ← Back to blog
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
        <article
          className="article-content mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Section>
  );
}
