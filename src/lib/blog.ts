import { unstable_cache } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export type BlogPostMeta = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published_at: string;
  cover_image: string | null;
  views: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  published: boolean;
};

export const getAllPosts = unstable_cache(
  async (): Promise<BlogPostMeta[]> => {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("id, slug, title, category, excerpt, published_at, cover_image, views")
      .eq("published", true)
      .order("published_at", { ascending: false });
    return data ?? [];
  },
  ["blog-all-posts"],
  { revalidate: 3600, tags: ["blog"] },
);

export const getRecentPosts = unstable_cache(
  async (n = 6): Promise<BlogPostMeta[]> => {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("id, slug, title, category, excerpt, published_at, cover_image, views")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(n);
    return data ?? [];
  },
  ["blog-recent-posts"],
  { revalidate: 3600, tags: ["blog"] },
);

export const getPost = unstable_cache(
  async (slug: string): Promise<BlogPost | null> => {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    return data ?? null;
  },
  ["blog-post"],
  { revalidate: 3600, tags: ["blog"] },
);

export function fmtDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
