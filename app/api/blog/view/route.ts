import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();
  const { error } = await supabase.rpc("increment_blog_views", { post_slug: slug });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
