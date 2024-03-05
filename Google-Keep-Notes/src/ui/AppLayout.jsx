import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import Main from "../features/main/Main";
import SideBar from "../features/sideBar/sideBarNavigation";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <div className={`flex w-screen h-screen   `}>
        <Main>
          <Outlet />
        </Main>
        <SideBar />
      </div>
    </div>
  );
}
