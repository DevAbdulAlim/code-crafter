"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { User } from "@prisma/client"
import { updateProfile } from "./actions"
import { Edit, Save } from "lucide-react"
import { toast } from "react-toastify"

interface ProfileContentProps {
  user: User
}

export default function ProfileContent({ user }: ProfileContentProps) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    image: user.image || "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await updateProfile(user.id, formData)
      toast.success("Profile updated successfully")
      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error("Error updating profile:", error)
      toast.error("Failed to update profile")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={user.image || `/placeholder.svg?height=128&width=128`}
                alt={user.name || "User"}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-blue-100 mt-1">{user.email}</p>
              {user.phone && <p className="text-blue-100 mt-1">{user.phone}</p>}
              <p className="text-blue-100 mt-2">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
              >
                <Edit className="h-4 w-4" /> Edit Profile
              </button>
            ) : (
              <button onClick={() => setIsEditing(false)} className="text-sm text-gray-600 hover:text-gray-800">
                Cancel
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image || ""}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4" /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900 mt-1">{user.name || "Not provided"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium text-gray-900 mt-1">{user.email || "Not provided"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium text-gray-900 mt-1">{user.phone || "Not provided"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-900 mt-1">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              {user.isAdmin && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p className="text-yellow-800 font-medium">You have administrator privileges</p>
                  <p className="text-yellow-700 text-sm mt-1">
                    You can access the admin dashboard to manage courses, users, and more.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

