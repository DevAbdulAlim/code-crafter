"use client";

import React from "react";
import { deleteCourse } from "@/lib/actions/courseActions";
import { TrashIcon } from "lucide-react";

export default function CourseDeleteForm({ id }: { id: string }) {
  console.log(id);
  const deleteCourseWithId = deleteCourse.bind(null, id);

  return (
    <form action={deleteCourseWithId}>
      <button
        type="submit"
        className="p-2 border rounded-md hover:bg-slate-200"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
