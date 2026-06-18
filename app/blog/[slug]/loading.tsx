export default function BlogPostLoading() {
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/blog-top-gradient.svg'),url('/blog-bottom-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter text-[#22242C] dark:text-white">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 animate-pulse">
        {/* Back */}
        <div className="h-4 w-20 bg-black/8 dark:bg-white/8 rounded-full mb-12" />

        {/* Meta */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-16 bg-black/6 dark:bg-white/6 rounded-full" />
          <div className="h-3 w-1 bg-black/6 dark:bg-white/6 rounded-full" />
          <div className="h-5 w-20 bg-black/6 dark:bg-white/6 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-3 mb-4">
          <div className="h-9 w-full bg-black/8 dark:bg-white/8 rounded-xl" />
          <div className="h-9 w-4/5 bg-black/8 dark:bg-white/8 rounded-xl" />
        </div>

        {/* Excerpt */}
        <div className="h-4 w-2/3 bg-black/5 dark:bg-white/5 rounded-full mb-10" />

        {/* Cover image */}
        <div className="w-full aspect-video rounded-2xl bg-black/6 dark:bg-white/6 mb-10" />

        {/* Content lines */}
        <div className="space-y-3">
          {[100, 95, 88, 100, 92, 0, 70, 100, 96, 83, 100, 90, 0, 60, 100, 94, 87].map(
            (w, i) =>
              w === 0 ? (
                <div key={i} className="h-5" />
              ) : (
                <div
                  key={i}
                  className="h-3.5 bg-black/5 dark:bg-white/5 rounded-full"
                  style={{ width: `${w}%` }}
                />
              ),
          )}
        </div>
      </div>
    </main>
  );
}
