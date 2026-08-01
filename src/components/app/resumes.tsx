import { createServerSupabaseClient } from "@/lib/supabase-server";
import ResumesButtons from "@/components/app/resumes-buttons";

const Resumes = async () => {
  const supabase = createServerSupabaseClient();

  const { data: files } = await supabase.storage
    .from("portfolios")
    .list("", { limit: 1, sortBy: { column: "created_at", order: "desc" } });

  const filename = files?.[0]?.name;
  if (!filename) return null;

  const { data: { publicUrl } } = supabase.storage
    .from("portfolios")
    .getPublicUrl(filename);

  return <ResumesButtons url={publicUrl} filename={filename} />;
};

export default Resumes;
