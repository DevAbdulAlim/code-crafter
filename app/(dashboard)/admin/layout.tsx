import AdminSideNav from "@/components/Offcanvas/AdminSideNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard Page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <AdminSideNav />

      {/* Main Content */}

      {/* Your content goes here */}
      <main className="flex-1 p-4 ">
        {/* Main content of the dashboard */}
        {children}
      </main>
    </div>
  );
}
