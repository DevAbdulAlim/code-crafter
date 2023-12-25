import Breadcrumbs from "@/components/Breadcrumb";
import CreateForm from "@/components/admin/categories/create-form";
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

      <CreateForm />
    </div>
  );
}
