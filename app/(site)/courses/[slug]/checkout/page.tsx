import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import CheckoutForm from "./CheckoutForm"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const getCourseById = async (slug: string) => {
  try {
    return await prisma.course.findUnique({
      where: { slug },
      include: {
        category: true,
      },
    })
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function CheckoutPage({
  params,
}: {
  params: { slug: string }
}) {
  // Check if user is authenticated
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    // Redirect to login page with return URL
    redirect(`/api/auth/signin?callbackUrl=/courses/${params.slug}/checkout`)
  }

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    // User not found in database
    redirect(`/api/auth/signin?callbackUrl=/courses/${params.slug}/checkout`)
  }

  const course = await getCourseById(params.slug)

  if (!course) return notFound()

  // Check if the user is already enrolled
  const existingEnrollment = await prisma.enrollment.findFirst({
    where: {
      userId: user.id,
      courseId: course.id,
      status: {
        in: ["PENDING", "APPROVED"],
      },
    },
  })

  if (existingEnrollment) {
    // User is already enrolled, redirect to course page
    redirect(`/courses/${params.slug}`)
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{course.category.name}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${course.price.toFixed(2)}
                {course.salePrice && course.salePrice < course.price && (
                  <span className="ml-2 line-through text-gray-400">${course.price.toFixed(2)}</span>
                )}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duration</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.duration}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Level</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.level}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Language</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.language}</dd>
            </div>
          </dl>
        </div>
      </div>
      <CheckoutForm course={course} />
    </div>
  )
}

