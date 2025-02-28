import { projects } from "@/data/projects";
import ProjectItem from "./project-item";

const ProjectsContainer = ({ landingPage = false }) => {
    const projectsToDisplay = landingPage ? projects.slice(0, 3) : projects;

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[14px] mt-[6px] py-1">
            {projectsToDisplay.map((project, id) => (
                <ProjectItem key={`project-${id}`} project={project} />
            ))}
        </div>
    );
};

export default ProjectsContainer;
