import { useTheme } from "@/context/theme-provider";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex items-center max-h-10 p-0 scale-[0.88] relative">
      <button
        onClick={onClick} // ✅ use passed function
        className="cursor-pointer leading-0 text-primary"
      >
        <SvgLogo />
        {/* <span className="logo-font-babbler text-[25px] font-semibold">
          realpraveen
        </span> */}
      </button>
    </div>
  );
};

export const SvgLogo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <img
      src={isDark ? "/realpraveenlog-white.svg" : "/realpraveenlog.svg"}
      alt=""
    />
  );
};

export default Logo;
