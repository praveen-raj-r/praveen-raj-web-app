import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
  function Sidebar({ item }) {
    return (
      <Sheet>
        <SheetTrigger>
          <span className="md:hidden">{item.icon}</span>
        </SheetTrigger>
        <SheetContent className="bg-[#1c162f4d] backdrop-blur-[74px] border-transparent pt-11 transition-[0.3s]">
          <SheetHeader>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }
  
  export default Sidebar;
  