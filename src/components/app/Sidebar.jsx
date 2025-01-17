import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

import navItems from "@/data/sidebar";

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
      {item.link ? (
        <Link
          onClick={() => setOpen(false)}
          to={item.link}
          className="mx-0 my-2 text-xl py-0 px-[10px] text-white tracking-[3px] font-thin capitalize"
        >
          <span>{item.label}</span>
        </Link>
      ) : (
        <a
          onClick={() => setOpen(false)}
          href={item.download}
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Improves security
          className="mx-0 my-2 text-xl py-0 px-[10px] text-white tracking-[3px] font-thin capitalize"
        >
          <span>{item.label}</span>
        </a>
      )}
    </li>
  );
}
export default Sidebar;
