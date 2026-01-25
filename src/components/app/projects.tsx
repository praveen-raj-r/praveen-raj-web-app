import DesignedHeading from "@/components/app/designed-heading";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <div id="projects" className="py-4 px-0 scroll-mt-40">
      <div className="relative items-center max-w-[708px] w-full mx-auto px-2 sm:px-0">
        <div>
          <DesignedHeading
            heading="Projects"
            description="These projects are little highlights of my journey built with curiosity, care, and a lot of late-night coding. Feel free to explore."
          />

          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3.5 mt-1.5 p-1">
            {projects.map((project) => (
              <a
                className="text-[#ecedee] cursor-pointer block"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.image}
              >
                <div className="group relative cursor-pointer mb-3 flex flex-col items-center gap-4 px-3 py-8 rounded-[20px] dark:bg-[#191920e6] bg-[#f5f5f599] overflow-hidden">
                  {/* 1. IMAGE LAYER */}
                  <div className="relative w-full z-10 transition-all duration-500 ease-out group-hover:blur-md group-hover:scale-110 group-hover:opacity-40 ">
                    <img
                      className=" size-[100px] mx-auto rounded-[18px] shadow-[0px_2.9px_5.7px_#00000033,0px_8.6px_8.6px_#00000033,0px_21.4px_13px_#00000026,0px_37.1px_15px_#000000c] dark:shadow-[0px_2.9px_5.7px_#0000004c,0px_8.6px_8.6px_#00000033,0px_21.4px_13px_#00000033,0px_37.1px_15px_#00000033]"
                      src={project.image}
                      alt=""
                    />
                    <div
                      className={cn(
                        "bg-[#00bb83cc] absolute left-1/2 -top-2 -translate-x-1/2 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase text-white backdrop-blur-sm",
                        project.badge === "NEW"
                          ? "bg-[linear-gradient(90deg,#566cec,#d749af_50%,#ff7c51)]"
                          : "bg-[#00bb83cc]",
                      )}
                    >
                      {project.badge}
                    </div>
                  </div>

                  {/* 2. INITIAL TEXT (Visible by default, disappears on hover) */}
                  <div className="flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90 group-hover:blur-sm">
                    <h3 className="text-[16px] font-bold text-center tracking-tight dark:text-white text-[#22242C]">
                      {project.projectTitle}
                    </h3>
                    <h4 className="text-[13px] opacity-70 dark:text-white text-[#22242C]">
                      {project.year}
                    </h4>
                  </div>

                  {/* 3. HOVER TEXT LAYER (Hidden by default, appears on top) */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-[18px] text-center font-bold tracking-tight dark:text-white text-[#22242C] drop-shadow-md">
                      {project.projectTitle}
                    </h3>
                    <p className="text-center text-[15px] dark:text-white/70 text-[#22242C]/70 mt-2 leading-snug line-clamp-3">
                      {project.description}
                    </p>
                    <h4 className="text-[12px] font-medium opacity-40 mt-3 dark:text-white text-[#22242C]">
                      {project.year}
                    </h4>

                    {/* Optional: The Icon */}
                    <div className="mt-4 p-2 rounded-full bg-white/10 border border-white/10 hover:bg-[#00bb83] transition-colors">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col justify-center items-center text-center px-3 dark:text-white text-[#22242C]">
                  <p className="line-clamp-3 text-xs">{project.description}.</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
