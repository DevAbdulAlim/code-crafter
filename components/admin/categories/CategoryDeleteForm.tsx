"use client";

import { deleteCategory } from "@/lib/actions/categoryActions";
import { TrashIcon } from "lucide-react";

export default function CategoryDeleteForm({ id }: { id: string }) {
  const deleteCategoryWithId = deleteCategory.bind(null, id);

  return (
    <form action={deleteCategoryWithId}>
      <button className="p-2 border rounded-md hover:bg-slate-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
