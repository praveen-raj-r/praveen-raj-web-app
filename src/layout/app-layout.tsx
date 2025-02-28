import AppHeader from "@/components/app/app-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen relative bg-background text-primary main-container z-[1] font-inter">
      <div className="pt-6 relative h-full flex flex-col">
        <div className="max-w-[800px] w-full mx-auto px-4 ">
          <AppHeader />
        </div>

        <ScrollArea>
          <main className="max-w-[800px] w-full px-4 mx-auto mt-1 h-full">
            <Outlet />
          </main>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AppLayout;
