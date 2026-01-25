import Logo from "./logo";
import { Github, Instagram, Linkedin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import MobileNav from "./mobile-nav";
import { useEffect, useRef, useState } from "react";
import { cn, handleScroll } from "@/lib/utils";

const Header = () => {
  const isManualScroll = useRef(false);

  const [activeSection, setActiveSection] = useState("projects");

  const navItems = [
    { id: "projects", label: "projects" },
    { id: "timeline", label: "timeline" },
    { id: "tech-stack", label: "tech stack" },
    { id: "resume", label: "resume" },
    { id: "contact", label: "contact" },
  ];

  const scrollToTop = () => {
    isManualScroll.current = true;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveSection("projects");

    // ✅ Allow observer again after scroll finishes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  // ✅ Active Highlight Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return; // ✅ Ignore observer updates

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-[708px] mx-auto sticky top-0 z-50">
      <div className="pt-6 px-2">
        <div className="bg-[#120c1b4c] px-[30px] py-4 rounded-[36px] flex justify-between backdrop-blur-[44px] shadow-[inset_0px_0px_8px_#ffffff14]">
          {/* ✅ Logo */}
          <Logo onClick={scrollToTop} />

          {/* ✅ Desktop Nav */}
          <div className="hidden min-[708px]:flex items-center max-h-10 ml-2 relative">
            <ul className="hidden min-[708px]:flex gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={cn(
                      "text-sm capitalize font-semibold transition-all duration-300 text-nowrap cursor-pointer",
                      activeSection === item.id
                        ? "text-[#22242C] dark:text-white opacity-100"
                        : "dark:text-white/50 dark:hover:text-white text-[#22242C]/50 hover:text-[#22242C]",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center max-h-10">
            <div className="flex items-center max-h-10 mr-3 border-r-[#22242C] dark:border-r-white border-r  pr-1">
              {[
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/praveenraj-sde/",
                  id: "Linkedin",
                },
                {
                  icon: Github,
                  link: "https://github.com/praveen-raj-r",
                  id: "Github",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/nameispraveenraj/",
                  id: "Instagram",
                },
              ].map((socialLink) => {
                const Icon = socialLink.icon;
                return (
                  <a
                    key={socialLink.id + "socialLinks-headr"}
                    href={socialLink.link}
                    target="_blank"
                    rel="noreferrer"
                    className="leading-0 py-0.5 px-3"
                  >
                    <Icon className="text-primary size-5 sm:size-4" />
                  </a>
                );
              })}
            </div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
