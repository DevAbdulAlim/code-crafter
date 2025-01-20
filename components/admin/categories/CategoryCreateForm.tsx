"use client";

import { useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import { createCategory } from "@/lib/actions/categoryActions";
import "react-toastify/dist/ReactToastify.css";

// Importing UI Components
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "@/components/ui/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Component for adding a new category in the admin dashboard.
 * @returns JSX element representing the category form.
 */
const CategoryCreateForm = () => {
  // Reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles form submission to create a new category.
   * @param event - The form submission event.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      // Attempt to create a new category
      await createCategory(formData);

      // Reset the form after successful submission
      formRef.current?.reset();
      // Display success message
      toast.success("Category added successfully!");
    } catch (error) {
      // Display error message if category creation fails
      toast.error("Failed to add category. Please try again.");
    }
  };

  return (
    <>
      {/* Container for displaying toast notifications */}
      <ToastContainer />
      {/* Category form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="p-4 rounded-md bg-slate-50 md:p-6">
          {/* Parent ID */}
          <div className="mb-4">
            <label
              htmlFor="parentId"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Parent ID (optional)
            </label>
            <Input
              type="text"
              name="parentId"
              id="parentId"
              placeholder="Parent ID"
            />
          </div>

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
              placeholder="Slug (unique identifier)"
              required
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <Input
              type="text"
              name="image"
              id="image"
              placeholder="Image URL (optional)"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mt-4 mb-2 text-sm font-medium text-gray-600"
            >
              Category Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Category description here."
            />
          </div>

          {/* Sort Order */}
          <div className="mb-4">
            <label
              htmlFor="sortOrder"
              className="block mt-4 mb-2 text-sm font-medium text-gray-600"
            >
              Sort Order
            </label>
            <Input
              type="number"
              name="sortOrder"
              id="sortOrder"
              placeholder="Sort order (default is 0)"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block mt-4 mb-2 text-sm font-medium text-gray-600"
            >
              Status
            </label>
            <Select name="status" defaultValue="ACTIVE">
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ACTIVE">Active</SelectItem>
                <SelectItem value="INACTIVE">Inactive</SelectItem>
                <SelectItem value="ARCHIVED">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end mt-4">
            <Link
              to="/admin/categories/all"
              variant="secondary"
              className="mr-4"
            >
              Cancel
            </Link>
            <Button type="submit">Add Category</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CategoryCreateForm;
