import LinkButton from "@/components/Buttons/LinkButton";
import OutlineButton from "@/components/Buttons/OutlineButton";
import prisma from "@/config/prisma";
import DeleteButton from "@/components/Buttons/DeleteButton";
import handleCourseAction from '@/app/(dashboard)/admin/courses/actions';
import EditButton from "@/components/Buttons/EditButton";
import ViewButton from "@/components/Buttons/ViewButton";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";


const CoursesListPage = async ({searchParams}: {searchParams: {page:number, order:string, title:string, category:string}}) => {
  const { page, order, title, category } = searchParams;
  const currentPage = page || 1;
  const itemsPerPage = 10;
  const skipAmount = (currentPage - 1) * itemsPerPage;
  const orderBy = order || 'asc';
  const courseTitle = title || undefined;
  console.log(title);

  
  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      skip: skipAmount,
      take: itemsPerPage,
      orderBy: {
        title: orderBy as 'asc' | 'desc', // Adjust the type here
      },
      where: {
        title: {
          contains: courseTitle || undefined,
        },
        categoryId: {
          contains: category || undefined, // Add category filtering
        },
      },
    }),
    prisma.course.count(),
  ]);
  
  

  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
                {course.title}
              </h2>

              <div className="flex items-center text-gray-500 mt-2">
                <span className="mr-2">Undefined</span>
                <span>&#8226;</span>
                <span className="ml-2">10 Lessons</span>
              </div>
              <span className="text-blue-500">Enrolled: 20</span>
            </div>
            <div className="space-x-2 flex md:justify-end md:items-center">
              <ViewButton to={`/admin/courses/show/${course.id}`}>
                Details
              </ViewButton>
              <EditButton to={`/admin/courses/edit/${course.id}`} >
                Edit
              </EditButton>
              <DeleteButton id={course.id} handleDelete={handleCourseAction} />
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage}  totalPages={totalPages}  currentPage={currentPage}  />
   
    </div>
  );
};

export default CoursesListPage;
