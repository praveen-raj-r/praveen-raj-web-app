import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  workplace: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  source: z.string().min(1),
  helpWith: z.array(z.string()).min(1),
  notes: z.string().optional(),
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, workplace, email, phone, source, helpWith, notes } =
      parsed.data;

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      workplace: workplace || null,
      email,
      phone: phone || null,
      source,
      help_with: helpWith,
      notes: notes || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
