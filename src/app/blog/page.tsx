import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "My Backlog :)",
  description: "My journey to become a better developer, and the thoughts I have along the way.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="p-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-bold text-3xl mb-12 tracking-tight">My Backlog :)</h1>
      </BlurFade>
      <div className="space-y-8">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                href={`/blog/${post.slug}`}
              >
                <h2 className="text-xl font-semibold mb-2">{post.metadata.title}</h2>
                <p className="text-sm text-gray-500">{post.metadata.publishedAt}</p>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}