import CategoryEditForm from "@/components/admin/categories/CategoryEditForm";
import Breadcrumbs from "@/components/Breadcrumb";
import { getCategoryById } from "@/lib/actions/categoryActions";

export default async function page({ params }: { params: { id: string } }) {
  try {
    const category = await getCategoryById(params.id);

    const categoryData = category.data as {
      id: string;
      name: string;
      description: string | null;
      slug: string;
      status: string;
      sortOrder: number;
      image?: string | null;
    } | null;

    if (categoryData) {
      const { name, description, slug, status, sortOrder, image } =
        categoryData;

      return (
        <div className="p-4 md:p-8">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Categories", href: "/admin/categories/all" },
              {
                label: "Edit Category",
                href: `/admin/categories/${params.id}/edit`,
                active: true,
              },
            ]}
          />
          <CategoryEditForm
            id={params.id}
            category={{ name, description, slug, status, sortOrder, image }}
          />
        </div>
      );
    } else {
      return <div>Category not found.</div>;
    }
  } catch (error) {
    console.error("Error fetching category:", error);

    return <div>Error fetching category. Please try again later.</div>;
  }
}
