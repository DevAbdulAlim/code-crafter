import { FaPlayCircle } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Course, Lesson, Content } from "@prisma/client";

type CourseWithLessons = Course & {
  lessons: (Lesson & {
    content: Content[];
  })[];
};

interface CurriculumProps {
  course: CourseWithLessons;
}

export default function Curriculum({ course }: CurriculumProps) {
  return (
    <div className="mb-8 border rounded-lg bg-white shadow-md">
      <h2 className="p-4 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Curriculum
      </h2>

      <Accordion type="single" collapsible>
        {course.lessons.map((lesson, index) => (
          <AccordionItem
            className="px-4 py-2 border-b last:border-b-0"
            key={lesson.id}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-700 flex justify-between items-center">
              <span>
                {lesson.title} ({lesson.content.length} lectures)
              </span>
              <span className="text-sm text-gray-500">
                {formatDuration(
                  lesson.content.reduce(
                    (acc, content) => acc + (content.duration || 0),
                    0
                  )
                )}{" "}
                total
              </span>
            </AccordionTrigger>
            <AccordionContent>
              {lesson.content.map((content) => (
                <div
                  className="flex items-center justify-between py-4 border-b last:border-b-0"
                  key={content.id}
                >
                  {/* Left Content */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <FaPlayCircle className="text-blue-600 text-lg" />
                    </div>
                    <div>
                      <p className="mb-1 text-lg font-semibold text-gray-700">
                        {content.content}
                      </p>
                      <span className="text-sm text-gray-500">
                        {formatDuration(content.duration || 0)}
                      </span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition">
                    {content.type === "VIDEO" ? "Play" : "View"}
                  </button>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
