import { Outlet } from "react-router-dom";
import Navbar from "../components/app/Navbar";
import Footer from "../components/app/Footer";

function AppLayout() {
  return (
    <div className="relative z-[1] bg-[#0A0A0D] main-container text-white font-mono">
      <div className="max-w-[708px] mx-auto pt-6 relative">
        <Navbar />
        <main className="mt-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
