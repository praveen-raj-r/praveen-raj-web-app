export default function BlogLoading() {
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/blog-top-gradient.svg'),url('/blog-bottom-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter text-[#22242C] dark:text-white">
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 animate-pulse">
        {/* Back */}
        <div className="h-4 w-32 bg-black/8 dark:bg-white/8 rounded-full mb-12" />

        {/* Header */}
        <div className="mb-12">
          <div className="h-10 w-48 bg-black/8 dark:bg-white/8 rounded-xl mb-3" />
          <div className="h-4 w-80 bg-black/6 dark:bg-white/6 rounded-full" />
        </div>

        {/* Post rows */}
        <div className="flex flex-col gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="w-full sm:w-36 shrink-0 aspect-video sm:aspect-square rounded-xl bg-black/6 dark:bg-white/6" />
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-3 w-24 bg-black/6 dark:bg-white/6 rounded-full" />
                <div className="h-5 w-3/4 bg-black/8 dark:bg-white/8 rounded-lg" />
                <div className="h-3 w-full bg-black/5 dark:bg-white/5 rounded-full" />
                <div className="h-3 w-5/6 bg-black/5 dark:bg-white/5 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
