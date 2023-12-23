import Modal from "@/components/ui/modal";
import prisma from "@/config/prisma";
import CourseUpdateForm from "../../../CourseUpdateForm";
import handleCourseAction from "../../../../../../../lib/actions/courseActions";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const defaultValue = await prisma.course.findUnique({
      where: {
        id: params.id,
      },
    });

    return (
      <Modal>
        <CourseUpdateForm
          id={params.id}
          course={defaultValue}
          handleCourseAction={handleCourseAction}
        />
      </Modal>
    );
  } catch (error) {
    console.error("Error fetching course:", error);
    // Handle the error gracefully, maybe show an error message to the user
    return (
      <Modal>
        <div>Error fetching course. Please try again later.</div>
      </Modal>
    );
  }
}
