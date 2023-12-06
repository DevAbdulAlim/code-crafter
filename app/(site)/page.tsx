import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import FeaturedCategories from "@/components/sections/FeaturedCategories";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedCourses />
    </>
  );
}
