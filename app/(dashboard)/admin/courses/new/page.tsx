import CourseCreateForm from "../CourseCreateForm";
import handleCourseAction from "../actions";

export default async function page() {
  return (
    <div>
      <CourseCreateForm handleCourseAction={handleCourseAction} />
    </div>
  )
}
