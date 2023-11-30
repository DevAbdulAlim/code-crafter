'use client'
import React, { useState, FormEvent } from 'react';
import { useFormState } from 'react-dom';
import { createCourse } from './action';

interface AddCourseFormProps {
  // Add any props you might need
}


const AddCourseForm: React.FC<AddCourseFormProps> = () => {
  const [state, formAction] = useFormState(createCourse, null)

  console.log(state)
  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
      <form action={formAction}>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
