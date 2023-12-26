"use client";

import { deleteLesson } from "@/lib/actions/lessonActions";
import { TrashIcon } from "lucide-react";

export default function LessonDeleteForm({ id }: { id: string }) {
  const deleteLessonWithId = deleteLesson.bind(null, id);

  return (
    <form action={deleteLessonWithId}>
      <button className="p-2 border rounded-md hover:bg-slate-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
