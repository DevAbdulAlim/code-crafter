"use server"

import { revalidatePath } from "next/cache"
import prisma from "@/lib/prisma"

interface ProfileData {
  name?: string | null
  email?: string | null
  phone?: string | null
  image?: string | null
}

export async function updateProfile(userId: string, data: ProfileData): Promise<void> {
  try {
    // Validate email format if provided
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        throw new Error("Invalid email format")
      }
    }

    // Check if email is already in use by another user
    if (data.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: data.email,
          NOT: {
            id: userId,
          },
        },
      })

      if (existingUser) {
        throw new Error("Email is already in use by another account")
      }
    }

    // Update the user profile
    await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        image: data.image,
        updatedAt: new Date(),
      },
    })

    // Revalidate the profile page
    revalidatePath("/profile")
  } catch (error) {
    console.error("Error updating profile:", error)
    throw new Error("Failed to update profile")
  }
}

