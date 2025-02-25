import { Course } from "@prisma/client";

interface CourseDescriptionProps {
  course: Course;
}

export default function CourseDescription({ course }: CourseDescriptionProps) {
  return (
    <div className="mb-8 border rounded-lg bg-white shadow-md">
      <h2 className="p-4 text-2xl font-bold text-gray-800 bg-blue-50 border-b">
        Course Description
      </h2>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-6">
          {course.description}
        </p>
        {course.seoDescription && (
          <p className="text-gray-700 leading-relaxed mt-4">
            {course.seoDescription}
          </p>
        )}
      </div>
    </div>
  );
}
