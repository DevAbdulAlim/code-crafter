// components/sections/FeaturedCoursesSection.tsx
import React from "react";
import CourseCard from "../Cards/CourseCard";
import CourseCard2  from "../Cards/CourseCard2";

const FeaturedCourses: React.FC = () => {
    const featuredCourses = [
        {
          title: 'Modern Web Development',
          price: '$199.99',
          discountPrice: '$99.99',
          imageUrl: 'modern-web-dev-image-url',
        },
        {
          title: 'Data Science Essentials',
          price: '$149.99',
          discountPrice: '$129.99',
          imageUrl: 'data-science-image-url',
        },
        // Add more courses as needed
      ];
  return (
    <section className="bg-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
