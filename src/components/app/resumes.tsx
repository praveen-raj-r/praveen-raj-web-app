import { cn } from "@/lib/utils";
import { Copy, Download, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";

const Resumes = () => {
  const RESUME_PATH = "Praveen_Raj_Frontend_Engineer.pdf";
  const handleAction = async (label: string) => {
    const resumeUrl = new URL(RESUME_PATH, window.location.href).href;

    switch (label) {
      case "Download Resume": {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        if (isIOS) {
          window.open(RESUME_PATH, "_blank");
          return;
        }

        const link = document.createElement("a");
        link.href = RESUME_PATH;
        link.download = RESUME_PATH; // rename if you want
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }

      case "View Resume":
        window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
        break;

      case "Copy Resume Link":
        try {
          await navigator.clipboard.writeText(resumeUrl);
          toast.success("Resume link copied!");
        } catch {
          toast.error(`Failed Resume link: ${resumeUrl}`);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div id="resume" className="scroll-mt-40">
      <div className="max-w-[708px] w-full mx-auto relative items-center md:px-0 px-2">
        <div className="px-4 md:pb-0 pb-1">
          <ul className="flex flex-wrap items-center gap-2 mb-6">
            {[
              {
                label: "Download Resume",
                icon: Download,
                className: "from-[#c3c2ff] to-[#9dbeff] text-[#1c309d]",
              },
              {
                label: "View Resume",
                icon: ExternalLink,
                className: "from-[#f0d6ff] to-[#d3cdff] text-[#5c1bae]",
              },
              {
                label: "Copy Resume Link",
                icon: Copy,
                className: "from-[#fbceff] to-[#ffd1d1] text-[#d000a6]",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleAction(item.label)}
                    className={cn(
                      "group relative flex items-center gap-2 px-2 md:py-2 py-1 rounded-full font-medium cursor-pointer transition-all duration-300",
                      "border dark:border-white/10 bg-[#22242c]/5 dark:bg-white/5 text-[#22242c] dark:text-white backdrop-blur shadow-[0_0_0_1px_#ffffffc] transition-all duration-300 hover:bg-[#22242c]/10 dark:hover:bg-white/10 border-[#22242c]/10 hover:border-[#22242c]/20 dark:hover:border-white/20",
                    )}
                  >
                    <a
                      className={cn(
                        "bg-linear-to-r inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/20",
                        item.className,
                      )}
                    >
                      <Icon className="size-3.5 opacity-90 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <span
                      className={cn(
                        "relative flex items-center gap-2 text-sm tracking-wide",
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resumes;
