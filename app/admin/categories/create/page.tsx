import Breadcrumbs from "@/components/Breadcrumb";
import CreateForm from "./create-form";

export default function CreateCategoryPage() {
  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Categories", href: "/admin/categories" },
    { label: "Create", href: "/admin/categories/create", active: true },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-2xl font-bold mb-5">Create New Category</h1>
      <CreateForm />
    </div>
  );
}
