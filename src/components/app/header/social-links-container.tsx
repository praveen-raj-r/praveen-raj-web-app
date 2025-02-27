import { Link } from "react-router-dom";

import ThemeToggle from "../theme-toggle";
import MobileSidebar from "../mobile-sidebar/mobile-sidebar";
import { socialLinksData } from "@/data/header";

const SocialLinksContainer = () => {
  return (
    <div
      className="flex items-center max-h-10"
      style={{ WebkitBoxAlign: "center" }}
    >
      <div
        style={{ WebkitBoxAlign: "center" }}
        className="flex items-center max-h-10"
      >
        {socialLinksData.map((i) => {
          const Icon = i.icon;
          return (
            <Link className="leading-[0] py-0.5 px-2" to={i.link}>
              <Icon className="stroke-primary" size={18} />
            </Link>
          );
        })}
      </div>

      <ThemeToggle />
      <MobileSidebar />
    </div>
  );
};

export default SocialLinksContainer;
