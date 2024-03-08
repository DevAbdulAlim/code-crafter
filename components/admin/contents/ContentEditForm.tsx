"use client";

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { updateContent } from "@/lib/actions/contentActions";
import Link from "@/components/ui/link";

type ContentDataType = {
  contentId: number;
  title: string;
  description: string | null;
  media: string;
  lessonId: string;
};

type ContentEditFormProps = {
  id: string;
  content: ContentDataType;
};

const ContentEditForm: React.FC<ContentEditFormProps> = ({ id, content }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      updateContent(formData, id);
      formRef.current?.reset();
      toast.success("Content updated successfully!");
    } catch (error) {
      toast.error("Failed to update content. Please try again.");
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
            htmlFor="contentId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Content ID
          </label>
          <Input
            type="number"
            name="contentId"
            id="contentId"
            defaultValue={content.contentId}
            placeholder="Content ID"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Content Title
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            defaultValue={content.title}
            placeholder="Content Title"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Content Description
          </label>
          <Textarea
            id="description"
            name="description"
            defaultValue={content.description ? content.description : ""}
            placeholder="Content description here."
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="media"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Media
          </label>
          <Input
            type="text"
            name="media"
            id="media"
            defaultValue={content.media}
            placeholder="Media URL"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="lessonId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Lesson ID
          </label>
          <Input
            type="text"
            name="lessonId"
            id="lessonId"
            defaultValue={content.lessonId}
            placeholder="Lesson ID"
            required
          />
        </div>

        <div className="flex justify-end mt-4">
          <Link to="/admin/contents/all" variant="secondary" className="mr-4">
            Cancel
          </Link>
          <Button type="submit">Update Content</Button>
        </div>
      </form>
    </>
  );
};

export default ContentEditForm;
