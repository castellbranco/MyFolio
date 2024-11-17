import dynamic from "next/dynamic";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "My Backlog :)",
  description: "My journey to become a better developer, and the thoughts I have along the way.",
};

// Dynamically import BlurFade for performance
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade"), {
  ssr: false,
});

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-bold text-4xl mb-12 tracking-tight text-gray-900">
            My Backlog :)
          </h1>
        </BlurFade>

        {/* Blog List */}
        <div className="space-y-8">
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                key={post.slug}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    {post.metadata.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">
                    {post.metadata.summary}
                  </p>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>
    </section>
  );
}
