import { Link } from "react-router-dom";

interface HeaderLinkData {
  label: string;
  link: string;
  effect?: boolean;
}

const NavItemsContainer = ({
  headerLinksData,
}: {
  headerLinksData: HeaderLinkData[];
}) => {
  return (
    <div className="hidden md:flex items-center max-h-10 relative">
      <ul className="m-0 flex flex-row">
        {headerLinksData.map((e: HeaderLinkData) => (
          <HeaderLink label={e.label} link={e.link} effect={e.effect} />
        ))}
      </ul>
    </div>
  );
};

const HeaderLink = ({ label, link, effect = false }: HeaderLinkData) => {
  return (
    <li className="relative">
      {label !== "resume" ? (
        <Link
          className="block relative py-0 px-2.5 opacity-80 hover:opacity-100"
          to={link}
        >
          <span
            className={`font-medium leading-normal tracking-[-0.25px] text-base capitalize cursor-pointer ${
              effect ? "gradient retro-2" : ""
            }`}
          >
            {label}
          </span>
        </Link>
      ) : (
        <a
          className="block relative py-0 px-2.5 opacity-80 hover:opacity-100"
          href={link}
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Improves security
        >
          <span className="font-medium leading-normal tracking-[-0.25px] text-base capitalize cursor-pointer">
            Resume
          </span>
        </a>
      )}
    </li>
  );
};
export default NavItemsContainer;
