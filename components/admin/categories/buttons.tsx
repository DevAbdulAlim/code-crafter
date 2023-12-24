import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import CategoryAction from "@/lib/actions/categoryActions";
import Link from "next/link";

export function CreateCategory() {
  return (
    <Link
      href="/admin/categories/create"
      className="flex items-center h-10 px-4 text-sm font-medium text-white transition-colors rounded-lg bg-slate-900 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Category</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCategory({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/categories/${id}/edit`}
      className="p-2 border rounded-md hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCategory({ id }: { id: string }) {
  const deleteCategoryWithId = CategoryAction.bind(
    null,
    "delete",
    undefined,
    id
  );

  return (
    <form action={deleteCategoryWithId}>
      <button className="p-2 border rounded-md hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
