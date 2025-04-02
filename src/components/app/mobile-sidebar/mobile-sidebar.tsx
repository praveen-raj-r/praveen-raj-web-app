import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { sidebar } from "@/data/header";
import { ScrollArea } from "../../ui/scroll-area";
import NavItems from "./nav-items";

const MobileSidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <span className="md:hidden">
          <Menu size={18} />
        </span>
      </SheetTrigger>

      <SheetContent className="bg-[#1c162f4d] backdrop-blur-[74px] border-transparent pt-11 transition-[0.3s] [&>button]:text-white font-inter">
        <SheetTitle></SheetTitle>

        <ScrollArea className="h-[calc(100%-10px)]">
          <div className="pt-3 px-6">
            <ul className="flex flex-col items-end gap-y-3">
              {sidebar.map((item) => (
                <NavItems
                  setOpen={setSheetOpen}
                  item={item}
                  key={`sidebar-item-${item.link}`}
                />
              ))}
            </ul>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
