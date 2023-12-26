import Breadcrumbs from "@/components/Breadcrumb";
import LessonCreateForm from "@/components/admin/lessons/lessonCreateFrom";
import React from "react";

export default function NewLesson() {
  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Lessons", href: "/admin/lessons/all" },
          {
            label: "Create Lesson",
            href: "/admin/lessons/create",
            active: true,
          },
        ]}
      />

      <LessonCreateForm />
    </div>
  );
}
