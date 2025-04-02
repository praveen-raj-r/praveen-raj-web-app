import Logo from "./header/logo";
import NavItemsContainer from "./header/nav-items-container";
import { headerLinksData } from "@/data/header";
import SocialLinksContainer from "./header/social-links-container";
import MoreMenu from "./header/more-menu";

const AppHeader = () => {
  return (
    <header
      className="header rounded-xl sticky top-6 z-10 justify-between flex px-4 py-[10px] bg-blend-luminosity backdrop-blur-[44px]"
      style={{ WebkitBoxPack: "justify" }}
    >
      <div>
        <div
          className="flex items-center max-h-10 p-0 relative sm:scale-[0.92]"
          style={{ WebkitBoxAlign: "center" }}
        >
          <Logo />
          <NavItemsContainer headerLinksData={headerLinksData} />
          <MoreMenu />
        </div>
      </div>
      <SocialLinksContainer />
    </header>
  );
};

export default AppHeader;
