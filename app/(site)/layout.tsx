import type { Metadata } from "next";
import MainNav from "./MainNav";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}