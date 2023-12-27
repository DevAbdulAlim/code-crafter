"use client";

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createEnrollment } from "@/lib/actions/enrollmentActions";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/buttonLink";

const EnrollmentCreateForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createEnrollment(formData);
      formRef.current?.reset();
      toast.success("Enrollment added successfully!");
    } catch (error) {
      toast.error("Failed to add enrollment. Please try again.");
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
            htmlFor="userId"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            User ID
          </label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="User ID"
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

        <div className="flex justify-end mt-4">
          <ButtonLink
            href="/admin/enrollments/all"
            variant="secondary"
            className="mr-4"
          >
            Cancel
          </ButtonLink>
          <Button type="submit">Add Enrollment</Button>
        </div>
      </form>
    </>
  );
};

export default EnrollmentCreateForm;
