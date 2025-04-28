import { Outlet } from "react-router";
import Navbar from "../common/Navbar";
import MenuTab from "../common/MenuTab";

function RootLayout() {
  return (
    <div className="mx-auto mb-16 bg-white text-gray-700">
      <Navbar />
      <Outlet />
      <MenuTab />
    </div>
  );
}

export default RootLayout;
