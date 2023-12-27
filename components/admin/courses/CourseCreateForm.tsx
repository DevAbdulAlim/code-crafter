"use client";

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createCourse } from "@/lib/actions/courseActions";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/buttonLink";

const CourseCreateForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createCourse(formData);
      formRef.current?.reset();
      toast.success("Course added successfully!");
    } catch (error) {
      toast.error("Failed to add course. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-4 rounded-md bg-slate-50 md:p-6"
      >
        <div>
          <label
            htmlFor="categoryId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Category ID
          </label>
          <Input
            type="text"
            name="categoryId"
            id="categoryId"
            placeholder="Category ID"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Course Title
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Course Title"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Course Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Course description here."
          />
        </div>

        <div className="flex justify-end mt-4">
          <ButtonLink
            href="/admin/courses/all"
            variant="secondary"
            className="mr-4"
          >
            Cancel
          </ButtonLink>
          <Button type="submit">Add Course</Button>
        </div>
      </form>
    </>
  );
};

export default CourseCreateForm;
