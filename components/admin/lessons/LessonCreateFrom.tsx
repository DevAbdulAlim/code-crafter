"use client";

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createLesson } from "@/lib/actions/lessonActions";
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/link";

const LessonCreateForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      createLesson(formData);
      formRef.current?.reset();
      toast.success("Lesson added successfully!");
    } catch (error) {
      toast.error("Failed to add lesson. Please try again.");
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
            htmlFor="lessonId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Lesson ID
          </label>
          <Input
            type="number"
            name="lessonId"
            id="lessonId"
            placeholder="Lesson ID"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Lesson Title
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Lesson Title"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="courseId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Course ID
          </label>
          <Input
            type="text"
            name="courseId"
            id="courseId"
            placeholder="Course ID"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Lesson Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Lesson description here."
          />
        </div>

        <div className="flex justify-end mt-4">
          <ButtonLink
            href="/admin/lessons/all"
            variant="secondary"
            className="mr-4"
          >
            Cancel
          </ButtonLink>
          <Button type="submit">Add Lesson</Button>
        </div>
      </form>
    </>
  );
};

export default LessonCreateForm;
