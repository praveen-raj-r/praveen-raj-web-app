import AppFooter from "@/components/app/app-footer";
import AppHeader from "@/components/app/app-header";
import { Pointer } from "@/components/magicui/pointer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen relative bg-background text-primary main-container z-[1] font-mono">
      <div className="pt-6 relative h-full flex flex-col">
        <div className="max-w-[800px] w-full mx-auto px-2">
          <AppHeader />
        </div>

        <ScrollArea>
          <main className="max-w-[800px] w-full px-2 mx-auto mt-1 h-full">
            <Outlet />
          </main>
          <div className="max-w-[800px] w-full mx-auto ">
            <AppFooter />
          </div>
        </ScrollArea>
      </div>
      <Pointer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" className="fill-purple-500" />
          <circle cx="12" cy="12" r="5" className="fill-white" />
        </svg>
      </Pointer>
    </div>
  );
};

export default AppLayout;
