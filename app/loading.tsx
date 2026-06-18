export default function HomeLoading() {
  return (
    <main className="min-h-screen relative before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px]">
      <div className="max-w-177 mx-auto px-4 py-20 animate-pulse space-y-16">
        <div className="space-y-4">
          <div className="h-12 w-64 bg-black/6 dark:bg-white/6 rounded-2xl" />
          <div className="h-5 w-96 bg-black/5 dark:bg-white/5 rounded-full" />
          <div className="h-5 w-80 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-52 rounded-2xl bg-black/5 dark:bg-white/5" />
          ))}
        </div>
      </div>
    </main>
  );
}
