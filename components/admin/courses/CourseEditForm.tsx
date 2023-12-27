"use client";

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/buttonLink";
import { updateCourse } from "@/lib/actions/courseActions";

type CourseDataType = {
  categoryId: string;
  title: string;
  description: string;
};

type CourseEditFormProps = {
  id: string;
  course: CourseDataType;
};

const CourseEditForm: React.FC<CourseEditFormProps> = ({ id, course }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      updateCourse(formData, id);
      formRef.current?.reset();
      toast.success("Course updated successfully!");
    } catch (error) {
      toast.error("Failed to update course. Please try again.");
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
            defaultValue={course.categoryId}
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
            defaultValue={course.title}
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
            defaultValue={course.description}
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
          <Button type="submit">Update Course</Button>
        </div>
      </form>
    </>
  );
};

export default CourseEditForm;
