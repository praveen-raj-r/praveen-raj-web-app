import { Link } from "react-router-dom";
import projectImgs from "/3dicons.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: "1",
    img: projectImgs,
    header: "3dicons",
    description: "Beautifully Crafted Open-source 3dicons library",
    hrefUrl: "",
  },
  {
    id: "2",
    img: projectImgs,
    header: "3dicons",
    description: "Beautifully Crafted Open-source 3dicons library",
    hrefUrl: "",
  },
  {
    id: "3",
    img: projectImgs,
    header: "3dicons",
    description: "Beautifully Crafted Open-source 3dicons library",
    hrefUrl: "",
  },
];

function CurrentProjects() {
  return (
    <section className="relative px-2 mt-4 md:py-4 md:mt-10">
      <div className="flex items-center justify-between">
        <h2 className="px-4 text-[14px] m-0 uppercase tracking-[2px] text-[#72788899] opacity-70">
          Current Projects
        </h2>
        <div className="flex">
          <Link
            className="gradient sky-2 text-[#72788899] text-xs leading-3 font-semibold capitalize px-4 py-0"
            to="/work"
          >
            All Works ▸
          </Link>
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[14px] mt-[6px] p-1">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project}></ProjectItem>
        ))}
      </div>
    </section>
  );
}

export default CurrentProjects;
