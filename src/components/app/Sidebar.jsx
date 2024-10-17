import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "timeline",
    link: "/timeline",
  },
  {
    label: "work",
    link: "/work",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "skills",
    link: "/skills",
  },
  {
    label: "contact",
    link: "/contact",
  },
  {
    label: "timeline",
    link: "",
  },
  {
    label: "story",
    link: "",
  },
  {
    label: "tips",
    link: "",
  },
  {
    label: "links",
    link: "",
  },
  {
    label: "supporters",
    link: "",
  },
  {
    label: "bookshelf",
    link: "",
  },
  {
    label: "tech stack",
    link: "",
  },
  {
    label: "photos",
    link: "",
  },
  {
    label: "versions",
    link: "",
  },
];

function Sidebar({ item }) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <span className="md:hidden">{item.icon}</span>
      </SheetTrigger>
      <SheetContent className="bg-[#1c162f4d] backdrop-blur-[74px] border-transparent pt-11 transition-[0.3s]">
        <SheetHeader>
          <SheetDescription>
            <div className="pt-[50px] px-6">
              <ul className="flex flex-col items-end gap-y-3">
                {navItems.map((item, i) => (
                  <NavItem
                    setOpen={setSheetOpen}
                    item={item}
                    key={`sidebar-item-${i}`}
                  />
                ))}
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function NavItem({ item, setOpen }) {
  return (
    <li>
      <Link
        onClick={() => setOpen(false)}
        to={item.link}
        className="mx-0 my-2 text-xl py-0 px-[10px] text-white tracking-[3px] font-thin capitalize"
      >
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
export default Sidebar;
