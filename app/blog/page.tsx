import Link from "next/link";
import Image from "next/image";
import { getAllPosts, fmtDate } from "@/lib/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Texture from "@/components/app/texture";

export const metadata: Metadata = {
  title: "Blog — Praveen Raj",
  description: "Thoughts on frontend engineering, React, CSS, and building modern web applications.",
};

export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),_url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter text-[#22242C] dark:text-white">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition mb-12"
        >
          <ArrowLeft className="size-3.5" />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-[-1.5px] font-Fraunces mb-3">
            Writing
          </h1>
          <p className="text-lg text-black/50 dark:text-white/50 leading-relaxed">
            Frontend engineering, React, CSS, and building things people enjoy.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-black/40 dark:text-white/40">No posts yet.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row items-start gap-5 hover:opacity-90 transition-opacity"
              >
                {post.cover_image && (
                  <div className="relative w-full sm:w-36 shrink-0 aspect-video sm:aspect-square rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 144px"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-black/40 dark:text-white/30">
                      {fmtDate(post.published_at)}
                    </span>
                    <span className="text-black/20 dark:text-white/20">·</span>
                    <span className="text-xs font-medium text-black/50 dark:text-white/50">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-semibold text-base md:text-lg tracking-[-0.3px] leading-snug mb-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-black/50 dark:text-white/50 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRight className="size-4 text-black/30 dark:text-white/20 shrink-0 mt-1 transition-transform group-hover:translate-x-1 hidden sm:block" />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Texture />
    </main>
  );
}
