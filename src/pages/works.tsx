import AllPageDescription from "@/components/app/all-page-description";
import ProjectsContainer from "@/components/app/projects-container";

const Works = () => {
  return (
    <div>
      <AllPageDescription header="Works">
        Explore my projects and work experience, showcasing the skills and
        technologies I’ve applied to build impactful solutions. From web
        applications to creative problem-solving, this page highlights my
        journey through real-world projects.
      </AllPageDescription>
      <ProjectsContainer />
    </div>
  );
};

export default Works;
