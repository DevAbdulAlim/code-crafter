import Breadcrumbs from "@/components/Breadcrumb";
import ContentCreateForm from "@/components/admin/contents/ContentCreateForm";
import React from "react";

export default function NewContent() {
  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Contents", href: "/admin/contents/all" },
          {
            label: "Create Content",
            href: "/admin/contents/create",
            active: true,
          },
        ]}
      />

      <ContentCreateForm />
    </div>
  );
}
