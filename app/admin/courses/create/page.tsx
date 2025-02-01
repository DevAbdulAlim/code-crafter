import Breadcrumbs from "@/components/Breadcrumb";
import CreateForm from "./create-form";

export default function CreateCoursePage() {
  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Courses", href: "/admin/courses" },
    { label: "Create", href: "/admin/courses/create", active: true },
  ];
  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
      <CreateForm />
    </div>
  );
}
