import Navbar from "./navbar";
import type { Metadata } from "next";
import ReadOnlyTopbar from "./readonly-topbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex m-h-screen overflow-x-hidden">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-col w-full min-h-full mt-16">
        <ReadOnlyTopbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
