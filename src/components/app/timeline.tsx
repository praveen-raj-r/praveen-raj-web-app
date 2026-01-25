import timelines, { badgeStyles } from "@/data/timelines";
import DesignedHeading from "@/components/app/designed-heading";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const Timeline = () => {
  return (
    <div id="timeline" className="mt-4 md:mt-10 py-4 px-0 scroll-mt-40">
      <div className="relative items-center max-w-[708px] w-full mx-auto px-2 md:px-0">
        <div>
          <DesignedHeading
            heading="Timeline"
            description={`This is my story in milestones — from first sparks of curiosity to real projects on the web. For more updates and the longer version, you’ll find me on LinkedIn `}
          />

          <div className="p-4 md:p-0 md:pt-15">
            <div>
              {[...timelines].reverse().map((timeline, index) => {
                return (
                  <div
                    key={timeline.desc}
                    className="cursor-pointer my-0 mx-auto w-full relative"
                  >
                    <div className="flex md:flex-row flex-col justify-center">
                      <div
                        className={cn(
                          "min-w-[100px] mr-5 max-md:translate-y-1 -translate-y-1.5 max-md:border-l border-[#22242c26] dark:border-[#ecedee26]",
                          index === timelines.length - 1 && "border-0!",
                        )}
                      >
                        <p className="text-right text-sm font-semibold max-md:text-left max-md:text-xs max-md:ml-7">
                          {timeline.range}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "relative w-[420px] pl-4 pb-8 border-l border-[#22242c26] dark:border-[#ecedee26] max-md:w-full before:content-[''] before:absolute before:block before:w-2.5 before:h-2.5 before:-left-1.5 before:-top-0.5 before:rounded-[12px] before:border before:border-[#22242c26] dark:before:border-[#ecedee26] before:bg-[linear-gradient(270deg,#c3c1ff_0%,#a2c1ff_100%)] max-md:before:-top-[15px]",
                          index === timelines.length - 1 &&
                            "pb-0! border-0 before:-left-[5px]",
                        )}
                      >
                        <div className="relative">
                          <div className="flex flex-col p-3 -translate-y-5 max-md:translate-y-0.5 relative before:content-[''] before:absolute before:block before:opacity-0 before:scale-[0.8] before:-z-10 max-md:before:rounded-[14px] hover:border-transparent transition-all duration-333 before:-inset-0.5 before:rounded-2xl hover:before:opacity-100 hover:before:scale-100 before:transition-all before:duration-333 hover:before:bg-[linear-gradient(90deg,#ef87bb66_0%,#605b9945_100%)] dark:hover:before:bg-[linear-gradient(90deg,#1e1c32cc_0%,#2b161db2_100%)]">
                            <div>
                              {timeline.label.map((badge, index) => (
                                <div
                                  key={badge.text + index + badge.class + index}
                                  className={cn(
                                    "relative inline-grid text-[11px] font-bold leading-3.5 py-px px-1.5 rounded-[9px] mr-1.5 max-md:text-[10px]",
                                    badgeStyles[badge.class],
                                  )}
                                >
                                  {badge.text}
                                </div>
                              ))}

                              <h3 className="my-2 mx-0 text-lg font-semibold">
                                {timeline.title}
                              </h3>
                              <p className="text-[15px] leading-[140%] tracking-[-0.18px] mb-3 opacity-90 max-md:text-[14px] max-md:tracking-[-0.15px]">
                                {timeline.desc}
                              </p>
                              <div className="flex items-center gap-3 flex-wrap">
                                {timeline.github && (
                                  <a
                                    href={timeline.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 dark:bg-white/5 bg-black/5 p-1 text-xs text-black dark:text-white backdrop-blur shadow-[0_0_0_1px_#ffffffc] transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 dark:hover:border-white/20 hover:border-black/20"
                                  >
                                    <Github className="size-3.5 opacity-90 group-hover:opacity-100 transition-opacity" />
                                  </a>
                                )}
                                {timeline.link && (
                                  <a
                                    href={timeline.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 dark:bg-white/5 bg-black/5 p-1 text-xs text-black dark:text-white backdrop-blur shadow-[0_0_0_1px_#ffffffc] transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 dark:hover:border-white/20 hover:border-black/20 px-3 py-1"
                                  >
                                    <span className="truncate max-w-40 group-hover:text-black dark:group-hover:text-white transition-colors">
                                      {timeline.link
                                        .replace(/^https?:\/\//, "")
                                        .replace(/\/$/, "")}
                                    </span>

                                    <ExternalLink className="size-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
