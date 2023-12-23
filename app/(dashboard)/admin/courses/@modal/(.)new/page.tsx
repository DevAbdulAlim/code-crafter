import Modal from "@/components/ui/modal";
import CourseCreateForm from "../../CourseCreateForm";
import handleCourseAction from "../../../../../../lib/actions/courseActions";

export default async function page() {
  return (
    <Modal>
      <CourseCreateForm handleCourseAction={handleCourseAction} />
    </Modal>
  );
}
