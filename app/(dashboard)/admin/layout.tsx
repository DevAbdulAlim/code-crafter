import AdminSideNav from "@/components/Offcanvas/AdminSideNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <AdminSideNav />

  {/* Main Content */}
  <div className="flex-1 max-w-7xl mx-auto flex flex-col overflow-hidden">
    {/* Your content goes here */}
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 ">
      {/* Main content of the dashboard */}
     {children}
    </main>
  </div>
</div>
  );
}
