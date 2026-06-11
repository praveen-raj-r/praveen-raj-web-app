import { getPost, fmtDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Praveen Raj`,
    description: post.excerpt,
    openGraph: post.cover_image ? { images: [post.cover_image] } : undefined,
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

  const html = await marked(post.content);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#22242C] dark:text-white font-inter">
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
        </div>

        {/* Cover image */}
        {post.cover_image && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-black/5 dark:bg-white/5">
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
    </main>
  );
}
