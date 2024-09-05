import { Link } from "react-router-dom";

import logo from "/realPraveen-logo.svg";
import linkedIn from "/linkedin.svg";
import github from "/github.svg";
import darkMoon from "/moon-dark-mode.svg";
// import lightSon from "/sun-light-mode.svg";

const navItems = [
  { id: "1", label: "work", routePath: "/work", badge: 1, special: true },
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
    <nav className="backdrop-blur-[44px] relative z-10 w-full bg-[#1c162f4d] px-4 py-[10px] rounded-xl flex justify-between">
      <div className="flex items-center max-h-10">
        <div className="flex items-center max-h-10 p-0 scale-[0.92]">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="relative flex items-center ml-2 max-h-10">
          <ul className="flex">
            {navItems.map((navItem) => (
              <NavItem key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center max-h-10">
        <div className="flex items-center max-h-10 border-r border-[#ffffff1a] mr-3">
          <a
            target="_blank"
            className="leading-[0px] py-[2px] px-3"
            href="https://www.linkedin.com/in/developer-praveen-raj/"
          >
            <img src={linkedIn} />
          </a>
          <a
            target="_blank"
            className="leading-[0px] py-[2px] px-3"
            href="https://github.com/praveen-raj-r"
          >
            <img src={github} />
          </a>
        </div>
        <div className="flex items-center max-h-10">
          <img src={darkMoon} />
        </div>
      </div>
    </nav>
  );
}
function NavItem({ navItem }) {
  let { label, routePath, badge, special } = navItem;
  return (
    <li className="relative">
      <Link to={routePath}>
        <span
          className={`pl-5 font-semibold ${special ? "gradient retro-2" : ""}`}
        >
          {label}
        </span>
        {badge > 0 && <div className="nav-items-badge">{badge}</div>}
      </Link>
    </li>
  );
}
export default Navbar;
