import type { Metadata } from "next";
import MainNav from "@/app/(site)/MainNav";
import Footer from "@/app/(site)/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="sticky top-0 z-10 bg-white shadow">
        <MainNav />
      </header>
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
