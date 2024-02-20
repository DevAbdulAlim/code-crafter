import Curriculum from "@/components/sections/Curriculum";
import CourseOverview from "@/components/sections/CourseOverview";
import FAQ from "@/components/sections/FAQ";
import CourseDescription from "@/components/sections/CourseDescription";
import CourseIntro from "@/components/sections/CourseIntro";
const CourseDetails: React.FC = () => {
  return (
    <section className="px-3 my-12">
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          <div className="md:col-span-4">
            <CourseIntro />

            <iframe
              width="100%"
              className="mb-8 rounded-lg"
              height="480px"
              src="https://www.youtube.com/embed/gfU1iZnjRZM"
              title="Next.js Conf Keynote (Next.js 14)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <CourseDescription />
            <Curriculum />
            <FAQ />
          </div>

          <div className="md:col-span-2">
            <CourseOverview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
