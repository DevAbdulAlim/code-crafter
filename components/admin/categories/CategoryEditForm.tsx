"use client";
import React, { useRef } from "react";
import { updateCategory } from "@/lib/actions/categoryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";

type CategoryDataType = {
  name: string;
  description: string | null;
  slug: string;
  status: string;
  sortOrder: number;
  image?: string | null;
};

type CategoryEditFormProps = {
  id: string;
  category: CategoryDataType;
};

const CategoryEditForm: React.FC<CategoryEditFormProps> = ({
  id,
  category,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      updateCategory(formData, id);

      formRef.current?.reset();

      toast.success("Category updated successfully!");
    } catch (error) {
      toast.error("Failed to update category. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="p-4 rounded-md bg-slate-50 md:p-6">
          {/* Category Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Category Name
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              defaultValue={category.name}
              placeholder="Category name"
              required
            />
          </div>

          {/* Slug */}
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Slug
            </label>
            <Input
              type="text"
              name="slug"
              id="slug"
              defaultValue={category.slug}
              placeholder="Slug"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Category Description
            </label>
            <Textarea
              id="description"
              name="description"
              defaultValue={category.description ? category.description : ""}
              placeholder="Type your message here."
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Category Image URL (Optional)
            </label>
            <Input
              type="text"
              name="image"
              id="image"
              defaultValue={category.image || ""}
              placeholder="Image URL"
            />
          </div>

          {/* Sort Order */}
          <div className="mb-4">
            <label
              htmlFor="sortOrder"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Sort Order
            </label>
            <Input
              type="number"
              name="sortOrder"
              id="sortOrder"
              defaultValue={category.sortOrder}
              placeholder="Sort Order"
              required
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              defaultValue={category.status}
              className="w-full p-2 border rounded-md"
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>

          {/* Form Buttons */}
          <div className="flex justify-end mt-4">
            <Link
              to="/admin/categories/all"
              variant="secondary"
              className="mr-4"
            >
              Cancel
            </Link>
            <Button type="submit">Save Change</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CategoryEditForm;
