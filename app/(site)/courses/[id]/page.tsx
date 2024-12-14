import Curriculum from "@/app/(site)/courses/[id]/Curriculum";
import CourseOverview from "@/app/(site)/courses/[id]/CourseOverview";
import CourseDescription from "@/app/(site)/courses/[id]/CourseDescription";
import CourseIntro from "@/components/sections/CourseIntro";
import Faq from "./faq";

const CourseDetails: React.FC = () => {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
          {/* Left Section */}
          <div className="md:col-span-4">
            {/* Course Intro Section */}
            <CourseIntro />

            {/* Video Section */}
            <div className="mb-8">
              <iframe
                width="100%"
                height="480px"
                className="rounded-lg shadow-md"
                src="https://www.youtube.com/embed/gfU1iZnjRZM"
                title="Next.js Conf Keynote (Next.js 14)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Description, Curriculum, and FAQ */}
            <CourseDescription />
            <Curriculum />
            <Faq />
          </div>

          {/* Right Section */}
          <div className="md:col-span-2">
            <div className="sticky top-16">
              <CourseOverview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
