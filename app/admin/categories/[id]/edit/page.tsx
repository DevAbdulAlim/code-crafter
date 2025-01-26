import { notFound } from "next/navigation";
import { getCategoryById } from "../../actions";
import EditForm from "./edit-form";
import Breadcrumbs from "@/components/Breadcrumb";

export default async function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await getCategoryById(params.id).catch(() => null);

  if (!category) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Dashboard", href: "/admin" },
    { label: "Categories", href: "/admin/categories" },
    {
      label: "Edit",
      href: `/admin/categories/${params.id}/edit`,
      active: true,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-2xl font-bold mb-5">Edit Category</h1>
      <EditForm category={category} />
    </div>
  );
}
