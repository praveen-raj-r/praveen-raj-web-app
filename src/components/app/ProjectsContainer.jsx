import { Link } from "react-router-dom";
// import projectImgs from "/3dicons.png";
import evergreenEscapesLogo from "/evergreen-escapes.png";
import shortenrLogo from "/shortenr.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    id: "1",
    img: evergreenEscapesLogo,
    header: "Evergreen Escapes",
    description: "Beautifully Crafted Cabin Booking Website",
    hrefUrl: "https://evergreen-escapes.vercel.app/",
  },
  {
    id: "2",
    img: shortenrLogo,
    header: "Shortenr App",
    description: "The only URL Shortener you'll ever need! ",
    hrefUrl: "https://shortenr-app.vercel.app/",
  },
];

function ProjectsContainer({ landingPage = false }) {
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
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project}></ProjectItem>
        ))}
      </div>
    </section>
  );
}

export default ProjectsContainer;
