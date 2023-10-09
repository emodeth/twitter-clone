import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";

function MainLayout() {
  return (
    <div className="flex w-[1265px] mx-auto">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>
  );
}

export default MainLayout;
