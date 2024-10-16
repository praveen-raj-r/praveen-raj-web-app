import { Github, Linkedin, Menu, Moon } from "lucide-react";
import Sidebar from "./Sidebar";

const size = 18;

const contents = [
  {
    icon: <Linkedin size={size} />,
    link: "https://www.linkedin.com/in/developer-praveen-raj/",
  },
  {
    icon: <Github size={size} />,
    link: "https://github.com/praveen-raj-r",
    rightBorder: true,
  },
  {
    icon: <Moon size={size} />,
  },
  {
    icon: <Menu size={size} />,
    toggleSideBar: true,
  },
];

function NavSocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {contents.map((item) => (
        <NavIcon key={item} item={item}></NavIcon>
      ))}
    </div>
  );
}

function NavIcon({ item }) {
  if (item.toggleSideBar) return <Sidebar item={item} />;
  if (item.link)
    return (
      <span
        className={`${
          item.rightBorder ? "border-r-2 border-[#ffffff1a] pr-2" : ""
        }`}
      >
        <a target="_blank" href={item.link}>
          {item.icon}
        </a>
      </span>
    );
  return <span>{item.icon}</span>;
}

export default NavSocialLinks;
