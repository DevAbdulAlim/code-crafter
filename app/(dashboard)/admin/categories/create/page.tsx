import Breadcrumbs from "@/components/Breadcrumb";
import CategoryCreateForm from "@/components/admin/categories/CategoryCreateForm";
import React from "react";

export default function NewCategory() {
  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/admin/categories/all" },
          {
            label: "Create Category",
            href: "/admin/categories/create",
            active: true,
          },
        ]}
      />

      <CategoryCreateForm />
    </div>
  );
}
