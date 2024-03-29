"use client";

import React from "react";
import { deleteEnrollment } from "@/lib/actions/enrollmentActions";
import { TrashIcon } from "lucide-react";

export default function EnrollmentDeleteForm({ id }: { id: string }) {
  const deleteEnrollmentWithId = deleteEnrollment.bind(null, id);

  return (
    <form action={deleteEnrollmentWithId}>
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
