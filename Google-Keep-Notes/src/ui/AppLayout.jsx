import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import SideBar from "../features/sideBar/SideBarNavigation";
import Main from "../features/main/Main";
import Sidebar from "../features/sideBar/sidebarTemplate";

export default function AppLayout() {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div>
      <Header sidebar={sidebar} setSideBar={setSideBar} />
      <div className={`flex w-[100%] h-[calc(100vh-64px)]`}>
        <Main expanded={sidebar}>
          <Outlet />
        </Main>
        <SideBar sideBar={sidebar} setSideBar={setSideBar} />
      </div>
    </div>
  );
}
