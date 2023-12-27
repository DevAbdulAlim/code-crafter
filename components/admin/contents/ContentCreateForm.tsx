"use client";

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createContent } from "@/lib/actions/contentActions";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/buttonLink";

const ContentCreateForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createContent(formData);
      formRef.current?.reset();
      toast.success("Content added successfully!");
    } catch (error) {
      toast.error("Failed to add content. Please try again.");
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
            placeholder="Lesson ID"
            required
          />
        </div>

        <div className="flex justify-end mt-4">
          <ButtonLink
            href="/admin/contents/all"
            variant="secondary"
            className="mr-4"
          >
            Cancel
          </ButtonLink>
          <Button type="submit">Add Content</Button>
        </div>
      </form>
    </>
  );
};

export default ContentCreateForm;
