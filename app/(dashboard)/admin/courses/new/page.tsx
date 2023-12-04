import CourseCreateForm from "../CourseCreateFrom";
import handleCourseAction from "../actions";

export default async function page() {
  return (
    <div>
      <CourseCreateForm handleCourseAction={handleCourseAction} />
    </div>
  )
}
