import prisma from "@/config/prisma";
import EditForm from "@/components/admin/categories/edit-form";
import Breadcrumbs from "@/components/Breadcrumb";

export default async function page({ params }: { params: { id: string } }) {
  try {
    // Fetch the course data using Prisma.
    const category = await prisma.category.findUnique({
      where: {
        id: params.id,
      },
    });

    // Check if the course is found before accessing its properties.
    if (category) {
      // Destructure the properties from the course.
      const { name, description } = category;

      // Render the EditForm component with the fetched course data.
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
          <EditForm id={params.id} category={{ name, description }} />
        </div>
      );
    } else {
      // If the course is not found, handle it gracefully.
      return <div>Course not found.</div>;
    }
  } catch (error) {
    // Handle errors gracefully. Log the error and display a user-friendly message.
    console.error("Error fetching course:", error);

    // Return a message to inform the user about the error.
    return <div>Error fetching course. Please try again later.</div>;
  }
}
