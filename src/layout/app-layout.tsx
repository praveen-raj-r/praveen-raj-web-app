import AppFooter from "@/components/app/app-footer";
import AppHeader from "@/components/app/app-header";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <div className="h-screen relative bg-background text-primary main-container z-[1] font-mono">
      <div className="pt-6 relative h-full flex flex-col">
        <div className="max-w-[800px] w-full mx-auto px-2">
          <AppHeader />
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <main className="max-w-[800px] w-full px-2 mx-auto mt-1 h-full">
            <Outlet />
          </main>
          <div className="max-w-[800px] w-full mx-auto ">
            <AppFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
