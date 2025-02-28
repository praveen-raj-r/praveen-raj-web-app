import { Link } from "react-router-dom";
import ProjectsContainer from "../projects-container";

const Heading = () => {
    return (
        <div className="flex justify-between items-center pb-4">
            <h2 className="uppercase sm:tracking-widest m-0 sm:text-[18px] text-[#4a576f99] dark:text-[#ffffff] font-medium text-nowrap">
                Current Projects
            </h2>
            <div className="flex">
                <Link
                    className="gradient sky-2 text-[#72788899] leading-3 font-semibold capitalize px-4 text-nowrap"
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
