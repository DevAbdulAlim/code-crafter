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

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedCourses />

      {/* FAQ */}
      <section className="py-8 max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-bold">
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
