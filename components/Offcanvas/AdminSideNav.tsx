import Link from "next/link";

const AdminSideNav: React.FC = () => {
  return (
    <aside className="bg-gray-800 w-64 h-full">
      {/* Sidebar content */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        {/* Your emoji logo */}
        <span role="img" aria-label="logo" className="text-white text-2xl">
          🚀
        </span>
        <span className="text-white text-2xl ml-2">CodeCrafter</span>
      </div>

      {/* Sidebar links */}
      <nav className="flex flex-col mt-5">
        <Link href="/admin" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Dashboard
        </Link>
        <Link href="/admin/categories" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Categories
        </Link>

        <Link href="/admin/courses/list" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Courses
        </Link>

        <Link href="/admin/lessons" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Lessons
        </Link>

        <Link href="/admin/content" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Content
        </Link>

        <Link href="/admin/enrollments" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Enrollments
        </Link>

        <Link href="/admin/users" className="text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
          Users
        </Link>
        
      </nav>
    </aside>
  );
};

export default AdminSideNav;
