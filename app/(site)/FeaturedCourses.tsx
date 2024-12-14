import CourseCard from "@/components/CourseCard";

const FeaturedCourses = () => {
  const courses = [
    {
      id: "1",
      title: "Modern Web Development",
      price: 199.99,
      discountPrice: 99.99,
      imageUrl: "https://via.placeholder.com/300x200?text=Web+Development",
      slug: "modern-web-development",
    },
    {
      id: "2",
      title: "Data Science Essentials",
      price: 149.99,
      discountPrice: 129.99,
      imageUrl: "https://via.placeholder.com/300x200?text=Data+Science",
      slug: "data-science-essentials",
    },
    {
      id: "3",
      title: "Python Programming Fundamentals",
      price: 129.99,
      discountPrice: 89.99,
      imageUrl: "https://via.placeholder.com/300x200?text=Python",
      slug: "python-programming-fundamentals",
    },
    {
      id: "4",
      title: "Full-Stack JavaScript Development",
      price: 249.99,
      discountPrice: 199.99,
      imageUrl: "https://via.placeholder.com/300x200?text=JavaScript",
      slug: "full-stack-javascript-development",
    },
    {
      id: "5",
      title: "Machine Learning Basics",
      price: 179.99,
      discountPrice: 149.99,
      imageUrl: "https://via.placeholder.com/300x200?text=Machine+Learning",
      slug: "machine-learning-basics",
    },
    {
      id: "6",
      title: "React Native App Development",
      price: 199.99,
      discountPrice: 159.99,
      imageUrl: "https://via.placeholder.com/300x200?text=React+Native",
      slug: "react-native-app-development",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Explore our popular courses and start learning today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
