import { Link } from "react-router-dom";

import Logo from "../ui/Logo";
import NavSocialLinks from "../ui/NavSocialLinks";
// import lightSon from "/sun-light-mode.svg";

const navItems = [
  { id: "1", label: "work", routePath: "/work", badge: 0, special: true },
  { id: "2", label: "about", routePath: "/about", badge: 0, special: false },
  { id: "3", label: "skills", routePath: "/skills", badge: 0, special: false },
  {
    id: "4",
    label: "contact",
    routePath: "/contact",
    badge: 0,
    special: false,
  },
];

function Navbar() {
  return (
    <nav className="mx-3 md:mx-0 backdrop-blur-[44px] sticky top-6 z-10 bg-[#1c162f4d] px-4 py-[10px] rounded-xl flex justify-between">
      <div className="flex items-center max-h-10">
        <Logo />
        <div className="relative items-center hidden ml-2 md:flex max-h-10">
          <ul className="flex">
            {navItems.map((navItem) => (
              <NavItem key={navItem.id} navItem={navItem} />
            ))}
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
    </li>
  );
}

export default Navbar;
