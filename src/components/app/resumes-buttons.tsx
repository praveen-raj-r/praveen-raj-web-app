"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Download, ExternalLink, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

type Props = { url: string; filename: string };

const ResumesButtons = ({ url, filename }: Props) => {
  const [downloading, setDownloading] = useState(false);

  const handleAction = async (label: string) => {
    switch (label) {
      case "Download Resume": {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const downloadUrl = url.startsWith("/") ? `${url}?download` : url;

        if (isIOS) {
          window.open(downloadUrl, "_blank");
          return;
        }

        setDownloading(true);
        try {
          const response = await fetch(downloadUrl);
          if (!response.ok) throw new Error("Download failed");
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        } catch {
          toast.error("Download failed — try again");
        } finally {
          setDownloading(false);
        }
        break;
      }

      case "View Resume":
        window.open(url, "_blank", "noopener,noreferrer");
        break;

      case "Copy Resume Link": {
        const fullUrl = url.startsWith("/")
          ? `${window.location.origin}${url}`
          : url;
        try {
          await navigator.clipboard.writeText(fullUrl);
          toast.success("Resume link copied!");
        } catch {
          toast.error("Failed to copy link");
        }
        break;
      }
    }
  };

  const buttons = [
    {
      label: "Download Resume",
      icon: downloading ? Loader2 : Download,
      iconClass: downloading ? "animate-spin" : "",
      className: "from-[#c3c2ff] to-[#9dbeff] text-[#1c309d]",
      disabled: downloading,
    },
    {
      label: "View Resume",
      icon: ExternalLink,
      iconClass: "",
      className: "from-[#f0d6ff] to-[#d3cdff] text-[#5c1bae]",
      disabled: false,
    },
    {
      label: "Copy Resume Link",
      icon: Copy,
      iconClass: "",
      className: "from-[#fbceff] to-[#ffd1d1] text-[#d000a6]",
      disabled: false,
    },
  ];

  return (
    <div id="resume" className="scroll-mt-40">
      <div className="max-w-200 w-full mx-auto relative items-center md:px-0 px-2">
        <div className="px-4 md:pb-0 pb-1">
          <ul className="flex flex-wrap items-center gap-2 mb-6">
            {buttons.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleAction(item.label)}
                    disabled={item.disabled}
                    className={cn(
                      "group relative flex items-center gap-2 px-2 md:py-2 py-1 rounded-full font-medium transition-all duration-300",
                      "border dark:border-white/10 bg-[#22242c]/5 dark:bg-white/5 text-[#22242c] dark:text-white backdrop-blur shadow-[0_0_0_1px_#ffffffc] hover:bg-[#22242c]/10 dark:hover:bg-white/10 border-[#22242c]/10 hover:border-[#22242c]/20 dark:hover:border-white/20",
                      item.disabled
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer",
                    )}
                  >
                    <a
                      className={cn(
                        "bg-linear-to-r inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/20",
                        item.className,
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-3.5 opacity-90 group-hover:opacity-100 transition-opacity",
                          item.iconClass,
                        )}
                      />
                    </a>
                    <span className="relative flex items-center gap-2 text-sm tracking-wide">
                      {item.label === "Download Resume" && downloading
                        ? "Downloading…"
                        : item.label}
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

export default ResumesButtons;
