import HeroSection from "@/app/(site)/HeroSection";
import FeaturedCourses from "@/app/(site)/FeaturedCourses";
import FeaturedCategories from "@/app/(site)/FeaturedCategories";
import RecentPosts from "@/components/sections/RecentPosts";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FactsSection from "@/components/sections/FactsSection";
import SupportSection from "@/components/sections/SupportSection";
import AboutSection from "@/components/sections/AboutSection";
import Faq from "./faq";

export default async function page() {
  return (
    <>
      <HeroSection />
      <FactsSection />
      <FeaturedCategories />
      <FeaturedCourses />
      <AboutSection />
      <TestimonialSection />
      <RecentPosts />
      <Faq />
      <SupportSection />
    </>
  );
}
