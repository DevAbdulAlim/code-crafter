import React from "react";
import SideNavbar from "./sidebar";
import Topbar from "./topbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 mx-auto max-w-7xl">
      <Topbar />
      <SideNavbar />
      <div className="ml-64"> {children}</div>
    </div>
  );
}
