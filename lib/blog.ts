import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function getMdxFiles() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = getMdxFiles().map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(blogDirectory, filename), "utf8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: String(data.title ?? slug),
      excerpt: String(data.excerpt ?? ""),
      date: String(data.date ?? ""),
      readingTime: stats.text,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    readingTime: stats.text,
    content,
  };
}

export function getLatestPosts(count = 2): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
