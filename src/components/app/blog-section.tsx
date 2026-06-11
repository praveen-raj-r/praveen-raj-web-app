import Link from "next/link";
import { getRecentPosts, fmtDate } from "@/lib/blog";
import DesignedHeading from "@/components/app/designed-heading";
import { ArrowRight } from "lucide-react";

const BlogSection = async () => {
  const posts = await getRecentPosts(6);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="mt-4 md:mt-10 py-4 px-0 scroll-mt-40">
      <div className="relative max-w-177 w-full mx-auto px-2 md:px-0">
        <DesignedHeading
          heading="Writing"
          description="Thoughts on frontend engineering, React, CSS, and building things people enjoy using."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-black/10 dark:border-white/8 bg-black/2 dark:bg-white/3 hover:border-black/20 dark:hover:border-white/15 hover:bg-black/4 dark:hover:bg-white/5 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-black/6 dark:bg-white/8 text-black/60 dark:text-white/60">
                  {post.category}
                </span>
                <span className="text-xs text-black/40 dark:text-white/30">
                  {fmtDate(post.published_at)}
                </span>
              </div>

              <h3 className="font-semibold text-[15px] leading-snug tracking-[-0.3px] text-[#22242C] dark:text-white group-hover:text-black dark:group-hover:text-white line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-[#22242C]/60 dark:text-white/50 leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <span className="text-xs font-medium text-[#22242C]/50 dark:text-white/40 group-hover:text-[#22242C] dark:group-hover:text-white flex items-center gap-1 transition-colors mt-auto">
                Read more
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/15 dark:border-white/15 text-sm font-medium text-[#22242C]/70 dark:text-white/60 hover:text-[#22242C] dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all"
          >
            View all posts
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
