import HeroSection from "@/app/(site)/HeroSection";
import FeaturedCourses from "@/app/(site)/FeaturedCourses";
import FeaturedCategories from "@/app/(site)/FeaturedCategories";
import RecentPosts from "@/app/(site)/RecentPosts";
import TestimonialSection from "@/app/(site)/TestimonialSection";
import FactsSection from "@/app/(site)/FactsSection";
import AboutSection from "@/app/(site)/AboutSection";
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
    </>
  );
}
