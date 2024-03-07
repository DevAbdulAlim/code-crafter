"use client";

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/link";
import { updateLesson } from "@/lib/actions/lessonActions";

type LessonDataType = {
  lessonId: number;
  title: string;
  description: string | null;
  courseId: string;
};

type LessonEditFormProps = {
  id: string;
  lesson: LessonDataType;
};

const LessonEditForm: React.FC<LessonEditFormProps> = ({ id, lesson }) => {
  const formRef = useRef<HTMLFormElement>(null);
  console.log(lesson);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      updateLesson(formData, id);
      formRef.current?.reset();
      toast.success("Lesson updated successfully!");
    } catch (error) {
      toast.error("Failed to update lesson. Please try again.");
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
            defaultValue={lesson.lessonId}
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
            defaultValue={lesson.title}
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
            defaultValue={lesson.courseId}
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
            defaultValue={lesson.description ? lesson.description : ""}
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
          <Button type="submit">Update Lesson</Button>
        </div>
      </form>
    </>
  );
};

export default LessonEditForm;
