import { getPost, fmtDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { renderMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";
import Texture from "@/components/app/texture";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `https://praveen-raj.vercel.app/blog/${post.slug}`;
  return {
    title: `${post.title} — Praveen Raj`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.published_at,
      authors: ["Praveen Raj"],
      ...(post.cover_image && { images: [{ url: post.cover_image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.cover_image && { images: [post.cover_image] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);

  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/blog-top-gradient.svg'),url('/blog-bottom-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter text-[#22242C] dark:text-white">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition mb-12"
        >
          <ArrowLeft className="size-3.5" />
          All posts
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-black/40 dark:text-white/30">
              {fmtDate(post.published_at)}
            </span>
            <span className="text-black/20 dark:text-white/20">·</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/6 dark:bg-white/8 text-black/60 dark:text-white/60">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-[-1.2px] font-Fraunces leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-black/50 dark:text-white/50 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Cover image */}
        {post.cover_image && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-black/5 dark:bg-white/5 shadow-sm">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>
        )}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.published_at,
              dateModified: post.published_at,
              author: {
                "@type": "Person",
                name: "Praveen Raj",
                url: "https://praveen-raj.vercel.app",
              },
              publisher: {
                "@type": "Person",
                name: "Praveen Raj",
                url: "https://praveen-raj.vercel.app",
              },
              url: `https://praveen-raj.vercel.app/blog/${post.slug}`,
              ...(post.cover_image && { image: post.cover_image }),
            }),
          }}
        />

        {/* Content */}
        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-black/8 dark:border-white/8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition"
          >
            <ArrowLeft className="size-3.5" />
            All posts
          </Link>
        </div>
      </div>
      <Texture />
    </main>
  );
}
