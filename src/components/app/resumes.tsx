import { unstable_cache } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import ResumesButtons from "@/components/app/resumes-buttons";

const fetchResumeFilename = unstable_cache(
  async () => {
    const supabase = createServerSupabaseClient();
    const { data: files } = await supabase.storage
      .from("portfolios")
      .list("", { limit: 1, sortBy: { column: "created_at", order: "desc" } });
    return files?.[0]?.name ?? null;
  },
  ["portfolio-resume"],
  { revalidate: 86400, tags: ["resume"] },
);

const Resumes = async () => {
  const filename = await fetchResumeFilename();
  if (!filename) return null;
  return <ResumesButtons url="/resume" filename={filename} />;
};

export default Resumes;
