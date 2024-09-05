import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <main className="relative h-screen z-[1] bg-[#0A0A0D] main-container text-white">
      <div className="max-w-[708px] mx-auto pt-6 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}

export default AppLayout;
