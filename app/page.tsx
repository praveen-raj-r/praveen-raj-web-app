import { createServerSupabaseClient } from "@/lib/supabase-server";
import LandingPage from "@/views/landing-page";
import type { SectionConfig, ContentConfig } from "@/types/site-config";

export const dynamic = "force-dynamic";

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

export default async function Home() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.from("site_config").select("key, value");
  const config = Object.fromEntries((data ?? []).map((r) => [r.key, r.value]));

  return (
    <LandingPage
      sections={{ ...DEFAULT_SECTIONS, ...(config.sections as SectionConfig) }}
      content={{ ...DEFAULT_CONTENT, ...(config.content as ContentConfig) }}
    />
  );
}
