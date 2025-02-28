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
import { ChevronDown } from "lucide-react";

const AppHeader = () => {
  return (
    <header
      className="header rounded-xl sticky top-6 z-10 justify-between flex px-4 py-[10px] bg-blend-luminosity backdrop-blur-[44px]"
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
              <DropdownMenuTrigger className="outline-none">
                <span className="block relative py-0 px-2.5 opacity-80 hover:opacity-100">
                  <span className="font-medium leading-5 tracking-[0.5px] text-lg capitalize flex items-end gap-1">
                    more <ChevronDown size={18} />
                  </span>
                </span>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {dropDownData.map((i) => (
                  <Link to={i.link}>
                    <DropdownMenuItem className="text-base font-normal text-gray-50 focus:bg-transparent focus:opacity-100 opacity-40 cursor-pointer">
                      {i.label}
                    </DropdownMenuItem>
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
