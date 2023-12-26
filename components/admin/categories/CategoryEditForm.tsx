"use client";

import React, { useRef } from "react";
import { updateCategory } from "@/lib/actions/categoryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/buttonLink";

type CategoryDataType = {
  name: string;
  description: string | null;
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
    </>
  );
};

export default CategoryEditForm;
