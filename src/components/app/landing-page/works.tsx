import { Link } from "react-router-dom";
import ProjectsContainer from "../projects-container";

const Heading = () => {
    return (
        <div className="flex justify-between items-center">
            <h2 className="uppercase tracking-widest m-0 text-[18px] py-0 px-4 text-[#4a576f99] dark:text-[#ffffff] font-medium">
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
    );
};

const Works = () => {
    return (
        <div className="mt-10 flex flex-col">
            <Heading />
            <ProjectsContainer />
        </div>
    );
};

export default Works;
