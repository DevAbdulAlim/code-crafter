import Breadcrumbs from "@/components/Breadcrumb";
import CourseEditForm from "@/components/admin/courses/CourseEditForm";
import { getCourseById } from "@/lib/actions/courseActions";

export default async function CourseEditPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const course = await getCourseById(params.id);
    console.log(params.id);

    const courseData = course.data as {
      id: string;
      categoryId: string;
      title: string;
      description: string;
    } | null;

    if (courseData) {
      const { categoryId, title, description } = courseData;
      console.log(categoryId, title, description);
      return (
        <div className="p-4 md:p-8">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Courses", href: "/admin/courses/all" },
              {
                label: "Edit Course",
                href: `/admin/courses/${params.id}/edit`,
                active: true,
              },
            ]}
          />
          <CourseEditForm
            id={params.id}
            course={{ categoryId, title, description }}
          />
        </div>
      );
    } else {
      return <div>Course not found.</div>;
    }
  } catch (error) {
    console.error("Error fetching Course:", error);

    return <div>Error fetching course. Please try again later.</div>;
  }
}
