import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Logo from "./header/logo";
import { Link } from "react-router-dom";
import NavItemsContainer from "./header/nav-items-container";
import { dropDownData, headerLinksData } from "@/data/header";
import SocialLinksContainer from "./header/social-links-container";

const AppHeader = () => {
  return (
    <header
      className="header h-[72px] rounded-[36px] sticky top-6 z-10 justify-between flex py-4 px-[30px] bg-blend-luminosity "
      style={{ WebkitBoxPack: "justify" }}
    >
      <div>
        <div
          className="flex items-center max-h-10 p-0 relative sm:scale-[0.92] ml-[-20px] sm:ml-[-50px]"
          style={{ WebkitBoxAlign: "center" }}
        >
          <Logo />
          <NavItemsContainer headerLinksData={headerLinksData} />
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="block relative py-0 px-2.5 opacity-80 hover:opacity-100">
                  <span className="font-medium leading-5 tracking-[0.5px] text-lg capitalize">
                    more
                  </span>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {dropDownData.map((i) => (
                  <Link to={i.link}>
                    <DropdownMenuItem>{i.label}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <SocialLinksContainer />
    </header>
  );
};

export default AppHeader;
