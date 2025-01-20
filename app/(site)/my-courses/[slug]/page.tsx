import { FaPlay } from "react-icons/fa";

export default function CourseDetailPage() {
  return (
    <div className="container mx-auto px-8 py-16">
      {/* Course Title */}
      <h1 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        Web Development Fundamentals
      </h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar: Lessons List */}
        <aside className="lg:w-1/4 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Lessons</h2>
          <ul className="space-y-4">
            {[
              { id: 1, title: "Introduction to HTML", status: "Completed" },
              { id: 2, title: "CSS Basics", status: "Completed" },
              { id: 3, title: "JavaScript Essentials", status: "In Progress" },
              { id: 4, title: "Responsive Design", status: "Upcoming" },
              { id: 5, title: "Web Development Tools", status: "Upcoming" },
            ].map((lesson) => (
              <li
                key={lesson.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                  lesson.status === "Completed"
                    ? "bg-green-100 hover:bg-green-200"
                    : lesson.status === "In Progress"
                    ? "bg-yellow-100 hover:bg-yellow-200"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="text-gray-800 font-medium">
                  {lesson.title}
                </span>
                <span
                  className={`text-sm rounded px-2 py-1 ${
                    lesson.status === "Completed"
                      ? "bg-green-500 text-white"
                      : lesson.status === "In Progress"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  {lesson.status}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white shadow-md rounded-lg p-8">
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Video Placeholder"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <FaPlay className="text-white text-3xl" />
              </button>
            </div>
          </div>

          {/* Lesson Details */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Lesson 3: JavaScript Essentials
          </h2>
          <p className="text-gray-700 mb-4">
            Learn the fundamentals of JavaScript, the programming language that
            powers the web. This lesson covers variables, functions, and
            essential concepts to get you started.
          </p>
          <p className="text-sm text-gray-500">Duration: 45 minutes</p>
        </main>
      </div>
    </div>
  );
}
