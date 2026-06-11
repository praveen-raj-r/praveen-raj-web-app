import { createServerSupabaseClient } from "@/lib/supabase-server";
import { Dashboard } from "./_components/dashboard";
import type { SectionConfig, ContentConfig } from "@/types/site-config";
import type { Submission } from "./_components/dashboard";

const DEFAULT_SECTIONS: SectionConfig = {
  intro: true,
  resumes: true,
  projects: true,
  timeline: true,
  tech_stack: true,
  blog: true,
  contact: true,
};

const DEFAULT_CONTENT: ContentConfig = {
  availability_visible: true,
  availability_text: "Open to work",
};

export default async function AdminPage() {
  const supabase = createServerSupabaseClient();

  const [{ data: configRows }, { data: submissions }] = await Promise.all([
    supabase.from("site_config").select("key, value"),
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

  const config = Object.fromEntries(
    (configRows ?? []).map((r) => [r.key, r.value]),
  );

  return (
    <Dashboard
      submissions={(submissions ?? []) as Submission[]}
      sections={{ ...DEFAULT_SECTIONS, ...(config.sections as SectionConfig) }}
      content={{ ...DEFAULT_CONTENT, ...(config.content as ContentConfig) }}
    />
  );
}
