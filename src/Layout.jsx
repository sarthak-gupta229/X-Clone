import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Rightend from "./components/rightend/Rightend";

function Layout() {
  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      <Sidebar />
      <Outlet />
      <Rightend />
    </div>
  );
}

export default Layout;
