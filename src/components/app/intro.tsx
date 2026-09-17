"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Instagram, Linkedin } from "lucide-react";

type IntroProps = {
  availabilityVisible?: boolean;
  availabilityText?: string;
};

const Intro = ({
  availabilityVisible = true,
  availabilityText = "Open to work",
}: IntroProps) => {
  return (
    <>
      <div className="mt-5 px-0 pt-4">
        <div className="max-w-187 w-full mx-auto relative items-center py-0 md:px-0 px-2">
          <div className="px-4 md:px-9.5 md:pt-4 md:pb-0 pt-1 pb-1">
            <div>
              <h2 className="text-4xl md:text-[56px] font-light tracking-[-1.5px] md:tracking-[-2.5px] leading-8.5 md:leading-13.5 max-w-200 font-Fraunces">
                Hi <span className="animate-pulse">👋</span>, I’m
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <span className="inline-flex relative ml-2 mr-2">
                      <Image
                        src="/praveen-raj-crop-2.png"
                        className="size-9 md:size-16 rounded-full translate-y-1.5 border md:border-2 border-neutral-900 shadow-sm"
                        alt="Praveen Raj"
                        width={64}
                        height={64}
                        sizes="(min-width: 768px) 64px, 36px"
                        priority
                      />
                    </span>
                  </DialogTrigger>
                  <DialogOverlay className="fixed inset-0 dark:bg-black/40 bg-white/40 backdrop-blur-md" />
                  <DialogContent className="bg-transparent border-none [&>button]:hidden shadow-none">
                    <DialogTitle className="sr-only">
                      Praveen Raj — profile photo
                    </DialogTitle>
                    <img src="/praveen-raj-crop.png" className="rounded-full" />
                  </DialogContent>
                </Dialog>
                Praveen Raj, <br /> a frontend engineer who builds complex,
                interactive SaaS with real-time UIs and scalable design systems.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className="max-w-187 w-full mx-auto relative items-center py-0 md:px-0 px-2">
          <div className="px-4 md:px-9.5 md:pb-0 pb-1">
            <div>
              {availabilityVisible && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {availabilityText}
                </div>
              )}
              <div className="flex flex-row items-center gap-5 my-5 mx-0">
                {[
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/nameispraveenraj/",
                    icon: Instagram,
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/praveenraj-sde/",
                    icon: Linkedin,
                  },
                  {
                    name: "Github",
                    href: "https://github.com/praveen-raj-r",
                    icon: Github,
                  },
                ].map(({ name, href, icon }) => {
                  const Icon = icon;
                  return (
                    <div key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-base cursor-pointer items-center gap-px sm:text-[#72788899] duration-300 hover:opacity-80 font-semibold dark:hover:text-white hover:text-[#000000]"
                      >
                        <Icon className="w-6 h-4" />
                        <span className="block">{name}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px]">
                My focus is the interactive, data-heavy parts of SaaS:{" "}
                <span className="font-semibold gradient sky-2">
                  tables, Kanban boards, real-time feeds, form flows.
                </span>{" "}
                The UI users live in all day.
              </p>

              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px]">
                I dig into{" "}
                <span className="font-semibold gradient retro-2">
                  browser behaviour
                </span>{" "}
                more than most. Stale cache, layout shifts, re-render issues. I
                find the{" "}
                <span className="font-semibold gradient dreamy-2">
                  root cause,
                </span>{" "}
                not the workaround.
              </p>

              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px]">
                Looking for a team that ships{" "}
                <span className="font-semibold gradient sky-3">
                  real product
                </span>{" "}
                and sweats the details. That’s where I do my best work. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
