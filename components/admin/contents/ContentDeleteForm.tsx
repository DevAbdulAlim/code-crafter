import { deleteContent } from "@/lib/actions/contentActions";
import { TrashIcon } from "lucide-react";

export default function ContentDeleteForm({ id }: { id: string }) {
  const deleteContentWithId = deleteContent.bind(null, id);

  return (
    <form action={deleteContentWithId}>
      <button className="p-2 border rounded-md hover:bg-slate-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
