interface Project {
    hrefUrl: string;
    img: string;
    header: string;
    description: string;
}

const ProjectItem = ({ project }: { project: Project }) => {
    return (
        <a
            className="text-[#ecedee] cursor-pointer"
            href={`${project.hrefUrl}`}
            target="_blank"
        >
            <div className="project-cards">
                <div className="min-w-[96px] md:max-w-[200px] max-w-[96px] md:w-full leading-[0px] relative">
                    <img className="rounded-xl" src={project.img} alt="" />
                </div>
                <div className="flex flex-col ml-3 mr-2 md:m-0 mt-0 md:mt-[6px]">
                    <h3 className="text-base font-bold leading-[-0.4px] items-center flex my-1 mx-0">
                        {project.header}
                    </h3>
                    <p className="text-[15px] m-0 opacity-60 tracking-[-0.25px] font-normal leading-[140%]">
                        {project.description}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default ProjectItem;
