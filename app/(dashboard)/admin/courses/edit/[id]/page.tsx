import prisma from "@/lib/prisma";
import handleCourseAction from "../../../../../../lib/actions/courseActions";
import CourseUpdateForm from "../../CourseUpdateForm";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const defaultValue = await prisma.course.findUnique({
      where: {
        id: params.id,
      },
    });

    return (
      <CourseUpdateForm
        id={params.id}
        course={defaultValue}
        handleCourseAction={handleCourseAction}
      />
    );
  } catch (error) {
    console.error("Error fetching course:", error);
    // Handle the error gracefully, maybe show an error message to the user
    return <div>Error fetching course. Please try again later.</div>;
  }
}
