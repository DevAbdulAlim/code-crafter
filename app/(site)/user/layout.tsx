import React from "react";
import SideNavbar from "./sidebar";
import Topbar from "./topbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 mx-auto max-w-7xl">
      <Topbar />
      <div className="flex">
        <SideNavbar />
        <div className="w-full"> {children}</div>
      </div>
    </div>
  );
}
