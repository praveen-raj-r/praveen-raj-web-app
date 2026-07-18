import { createServerSupabaseClient } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createServerSupabaseClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("title, slug, excerpt, category, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  const postLines = (posts ?? [])
    .map(
      (p) =>
        `- [${p.title}](https://praveen-raj.vercel.app/blog/${p.slug}): ${p.excerpt}`
    )
    .join("\n");

  const body = `# Praveen Raj

> Frontend Engineer based in Chennai, India

Praveen Raj is a frontend engineer with experience building React-based SPAs, SaaS products, corporate websites, and dashboards. He specialises in TypeScript, Tailwind CSS, Next.js, and scalable component architecture.

## Portfolio

- Home: https://praveen-raj.vercel.app
- Blog: https://praveen-raj.vercel.app/blog
- GitHub: https://github.com/praveen-raj-r
- LinkedIn: https://www.linkedin.com/in/praveenraj-sde/

## Writing

${postLines || "No posts published yet."}

## Tech Stack

React, Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Framer Motion, Zustand, React Query, Vite, Node.js

## Contact

Email: praveen1220raj@gmail.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
