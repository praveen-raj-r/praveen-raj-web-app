import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface NavItemProps {
  item: {
    link?: string;
    download?: string;
    label: string;
  };
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavItems = ({ item, setOpen }: NavItemProps) => {
  return (
    <li>
      {item.link ? (
        <Link
          onClick={() => setOpen(false)}
          to={item.link}
          className="mx-0 my-2 text-xl py-0 px-[10px] text-white tracking-[3px] font-extralight capitalize"
        >
          <span>{item.label}</span>
        </Link>
      ) : (
        <a
          onClick={() => setOpen(false)}
          href={item.download}
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Improves security
          className="mx-0 my-2 text-xl py-0 px-[10px] text-white tracking-[3px] font-extralight capitalize"
        >
          <span>{item.label}</span>
        </a>
      )}
    </li>
  );
};

export default NavItems;
