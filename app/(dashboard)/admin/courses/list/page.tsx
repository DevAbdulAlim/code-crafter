import LinkButton from "@/components/Buttons/LinkButton";
import prisma from "@/lib/prisma";
import DeleteButton from "@/components/Buttons/DeleteButton";
import handleCourseAction from "@/lib/actions/courseActions";
import EditButton from "@/components/Buttons/EditButton";
import ViewButton from "@/components/Buttons/ViewButton";
import Pagination from "@/components/Pagination";
import CourseSearchForm from "../../../../../components/sections/CourseSearchForm";
import CourseSortForm from "../../../../../components/sections/CourseSortForm";
import Breadcrumb from "@/components/Breadcrumb";

const CoursesListPage = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    order: string;
    sort: string;
    title: string;
    category: string;
  };
}) => {
  const { page, order, sort, title, category } = searchParams;
  const currentPage = page || 1;
  const itemsPerPage = 10;
  const skipAmount = (currentPage - 1) * itemsPerPage;
  const orderBy = order || "title";
  const sortBy = sort || "asc";
  const courseTitle = title || undefined;

  const orderByField = {
    [orderBy]: sortBy as "asc" | "desc",
  };

  const [courses, totalItems] = await prisma.$transaction([
    prisma.course.findMany({
      skip: skipAmount,
      take: itemsPerPage,
      orderBy: orderByField,
      where: {
        title: {
          contains: courseTitle || undefined,
          mode: "insensitive",
        },
        categoryId: {
          contains: category || undefined, // Add category filtering
          mode: "insensitive",
        },
      },
    }),
    prisma.course.count(),
  ]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        {/* Add New Course Button */}
        <div>
          <LinkButton to="/admin/courses/new">Add New Course</LinkButton>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="flex items-center justify-between my-8">
        {/* Search by */}
        <CourseSearchForm />

        {/* Sort by */}
        <CourseSortForm />
      </div>

      {/* Course List */}
      <ul className="divide-y divide-gray-200">
        {courses.map((course) => (
          <li key={course.id} className="grid grid-cols-1 py-4 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h2>

              <div className="flex items-center mt-2 text-gray-500">
                <span className="mr-2">Undefined</span>
                <span>&#8226;</span>
                <span className="ml-2">10 Lessons</span>
              </div>
              <span className="text-blue-500">Enrolled: 20</span>
            </div>
            <div className="flex space-x-2 md:justify-end md:items-center">
              <ViewButton to={`/admin/courses/show/${course.id}`}>
                Details
              </ViewButton>
              <EditButton to={`/admin/courses/edit/${course.id}`}>
                Edit
              </EditButton>
              <DeleteButton id={course.id} handleDelete={handleCourseAction} />
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CoursesListPage;
