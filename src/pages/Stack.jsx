import { LayoutGrid, List } from "lucide-react";
import Description from "../components/app/Description";
import { useState } from "react";

import stacks from "@/data/stackapps.json";

function Stack() {
  const [gridStatus, setGridStatus] = useState(true);
  return (
    <>
      <Description header="Tech Stack">
        The following is my on-the-go app stack for coding, managing,
        entertaining, and all...
      </Description>

      <ToggleButton gridStatus={gridStatus} setGridStatus={setGridStatus} />

      <ListContainer gridStatus={gridStatus} />
    </>
  );
}

function ListContainer({ gridStatus }) {
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
        {stacks.map((item, i) => {
          return (
            <a
              className="relative flex items-center p-3 m-0 cursor-pointer sm:p-4 "
              key={`techstack-app-${i}`}
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
          );
        })}
      </div>
    </>
  );
}

function ToggleButton({ gridStatus, setGridStatus }) {
  function handleToggle() {
    setGridStatus((s) => !s);
  }

  return (
    <div className="flex items-center justify-center gap-3 mx-auto mt-0 mb-6 text-[#72788899]">
      <span className="text-base font-semibold opacity-40">Grid</span>

      <div className="flex justify-center w-fit bg-[#ecedee26] rounded-[22px] p-0.5">
        <Button onClick={handleToggle} active={gridStatus}>
          <LayoutGrid size={18} />
        </Button>

        <Button onClick={handleToggle} active={!gridStatus}>
          <List size={18} />
        </Button>
      </div>

      <span className="text-base font-semibold opacity-40">List</span>
    </div>
  );
}

function Button({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` flex p-1 bg-transparent rounded-[16px] ${active ? "toogle-button-active" : ""
        }`}
    >
      {children}
    </button>
  );
}
export default Stack;
