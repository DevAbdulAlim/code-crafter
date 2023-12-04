'use client'
import { createCourse } from '@/app/(dashboard)/admin/courses/new/action';
import { useFormState } from 'react-dom';
import SubmitButton from '../Buttons/SubmitButton';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CourseForm = () => {
const [state, formAction] = useFormState(createCourse, null)
const ref = useRef<HTMLFormElement>(null);


const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
        formAction(formData);
        ref.current?.reset();
        toast.success('Course added successfully!');
      } catch (error) {
        toast.error('Failed to add course. Please try again.');
      }
  };


  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
      <ToastContainer />
      <form ref={ref} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="courseTitle"
            name="title"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courseDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Course Description
          </label>
          <textarea
            id="courseDescription"
            name="description"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
    <SubmitButton />
      </form>
    </div>
  );
};

export default CourseForm;
