export default function HomeLoading() {
  return (
    <main className="min-h-screen relative flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:-z-50 before:bg-[url('/header-gradient.svg'),url('/footer-gradient.svg')] before:bg-no-repeat before:bg-position-[top_center,bottom_center] before:bg-size-[1400px] font-inter">
      <div className="flex flex-col items-center gap-5">
        {/* Track */}
        <div className="relative w-48 h-1 rounded-full bg-black/8 dark:bg-white/8 overflow-hidden">
          {/* Sliding bar */}
          <span
            className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-linear-to-r from-[#c3c2ff] via-[#9dbeff] to-[#c3c2ff]"
            style={{ animation: "slidebar 1.4s ease-in-out infinite" }}
          />
        </div>

        <p className="text-xs tracking-widest uppercase text-black/25 dark:text-white/25 font-medium select-none">
          Loading
        </p>
      </div>

      <style>{`
        @keyframes slidebar {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(300%);  }
        }
      `}</style>
    </main>
  );
}
