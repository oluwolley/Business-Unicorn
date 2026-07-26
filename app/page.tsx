import { AboutTeaser } from "@/components/home/AboutTeaser";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Community } from "@/components/home/Community";
import { Culprits } from "@/components/home/Culprits";
import { FinalCta } from "@/components/home/FinalCta";
import { FreeCourse } from "@/components/home/FreeCourse";
import { Hero } from "@/components/home/Hero";
import { getLatestPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getLatestPosts(2);

  return (
    <>
      <Hero />
      <Culprits />
      <AboutTeaser />
      <FreeCourse />
      <Community />
      <BlogPreview posts={posts} />
      <FinalCta />
    </>
  );
}
