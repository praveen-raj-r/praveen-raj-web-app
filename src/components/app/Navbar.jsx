import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import Logo from "./Logo";
import NavSocialLinks from "./NavSocialLinks";

const navItems = [
  {
    id: "1",
    label: "timeline",
    routePath: "/timeline",
    badge: 0,
    special: true,
  },
  { id: "2", label: "about", routePath: "/about", badge: 0, special: false },
  {
    id: "3",
    label: "resume",
    downloadLink: "/praveen_raj_resume.pdf",
    badge: 0,
    special: false,
  },
  { id: "4", label: "skills", routePath: "/skills", badge: 0, special: false },
];

const navDropdownItems = [
  { text: "links", link: "/links" },
  { text: "Supporters", link: "/thanks" },
  { text: "Bookshelf", link: "/books" },
  { text: "Tech Stack", link: "/stack" },
  { text: "Photos", href: "https://www.instagram.com/real_praveenraj/" },
];

function Navbar() {
  return (
    <nav className="mx-3 md:mx-0 backdrop-blur-[44px] sticky top-6 z-10 bg-[#1c162f4d] px-4 py-[10px] rounded-xl flex justify-between">
      <div className="flex items-center max-h-10">
        <Logo />
        <div className="relative items-center hidden ml-2 md:flex max-h-10">
          <ul className="flex">
            {navItems.map((navItem, k) => (
              <NavItem key={`navBar-item-key-${k}`} navItem={navItem} />
            ))}
            <li className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <span className="flex items-center gap-1 pl-5 font-medium capitalize">
                    more <ChevronDown size={15} />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  side="bottom"
                  className="hidden bg-[#0a0a0d] md:block border-none py-3 pl-3 opacity-95 transition-[0.1s]"
                >
                  {navDropdownItems.map((item, i) => (
                    <DropdownMenuItem
                      className="focus:bg-transparent lowercase focus:text-[#ecedee] hover:opacity-100 opacity-70 text-[#ecedee] text-base font-medium tracking-wide"
                      key={`more-drpdown-${i}`}
                    >
                      {item.link && <Link to={item.link}>{item.text}</Link>}
                      {item.href && <a href={item.href}>{item.text}</a>}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
      <NavSocialLinks />
    </nav>
  );
}

function NavItem({ navItem }) {
  let { label, routePath, badge, special } = navItem;
  return (
    <li className="relative">
      {navItem.routePath ? (
        <Link to={routePath}>
          <span
            className={`pl-5 font-medium capitalize ${
              special ? "gradient retro-2" : ""
            }`}
          >
            {label}
          </span>
          {badge > 0 && <div className="nav-items-badge">{badge}</div>}
        </Link>
      ) : (
        <a
          className={`pl-5 font-medium capitalize ${
            special ? "gradient retro-2" : ""
          }`}
          href={navItem.downloadLink}
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Improves security
        >
          {label}
        </a>
      )}
    </li>
  );
}

export default Navbar;
