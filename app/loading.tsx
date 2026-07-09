export default function HomeLoading() {
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter">
      {/* Header */}
      <div className="max-w-177 mx-auto px-4 py-5 flex items-center justify-between">
        <div className="h-6 w-28 bg-black/6 dark:bg-white/6 rounded-lg animate-pulse" />
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-3 w-14 bg-black/5 dark:bg-white/5 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="h-8 w-8 rounded-full bg-black/5 dark:bg-white/5 animate-pulse" />
        </div>
      </div>

      <div className="max-w-177 mx-auto px-4">
        {/* Intro */}
        <div className="pt-8 pb-12 space-y-5 animate-pulse">
          <div className="space-y-3">
            <div className="h-12 w-3/4 bg-black/6 dark:bg-white/6 rounded-2xl" />
            <div className="h-12 w-2/3 bg-black/6 dark:bg-white/6 rounded-2xl" />
          </div>
          <div className="flex gap-5 pt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 w-20 bg-black/5 dark:bg-white/5 rounded-full" />
            ))}
          </div>
          <div className="space-y-2 max-w-2xl">
            <div className="h-4 w-full bg-black/4 dark:bg-white/4 rounded-full" />
            <div className="h-4 w-5/6 bg-black/4 dark:bg-white/4 rounded-full" />
            <div className="h-4 w-4/5 bg-black/4 dark:bg-white/4 rounded-full" />
          </div>
          <div className="space-y-2 max-w-2xl">
            <div className="h-4 w-full bg-black/4 dark:bg-white/4 rounded-full" />
            <div className="h-4 w-3/4 bg-black/4 dark:bg-white/4 rounded-full" />
          </div>
        </div>

        {/* Projects */}
        <div className="py-6 animate-pulse">
          <div className="h-6 w-24 bg-black/6 dark:bg-white/6 rounded-lg mb-2" />
          <div className="h-3 w-80 bg-black/4 dark:bg-white/4 rounded-full mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-[20px] bg-black/4 dark:bg-white/4 p-8 flex flex-col items-center gap-4">
                <div className="size-25 rounded-[18px] bg-black/6 dark:bg-white/6" />
                <div className="h-4 w-20 bg-black/5 dark:bg-white/5 rounded-full" />
                <div className="h-3 w-12 bg-black/4 dark:bg-white/4 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div className="py-6 animate-pulse">
          <div className="h-6 w-20 bg-black/6 dark:bg-white/6 rounded-lg mb-2" />
          <div className="h-3 w-96 bg-black/4 dark:bg-white/4 rounded-full mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-black/6 dark:border-white/6 overflow-hidden">
                <div className="w-full aspect-video bg-black/5 dark:bg-white/5" />
                <div className="p-5 space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 w-16 bg-black/5 dark:bg-white/5 rounded-full" />
                    <div className="h-3 w-20 bg-black/4 dark:bg-white/4 rounded-full" />
                  </div>
                  <div className="h-4 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                  <div className="h-4 w-4/5 bg-black/4 dark:bg-white/4 rounded-lg" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-full bg-black/3 dark:bg-white/3 rounded-full" />
                    <div className="h-3 w-3/4 bg-black/3 dark:bg-white/3 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="py-6 animate-pulse">
          <div className="h-6 w-24 bg-black/6 dark:bg-white/6 rounded-lg mb-2" />
          <div className="h-3 w-72 bg-black/4 dark:bg-white/4 rounded-full mb-8" />
          <div className="space-y-8 pl-4 border-l border-black/8 dark:border-white/8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 bg-black/5 dark:bg-white/5 rounded-full" />
                <div className="h-4 w-48 bg-black/6 dark:bg-white/6 rounded-lg" />
                <div className="h-3 w-full max-w-sm bg-black/4 dark:bg-white/4 rounded-full" />
                <div className="h-3 w-4/5 max-w-xs bg-black/3 dark:bg-white/3 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-6 animate-pulse">
          <div className="h-6 w-28 bg-black/6 dark:bg-white/6 rounded-lg mb-2" />
          <div className="h-3 w-64 bg-black/4 dark:bg-white/4 rounded-full mb-6" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-20 rounded-xl bg-black/4 dark:bg-white/4" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
