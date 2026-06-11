import { createServerSupabaseClient } from "@/lib/supabase-server";

export type BlogPostMeta = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published_at: string;
  cover_image: string | null;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  published: boolean;
};

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, slug, title, category, excerpt, published_at, cover_image")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return data ?? [];
}

export async function getRecentPosts(n = 6): Promise<BlogPostMeta[]> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, slug, title, category, excerpt, published_at, cover_image")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(n);
  return data ?? [];
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  return data ?? null;
}

export function fmtDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
