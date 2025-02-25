"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createCategory } from "../actions";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Creating..." : "Create Category"}
    </button>
  );
}

export default function CreateForm() {
  const [state, formAction] = useFormState(createCategory, {
    errors: {},
    message: "",
    success: false,
  });

  const router = useRouter();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        formRef.current?.reset();
        toast.success(state.message);
        router.push("/admin/categories");
      } else {
        toast.error(state.message);
      }
    }
  });

  return (
    <form
      ref={formRef}
      action={formAction}
      className="bg-white shadow-md rounded-lg p-8 space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {state.errors?.name && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.name[0]}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {state.errors?.slug && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.slug[0]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          {state.errors?.description && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.description[0]}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="order"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Order
            </label>
            <input
              type="number"
              id="order"
              name="order"
              defaultValue="0"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {state.errors?.order && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.order[0]}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="ARCHIVED">Archived</option>
            </select>
            {state.errors?.status && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.status[0]}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {state.errors?.image && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.image[0]}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {state.errors?.thumbnail && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.thumbnail[0]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="seoTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            SEO Title
          </label>
          <input
            type="text"
            id="seoTitle"
            name="seoTitle"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {state.errors?.seoTitle && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.seoTitle[0]}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="seoDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            SEO Description
          </label>
          <textarea
            id="seoDescription"
            name="seoDescription"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          {state.errors?.seoDescription && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.seoDescription[0]}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="seoKeywords"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            SEO Keywords
          </label>
          <input
            type="text"
            id="seoKeywords"
            name="seoKeywords"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {state.errors?.seoKeywords && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.seoKeywords[0]}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="parentId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Parent Category ID
          </label>
          <input
            type="text"
            id="parentId"
            name="parentId"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {state.errors?.parentId && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.parentId[0]}
            </p>
          )}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
