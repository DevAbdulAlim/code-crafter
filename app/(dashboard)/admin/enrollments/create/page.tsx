import Breadcrumbs from "@/components/Breadcrumb";
import EnrollmentCreateForm from "@/components/admin/enrollments/EnrollmentCreateForm";
import React from "react";

export default function NewEnrollment() {
  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Enrollments", href: "/admin/enrollments/all" },
          {
            label: "Create Enrollment",
            href: "/admin/enrollments/create",
            active: true,
          },
        ]}
      />

      <EnrollmentCreateForm />
    </div>
  );
}
