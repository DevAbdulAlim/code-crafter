import EnrollmentEditForm from "@/components/admin/enrollments/EnrollmentEditForm";
import Breadcrumbs from "@/components/Breadcrumb";
import { getEnrollmentById } from "@/lib/actions/enrollmentActions";
import React from "react";

export default async function EnrollmentEditPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const enrollment = await getEnrollmentById(params.id);

    const enrollmentData = enrollment.data as {
      id: string;
      userId: string;
      courseId: string;
    } | null;
    if (enrollmentData) {
      const { userId, courseId } = enrollmentData;

      return (
        <div className="p-4 md:p-8">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Enrollments", href: "/admin/enrollments/all" },
              {
                label: "Edit Enrollment",
                href: `/admin/enrollments/${params.id}/edit`,
                active: true,
              },
            ]}
          />
          <EnrollmentEditForm
            id={params.id}
            enrollment={{ userId, courseId }}
          />
        </div>
      );
    } else {
      return <div>Enrollment not found.</div>;
    }
  } catch (error) {
    console.error("Error fetching enrollment:", error);

    return <div>Error fetching enrollment. Please try again later.</div>;
  }
}
