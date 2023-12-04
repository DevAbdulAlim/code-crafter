"use client";

import { useRef } from "react";
// import handleCourseAction from "@/app/(dashboard)/admin/courses/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing UI Components
import SubmitButton from "@/components/Buttons/SubmitButton";
import TextInput from "@/components/Form/TextInput";
import TextAreaInput from "@/components/Form/TextAreaInput";


type CourseDataType = {
    title: string;
    description: string | null;
}


type CourseUpdateFormProps = {
    id: string;
    handleCourseAction: any;
    course: CourseDataType | null; // Updated to allow for null
  };
  

/**
 * Component for adding a new course in the admin dashboard.
 * @returns JSX element representing the course form.
 */
const CourseUpdateForm:React.FC<CourseUpdateFormProps> = ({id, handleCourseAction, course}) => {
  // Reference to the form element
  const formRef = useRef<HTMLFormElement>(null);

  if(!course) {
    return <div>Error Loading Data</div>
  }

  /**
   * Handles form submission to create a new course.
   * @param event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      // Attempt to create a new course
      handleCourseAction('update', id, formData);
      // Reset the form after successful submission
      formRef.current?.reset();
      // Display success message
      toast.success("Course updated successfully!");
    } catch (error) {
      // Display error message if course creation fails
      toast.error("Failed to update course. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Update Course</h2>
      {/* Container for displaying toast notifications */}
      <ToastContainer />
      {/* Course form */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextInput title="Course Title" value={course.title} />
        <TextAreaInput title="Course Description" value={course.description? course.description : ''} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CourseUpdateForm;
