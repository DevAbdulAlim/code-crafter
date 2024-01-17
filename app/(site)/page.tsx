import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Loader from "@/components/ui/loader";
import RecentPosts from "@/components/sections/RecentPosts";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FactsSection from "@/components/sections/FactsSection";
import SupportSection from "@/components/sections/SupportSection";
import AboutSection from "@/components/sections/AboutSection";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedCourses />
      <AboutSection />
      <SupportSection />
      <FactsSection />
      <TestimonialSection />
      <RecentPosts />

      {/* FAQ */}
      <section className="py-8 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-center">
          Frequently Asking Questions
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
