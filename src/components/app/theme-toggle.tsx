import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      className="rounded-full border-none bg-transparent hover:bg-transparent shadow-none"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`flex items-center cursor-pointer transition-transform duration-500 ${
          isDark ? "rotate-0" : "rotate-180"
        }`}
      >
        {isDark ? (
          <Moon className="transition-all rotate-0  stroke-primary" />
        ) : (
          <Sun className="transition-all rotate-0  stroke-primary" />
        )}
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
}

export default ThemeToggle;
