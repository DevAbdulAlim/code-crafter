import Link from "next/link";

const AdminSideNav: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-gray-800">
      {/* Sidebar content */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        {/* Your emoji logo */}
        <span role="img" aria-label="logo" className="text-2xl text-white">
          🚀
        </span>
        <span className="ml-2 text-2xl text-white">CodeCrafter</span>
      </div>

      {/* Sidebar links */}
      <nav className="flex flex-col mt-5">
        <Link
          href="/admin"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/categories/all"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Categories
        </Link>

        <Link
          href="/admin/courses/list"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Courses
        </Link>

        <Link
          href="/admin/lessons"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Lessons
        </Link>

        <Link
          href="/admin/content"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Content
        </Link>

        <Link
          href="/admin/enrollments"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Enrollments
        </Link>

        <Link
          href="/admin/users"
          className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSideNav;
