// components/sections/FeaturedCoursesSection.tsx
import React from "react";
import CourseCard from "../../components/CourseCard";

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
    {
      id: "3",
      title: "Python Programming Fundamentals",
      price: "$129.99",
      discountPrice: "$89.99",
      imageUrl: "python-programming-image-url",
    },
    {
      id: "4",
      title: "Full-Stack JavaScript Development",
      price: "$249.99",
      discountPrice: "$199.99",
      imageUrl: "full-stack-js-image-url",
    },
    {
      id: "5",
      title: "Machine Learning Basics",
      price: "$179.99",
      discountPrice: "$149.99",
      imageUrl: "machine-learning-image-url",
    },
    {
      id: "6",
      title: "Mobile App Development with React Native",
      price: "$199.99",
      discountPrice: "$159.99",
      imageUrl: "react-native-app-dev-image-url",
    },
  ];

  return (
    <section className="px-3 py-12 bg-blue-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
