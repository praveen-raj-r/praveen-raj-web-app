import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Instagram, Linkedin } from "lucide-react";

const Intro = () => {
  return (
    <>
      <div className="mt-5 px-0 pt-4">
        <div className="max-w-[708px] w-full mx-auto relative items-center py-0 md:px-0 px-2">
          <div className="px-4 md:pt-4 md:pb-0 pt-1 pb-1">
            <div>
              <h2 className="text-4xl md:text-[56px] font-light tracking-[-1.5px] md:tracking-[-2.5px] leading-8.5 md:leading-[54px] max-w-[640px] font-Fraunces">
                Hi <span className="animate-pulse">👋</span>, I’m
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <span className="inline-flex relative ml-2 mr-2">
                      <img
                        src="/praveen-raj-crop-2.png"
                        className="size-9 md:size-16 rounded-full translate-y-1.5 border md:border-2 border-neutral-900 shadow-sm"
                        alt="Praveen Raj"
                      />
                    </span>
                  </DialogTrigger>
                  <DialogOverlay className="fixed inset-0 dark:bg-black/40 bg-white/40 backdrop-blur-md" />
                  <DialogContent className="bg-transparent border-none [&>button]:hidden shadow-none">
                    <img src="/praveen-raj-crop.png" className="rounded-full" />
                  </DialogContent>
                </Dialog>
                Praveen Raj, <br /> a frontend engineer building modern,
                high-performance digital experiences.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className="max-w-[708px] w-full mx-auto relative items-center py-0 md:px-0 px-2">
          <div className="px-4 md:pb-0 pb-1">
            <div>
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
              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px] max-w-[640px]">
                Hey! 👋 I’m Praveen Raj, a{" "}
                <span className="font-semibold gradient sky-2">
                  frontend engineer
                </span>{" "}
                from Chennai who loves turning ideas into{" "}
                <span className="font-semibold gradient retro-2">
                  pixel-perfect interfaces
                </span>{" "}
                and{" "}
                <span className="font-semibold gradient retro-2">
                  smooth user experiences
                </span>
                .
              </p>

              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px] max-w-[640px]">
                I build modern,{" "}
                <span className="font-semibold gradient retro-2">
                  Single Page Applications (SPAs), SaaS products, and Corporate
                  websites, Dashboards
                </span>{" "}
                that feel <span className="font-semibold">fast</span>,{" "}
                <span className="font-semibold gradient dreamy-2">
                  intuitive
                </span>
                , and crafted with intention.
              </p>

              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px] max-w-[640px]">
                For me, great frontend isn’t just design. It’s{" "}
                <span className="font-semibold gradient retro-2">
                  clean architecture
                </span>
                ,{" "}
                <span className="font-semibold gradient retro-2">
                  reusable components
                </span>
                , and{" "}
                <span className="font-semibold gradient sky-3">
                  scalable systems
                </span>{" "}
                that grow beautifully over time.
              </p>

              <p className="text-lg md:text-xl leading-[140%] font-normal my-4 mx-0 tracking-[-0.28px] max-w-[640px]">
                From planning every detail to polishing the final interaction, I
                focus on one thing: building{" "}
                <span className="font-semibold gradient retro-3">
                  web experiences
                </span>{" "}
                people genuinely{" "}
                <span className="font-semibold">enjoy using</span>. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
