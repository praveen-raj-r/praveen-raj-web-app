import { LayoutGrid, List } from "lucide-react";
import Description from "../components/app/Description";
import { useState } from "react";
import vscode from "/vscode.png";
import chrome from "/chrome.png";
import notion from "/notion.png";
import figma from "/figma.png";
import spotify from "/spotify.png";
import visualStudio from "/visualStudio.png";
import discord from "/discord.png";
import slack from "/slack.png";
import bootstrap from "/bootstrap.png";
import tailwindCss from "/tailwindCss.png";
import react from "/react.png";
import vercel from "/vercel.png";

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
const stacks = [
  {
    title: "VS Code",
    label: "Coding",
    link: "",
    img: vscode,
    description:
      "The best and recommended IDE for developing. Very ease to use and have lots of add-ons.",
  },
  {
    title: "Visual Studio",
    label: "Coding",
    link: "https://visualstudio.microsoft.com/",
    img: visualStudio,
    description:
      "The best and recommended IDE for developing. Very ease to use and have lots of add-ons.",
  },
  {
    title: "Discord",
    label: "Coding",
    link: "https://discord.com/",
    img: discord,
    description:
      "The voice and text chat features are top-notch and the app is easy to use.",
  },
  {
    title: "Chrome",
    label: "Productivity",
    link: "https://www.google.com/intl/en_in/chrome/",
    img: chrome,
    description:
      "Chrome is still my favorite browser despite trying other ones.",
  },
  {
    title: "Notion",
    label: "Productivity",
    link: "https://www.google.com/intl/en_in/chrome/",
    img: notion,
    description:
      "Notion is an amazing app that helps me stay organized and on top of my tasks.",
  },
  {
    title: "Spotify",
    label: "Entertainment",
    link: "https://open.spotify.com/",
    img: spotify,
    description:
      "Spotify offers the best music discovery and recommendation app as well as podcast place.",
  },
  {
    title: "Figma",
    label: "Design",
    link: "https://www.figma.com/",
    img: figma,
    description:
      "Figma is my design tool of choice. I do every design work from planning, ui design to creating beautiful illustrations",
  },
  {
    title: "Slack",
    label: "Communication",
    link: "https://slack.com/intl/en-in/",
    img: slack,
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done.",
  },
  {
    title: "Bootstrap",
    label: "Development",
    link: "https://slack.com/intl/en-in/",
    img: bootstrap,
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done.",
  },
  {
    title: "Tailwind CSS",
    label: "Development",
    link: "https://slack.com/intl/en-in/",
    img: tailwindCss,
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done.",
  },
  {
    title: "react",
    label: "Development",
    link: "https://react.dev/",
    img: react,
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done.",
  },
  {
    title: "vercel",
    label: "Development",
    link: "https://react.dev/",
    img: vercel,
    description:
      "Slack brings team communication and collaboration into one place so you can get more work done.",
  },
];

// 1. Vercel
// 3. Next.js
// 4. Redux
// 5. React .JS
// 6. Tailwind css
// 7. bootstrap
function ListContainer({ gridStatus }) {
  return (
    <>
      <h2 className="py-0 m-0 mt-10 text-lg text-center tracking-[2px] text-[#72788899] opacity-70 p-1">
        APPS and GAMES
      </h2>
      <div
        className={`${
          gridStatus ? "grid-cols-5" : "max-w-[500px] grid-cols-1"
        } relative grid mx-auto mt-3 mb-0 w-fit transition-[0.25s] p-1 gap-2`}
      >
        {stacks.map((item, i) => {
          return (
            <a
              className="relative flex items-center p-4 m-0 cursor-pointer "
              key={`techstack-app-${i}`}
              href={item.link}
            >
              <div
                className={`w-[60px] rouned-[8px] transition-[0.25s] leading-[0] relative stack-design-before ${
                  gridStatus ? "" : "hidden"
                }`}
              >
                <img src={item.img} className="rounded-[8px] size-[60px]" />
              </div>
              <div
                className={`${
                  gridStatus ? "hidden" : ""
                } flex gap-4 design-hover-before`}
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
      className={` flex p-1 bg-transparent rounded-[16px] ${
        active ? "toogle-button-active" : ""
      }`}
    >
      {children}
    </button>
  );
}
export default Stack;
