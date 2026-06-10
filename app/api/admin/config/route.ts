import { createServerSupabaseClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("site_config")
    .select("key, value");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    Object.fromEntries(data.map((r) => [r.key, r.value])),
  );
}

export async function PATCH(req: NextRequest) {
  const supabase = createServerSupabaseClient();
  const { key, value } = await req.json();

  const { error } = await supabase.from("site_config").upsert({
    key,
    value,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
