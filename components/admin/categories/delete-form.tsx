import { TrashIcon } from "lucide-react";
import CategoryAction from "@/lib/actions/categoryActions";

export default function DeleteForm({ id }: { id: string }) {
  const deleteCategoryWithId = CategoryAction.bind(
    null,
    "delete",
    undefined,
    id
  );

  return (
    <form action={deleteCategoryWithId}>
      <button className="p-2 border rounded-md hover:bg-slate-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
