import { createServerSupabaseClient } from "@/lib/supabase-server";
import { unstable_cache } from "next/cache";

const fetchResumeSource = unstable_cache(
  async () => {
    const supabase = createServerSupabaseClient();
    const { data: files } = await supabase.storage
      .from("portfolios")
      .list("", { limit: 1, sortBy: { column: "created_at", order: "desc" } });
    const filename = files?.[0]?.name;
    if (!filename) return null;
    const { data: { publicUrl } } = supabase.storage.from("portfolios").getPublicUrl(filename);
    return { url: publicUrl, filename };
  },
  ["resume-source"],
  { revalidate: 86400, tags: ["resume"] },
);

export async function GET(req: Request) {
  const resume = await fetchResumeSource();
  if (!resume) return new Response("Not found", { status: 404 });

  const upstream = await fetch(resume.url);
  if (!upstream.ok) return new Response("Not found", { status: 404 });

  const download = new URL(req.url).searchParams.has("download");

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${resume.filename}"`,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
