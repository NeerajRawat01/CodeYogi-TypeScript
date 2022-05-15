import React, { FC } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout:FC = ()=> {
  return (
    <div className="flex items-stretch bg-gray-100  ">
      <SideBar />

      <div className="p-5 grow m-10 w-full ">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
