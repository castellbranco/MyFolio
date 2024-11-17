import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);
  if (!post) return undefined;

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  const ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: { "@type": "Person", name: DATA.name },
            }),
          }}
        />
        {/* Blog Title */}
        <h1 className="font-bold text-4xl mb-4 tracking-tight text-gray-900">
          {post.metadata.title}
        </h1>
        {/* Metadata */}
        <div className="flex justify-between items-center mt-2 mb-8 text-sm text-gray-500">
          <div className="h-5">
            {formatDate(post.metadata.publishedAt)}
          </div>
        </div>
        {/* Blog Content */}
        <article
          className="prose dark:prose-invert max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </div>
    </section>
  );
}
