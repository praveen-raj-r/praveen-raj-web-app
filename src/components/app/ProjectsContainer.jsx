import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import projects from "@/data/projects";

function ProjectsContainer({ landingPage = false }) {
  const projectsToDisplay = landingPage ? projects.slice(0, 3) : projects;

  return (
    <section className="relative px-2 mt-4 md:py-4 md:mt-10">
      {landingPage && (
        <div className="flex items-center justify-between mb-5 text-sm sm:mb-0 sm:text-lg">
          <h2 className="px-4 m-0 uppercase tracking-[2px] font-black text-[#ffffff]">
            Current Projects
          </h2>
          <div className="flex">
            <Link
              className="gradient sky-2 text-[#72788899] leading-3 font-semibold capitalize px-4 py-0"
              to="/work"
            >
              All Works ▸
            </Link>
          </div>
        </div>
      )}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[14px] mt-[6px] p-1">
        {projectsToDisplay.map((project, id) => (
          <ProjectItem key={`project-${id}`} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsContainer;
