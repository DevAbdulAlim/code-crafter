import Breadcrumbs from "@/components/Breadcrumb";
import CourseCreateForm from "@/components/admin/courses/CourseCreateForm";

export default function NewCourse() {
  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Courses", href: "/admin/courses/all" },
          {
            label: "Create Course",
            href: "/admin/courses/create",
            active: true,
          },
        ]}
      />

      <CourseCreateForm />
    </div>
  );
}
