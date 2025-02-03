import Link from "next/link";
import type { FilteredEnrollments } from "./actions";
import { Edit2, Trash2 } from "lucide-react";

interface ListTableProps {
  enrollments: FilteredEnrollments;
}

export default function EnrollmentListTable({ enrollments }: ListTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              User
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Course
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Progress
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Enrolled At
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {enrollments.map((enrollment) => (
            <tr
              key={enrollment.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {enrollment.user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {enrollment.course.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    enrollment.status === "APPROVED"
                      ? "bg-green-100 text-green-800"
                      : enrollment.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-800"
                      : enrollment.status === "COMPLETED"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {enrollment.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {enrollment.progress ? `${enrollment.progress}%` : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {enrollment.enrolledAt
                  ? new Date(enrollment.enrolledAt).toLocaleDateString()
                  : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <Link
                  href={`/admin/enrollments/${enrollment.id}/edit`}
                  className="text-indigo-600 hover:text-indigo-900 mr-4 inline-flex items-center"
                >
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Link>
                <Link
                  href={`/enrollments/${enrollment.id}/delete`}
                  className="text-red-600 hover:text-red-900 inline-flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
