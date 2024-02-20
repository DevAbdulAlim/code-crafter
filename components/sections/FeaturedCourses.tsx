// components/sections/FeaturedCoursesSection.tsx
import React from "react";
import CourseCard from "../Cards/CourseCard";
import CourseCard2 from "../Cards/CourseCard2";

const FeaturedCourses: React.FC = () => {
  const featuredCourses = [
    {
      id: "1",
      title: "Modern Web Development",
      price: "$199.99",
      discountPrice: "$99.99",
      imageUrl: "modern-web-dev-image-url",
    },
    {
      id: "2",
      title: "Data Science Essentials",
      price: "$149.99",
      discountPrice: "$129.99",
      imageUrl: "data-science-image-url",
    },
    // Add more courses as needed
  ];
  return (
    <section className="p-8 bg-blue-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold">Featured Courses</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
          {featuredCourses.map((course, index) => (
            <CourseCard2 key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
