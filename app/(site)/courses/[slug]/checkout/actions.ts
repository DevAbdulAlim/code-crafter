"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Define the schema for form validation
const enrollmentSchema = z.object({
  courseId: z.string(),
  paymentOption: z.enum(["now", "later"]),
})

export type EnrollmentState = {
  status: "idle" | "submitting" | "success" | "error"
  message?: string
}

export async function enrollInCourse(prevState: EnrollmentState, formData: FormData): Promise<EnrollmentState> {
  try {
    // Validate the form data
    const validatedFields = enrollmentSchema.safeParse({
      courseId: formData.get("courseId"),
      paymentOption: formData.get("paymentOption"),
    })

    if (!validatedFields.success) {
      return {
        status: "error",
        message: "Invalid form data. Please check your inputs.",
      }
    }

    const { courseId, paymentOption } = validatedFields.data

    // Get the current user
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return {
        status: "error",
        message: "You must be logged in with an email to enroll in a course.",
      }
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return {
        status: "error",
        message: "User not found. Please try logging in again.",
      }
    }

    const userId = user.id

    // Check if the course exists
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course) {
      return {
        status: "error",
        message: "Course not found.",
      }
    }

    // Check if the user is already enrolled
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: {
        userId,
        courseId,
        status: {
          in: ["PENDING", "APPROVED"],
        },
      },
    })

    if (existingEnrollment) {
      return {
        status: "error",
        message: "You are already enrolled in this course.",
      }
    }

    // Create the enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId,
        status: paymentOption === "now" ? "APPROVED" : "PENDING",
        enrolledAt: new Date(),
        price: course.price,
        progress: 0,
      },
    })

    // Create a payment record if paying now
    if (paymentOption === "now") {
      await prisma.payment.create({
        data: {
          amount: course.price,
          status: "COMPLETED",
          currency: "USD",
          enrollmentId: enrollment.id,
        },
      })
    }

    // Revalidate the course page
    revalidatePath(`/courses/${course.slug}`)

    return {
      status: "success",
      message:
        paymentOption === "now"
          ? "Enrollment successful! You now have access to the course."
          : "Enrollment pending. Please complete your payment to access the course.",
    }
  } catch (error) {
    console.error("Enrollment error:", error)
    return {
      status: "error",
      message: "An error occurred during enrollment. Please try again.",
    }
  }
}

