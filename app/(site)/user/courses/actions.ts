"use server"

import { revalidatePath } from "next/cache"
import prisma from "@/lib/prisma"

/**
 * Updates the progress of a lesson for a specific enrollment
 * @param enrollmentId The ID of the enrollment to update
 * @param progress The new progress value (0-1)
 */
export async function updateLessonProgress(enrollmentId: string, progress: number): Promise<void> {
  try {
    // Validate progress value
    if (progress < 0 || progress > 1) {
      throw new Error("Progress must be between 0 and 1")
    }

    // Update the enrollment progress
    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        progress,
        // If progress is 1, mark as completed
        ...(progress === 1 ? { completedAt: new Date() } : {}),
      },
    })

    // Revalidate the course page
    revalidatePath(`/courses/[slug]`)
  } catch (error) {
    console.error("Error updating lesson progress:", error)
    throw new Error("Failed to update lesson progress")
  }
}

