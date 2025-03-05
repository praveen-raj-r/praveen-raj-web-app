import { FC } from "react";

interface StackItem {
  link: string;
  img: string;
  title: string;
  label: string;
  description: string;
}

interface TechStackContainerProps {
  gridStatus: boolean;
  stacks: StackItem[];
}

const TechStackContainer: FC<TechStackContainerProps> = ({
  gridStatus,
  stacks,
}) => {
  return (
    <>
      <h2 className="py-0 m-0 mt-10 text-lg text-center tracking-[2px] text-[#72788899] opacity-70 p-1">
        APPS and GAMES
      </h2>
      <div
        className={`${gridStatus
            ? " grid-cols-4 sm:grid-cols-5"
            : "max-w-[500px] grid-cols-1"
          } relative grid mx-auto mt-3 mb-0 w-fit transition-[0.25s] p-1 gap-2`}
      >
        {stacks.map((item) => (
          <a
            className="relative flex items-center p-3 m-0 cursor-pointer sm:p-4 "
            key={`techstack-app-${item.img}`}
            href={item.link}
          >
            <div
              className={`w-[60px] rouned-[8px] transition-[0.25s] leading-[0] relative stack-design-before ${gridStatus ? "" : "hidden"
                }`}
            >
              <img src={item.img} className="rounded-[8px] size-[60px]" />
            </div>
            <div
              className={`${gridStatus ? "hidden" : ""
                } flex gap-4 design-hover-before items-center`}
            >
              <img className="size-24" src={item.img} alt="" />

              <div className="flex flex-col transition-[100ms]">
                <h3 className="relative flex items-center mx-0 my-1">
                  {item.title}
                  <div className="relative ml-2 text-xs blue rounded-[9px] py-px px-1.5 inline-grid">
                    {item.label}
                  </div>
                </h3>
                <p className="leading-[140%] opacity-60 m-0">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default TechStackContainer;
