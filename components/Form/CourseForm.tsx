"use client";
import SubmitButton from "../Buttons/SubmitButton";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import handleCourseAction from "@/app/(dashboard)/admin/courses/actions";

/**
 * Component for adding a new course in the admin dashboard.
 * @returns JSX element representing the course form.
 */
const CourseForm = () => {
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
      // Attempt to create a new course
      handleCourseAction('create', undefined, formData);
      // Reset the form after successful submission
      formRef.current?.reset();
      // Display success message
      toast.success("Course added successfully!");
    } catch (error) {
      // Display error message if course creation fails
      toast.error("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
      {/* Container for displaying toast notifications */}
      <ToastContainer />
      {/* Course form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextInput title="Course Title" />
        <TextAreaInput title="Course Description" />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CourseForm;