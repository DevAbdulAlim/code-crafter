"use client";

import { useRef } from "react";
import CategoryAction from "@/lib/actions/categoryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing UI Components
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonLink from "@/components/ui/buttonLink";
import Breadcrumbs from "@/components/Breadcrumb";

/**
 * Component for adding a new course in the admin dashboard.
 * @returns JSX element representing the course form.
 */
const CreateForm = () => {
  // Reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles form submission to create a new course.
   * @param event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      // Attempt to create a new category
      CategoryAction("create", formData);

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
    <div className="p-4 md:p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/admin/categories/all" },
          {
            label: "Create Category",
            href: "/admin/categories/create",
            active: true,
          },
        ]}
      />

      {/* Container for displaying toast notifications */}
      <ToastContainer />
      {/* Category form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="p-4 rounded-md bg-slate-50 md:p-6">
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

          <div className="flex justify-end mt-4">
            <ButtonLink to="/admin/categories/all">Cancel</ButtonLink>
            <Button type="submit">Add Category</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
