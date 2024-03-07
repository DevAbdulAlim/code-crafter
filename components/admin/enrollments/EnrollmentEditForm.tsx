"use client";

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/link";
import { updateEnrollment } from "@/lib/actions/enrollmentActions";

type EnrollmentDataType = {
  userId: string;
  courseId: string;
};

type EnrollmentEditFormProps = {
  id: string;
  enrollment: EnrollmentDataType;
};

const EnrollmentEditForm: React.FC<EnrollmentEditFormProps> = ({
  id,
  enrollment,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      updateEnrollment(formData, id);
      formRef.current?.reset();
      toast.success("Enrollment updated successfully!");
    } catch (error) {
      toast.error("Failed to update enrollment. Please try again.");
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
            defaultValue={enrollment.userId}
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
            defaultValue={enrollment.courseId}
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
          <Button type="submit">Update Enrollment</Button>
        </div>
      </form>
    </>
  );
};

export default EnrollmentEditForm;
