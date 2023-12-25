"use client";

import React, { useRef } from "react";
import CategoryAction from "@/lib/actions/categoryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumb";
import ButtonLink from "@/components/ui/buttonLink";

/**
 * Type representing the structure of category data.
 */
type CategoryDataType = {
  name: string;
  description: string | null;
};

/**
 * Props for the EditForm component.
 */
type EditFormProps = {
  /**
   * The unique identifier for the category.
   */
  id: string;

  /**
   * The category data to be edited.
   */
  category: CategoryDataType;
};

/**
 * React component for editing a category.
 */
const EditForm: React.FC<EditFormProps> = ({ id, category }) => {
  /**
   * Reference to the form element for handling form actions.
   */
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles the form submission to update the category.
   * @param event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      // Attempt to update the category using the provided action.
      CategoryAction("update", formData, id);

      // Reset the form after successful submission.
      formRef.current?.reset();

      // Show success toast to the user.
      toast.success("Category updated successfully!");
    } catch (error) {
      // Show error toast if category update fails.
      toast.error("Failed to update category. Please try again.");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/admin/categories/all" },
          {
            label: "Edit Category",
            href: `/admin/categories/${id}/edit`,
            active: true,
          },
        ]}
      />

      {/* Toast container for displaying notifications to the user. */}
      <ToastContainer />

      {/* Form for updating the category. */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="p-4 rounded-md bg-slate-50 md:p-6">
          {/* Input field for category name. */}
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

          {/* Textarea for category description. */}
          <label
            htmlFor="description"
            className="block mt-4 mb-2 text-sm font-medium text-gray-600"
          >
            Category Description
          </label>
          <Textarea
            id="description"
            name="description"
            defaultValue={category.description ? category.description : ""}
            placeholder="Type your message here."
          />

          <div className="flex justify-end mt-4">
            <ButtonLink
              href="/admin/categories/all"
              variant="secondary"
              className="mr-4"
            >
              Cancel
            </ButtonLink>
            <Button type="submit">Edit Category</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
