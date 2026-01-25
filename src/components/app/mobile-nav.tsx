import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn, handleScroll } from "@/lib/utils";

const navItems = [
  { id: "projects", label: "projects" },
  { id: "timeline", label: "timeline" },
  { id: "tech-stack", label: "tech stack" },
  { id: "resume", label: "resume" },
  { id: "contact", label: "contact" },

  { id: "https://www.linkedin.com/in/praveenraj-sde/", label: "Linkedin" },
  { id: "https://github.com/praveen-raj-r", label: "Github" },
  { id: "https://www.instagram.com/nameispraveenraj/", label: "Instagram" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* ✅ Auto-close drawer when resized to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 708) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="min-[708px]:hidden block z-50">
        <div className="py-0.5 px-3">
          <HamBurgerMenu isOpen={isOpen} />
        </div>
      </DrawerTrigger>

      <DrawerContent className="h-full p-0 bg-[#ffffff4d] dark:bg-[#120c1b4d] backdrop-blur-[74px] overflow-hidden max-w-[250px]">
        {/* ✅ Close button */}
        <div
          onClick={() => setIsOpen(false)}
          className="pt-[45px] pr-14 ml-auto cursor-pointer"
        >
          <HamBurgerMenu isOpen={isOpen} />
        </div>

        {/* ✅ Links */}
        <ul className="flex flex-col items-end pr-10 py-[55px] h-full gap-4">
          {navItems.map((item) => {
            const isExternal = item.id.startsWith("http");

            return (
              <li
                key={item.label}
                className="text-2xl lowercase font-normal dark:text-white text-[#22242C]"
              >
                {isExternal ? (
                  <a
                    href={item.id}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      handleScroll(item.id);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const HamBurgerMenu = ({ isOpen }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setMounted(true), 250);
    } else {
      setTimeout(() => setMounted(false), 0);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-1 size-7 justify-center items-center">
      <span
        className={cn(
          "h-0.5 w-4 bg-primary rounded transition-all duration-300",
          mounted && "rotate-45 translate-y-1.5",
        )}
      />
      <span
        className={cn(
          "h-0.5 w-4 bg-primary rounded transition-opacity duration-300",
          mounted ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "h-0.5 w-4 bg-primary rounded transition-all duration-300",
          mounted && "-rotate-45 -translate-y-1.5",
        )}
      />
    </div>
  );
};

export default MobileNav;
