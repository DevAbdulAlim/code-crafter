
import LinkButton from "@/components/Buttons/LinkButton";
import OutlineButton from "@/components/Buttons/OutlineButton";
import React from "react";
import Pagination from '../../../../components/Pagination/Pagination';

const CoursesListPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: "Web Development 101",
      description: "Master the basics of web development.",
      enrolled: 120,
      lessons: 15,
      category: "Programming",
    },
    {
      id: 2,
      name: "Web Development 101",
      description: "Master the basics of web development.",
      enrolled: 120,
      lessons: 15,
      category: "Programming",
    },
    {
      id: 3,
      name: "Web Development 101",
      description: "Master the basics of web development.",
      enrolled: 120,
      lessons: 15,
      category: "Programming",
    },
    {
      id: 4,
      name: "Web Development 101",
      description: "Master the basics of web development.",
      enrolled: 120,
      lessons: 15,
      category: "Programming",
    },
    {
      id: 5,
      name: "Web Development 101",
      description: "Master the basics of web development.",
      enrolled: 120,
      lessons: 15,
      category: "Programming",
    },
    // Add more courses as needed
  ];

  // Dummy pagination data for illustration
  const itemsPerPage = 10;
  const totalItems = courses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = 1;


  const handlePaginationChange = (page:number) => {
    'use server'
    console.log("Pagination changed");
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        {/* Breadcrumbs */}
        <div className="mb-4 text-sm text-gray-500">
          <span className="text-blue-500 hover:underline cursor-pointer">
            Dashboard
          </span>
          <span className="mx-2">/</span>
          <span>Courses List</span>
        </div>
        {/* Add New Course Button */}
        <div>
          <LinkButton to="/admin/courses/new">
            Add New Course
          </LinkButton>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="my-8 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <OutlineButton>
            Search
          </OutlineButton>
        </div>

        {/* Filter Options */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">Filter by:</span>
          <select aria-label="filer" className="px-4 py-2 border border-gray-300 rounded focus:outline-none">
            <option value="">All Categories</option>
            {/* Add your categories dynamically here */}
          </select>
        </div>
      </div>

      {/* Course List */}
      <ul className="divide-y divide-gray-200">
        {courses.map((course) => (
          <li key={course.id} className="py-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {course.name}
              </h2>

              <div className="flex items-center text-gray-500 mt-2">
                <span className="mr-2">{course.category}</span>
                <span>&#8226;</span>
                <span className="ml-2">{course.lessons} Lessons</span>
              </div>
              <span className="text-blue-500">Enrolled: {course.enrolled}</span>
            </div>
            <div className="space-x-2 flex md:justify-end">
              <button className="text-sm text-gray-600 hover:text-blue-500 focus:outline-none">
                Details
              </button>
              <button className="text-sm text-yellow-600 hover:text-yellow-700 focus:outline-none">
                Edit
              </button>
              <button className="text-sm text-red-600 hover:text-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
        <div>
          <span className="font-medium">
            Showing {itemsPerPage} items per page | Total Items: {totalItems}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <OutlineButton>
            Previous
          </OutlineButton>
          <span className="text-blue-500">
            Page {currentPage} of {totalPages}
          </span>
          <OutlineButton>
            Next
          </OutlineButton>
        </div>
      </div>
   

    </div>
  );
};

export default CoursesListPage;
