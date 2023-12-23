"use client";

import { useRef } from "react";
import CategoryAction from "@/lib/actions/categoryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing UI Components
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-600">
        Add New Category
      </h2>

      {/* Container for displaying toast notifications */}
      <ToastContainer />
      {/* Category form */}
      <form ref={formRef} onSubmit={handleSubmit}>
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
          placeholder="Type your message here."
        />

        <Button type="submit" className="mt-4">
          Add Category
        </Button>
      </form>
    </div>
  );
};

export default CreateForm;
