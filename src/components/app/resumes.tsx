import { unstable_cache } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import ResumesButtons from "@/components/app/resumes-buttons";

const fetchResume = unstable_cache(
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
  ["portfolio-resume"],
  { revalidate: 86400, tags: ["resume"] },
);

const Resumes = async () => {
  const resume = await fetchResume();
  if (!resume) return null;
  return <ResumesButtons url={resume.url} filename={resume.filename} />;
};

export default Resumes;
