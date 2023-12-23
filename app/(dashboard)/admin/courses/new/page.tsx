import CourseCreateForm from "../CourseCreateForm";
import handleCourseAction from "../../../../../lib/actions/courseActions";

export default async function page() {
  return (
    <div>
      <CourseCreateForm handleCourseAction={handleCourseAction} />
    </div>
  );
}
