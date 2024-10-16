// import linkedIn from "/linkedin.svg";
// import github from "/github.svg";
// import darkMoon from "/moon-dark-mode.svg";
import { Github, Linkedin, Menu, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  if (item.toggleSideBar)
    return (
      <Sheet>
        <SheetTrigger>
          <span className="md:hidden">{item.icon}</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
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
