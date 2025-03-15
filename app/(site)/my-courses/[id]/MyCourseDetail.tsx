"use client"

import { useState } from "react"
import { FaPlay, FaLock } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useRouter } from "next/navigation"
import type { Enrollment, Course, Lesson, Content } from "@prisma/client"
import { updateLessonProgress } from "../actions"
import { toast } from "react-toastify"

type EnrollmentWithCourse = Enrollment & {
  course: Course & {
    lessons: (Lesson & {
      content: Content[]
    })[]
  }
}

interface MyCourseDetailProps {
  enrollment: EnrollmentWithCourse
}

export default function MyCourseDetail({ enrollment }: MyCourseDetailProps) {
  const router = useRouter()
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0)
  const [isUpdating, setIsUpdating] = useState(false)

  const selectedLesson = enrollment.course.lessons[selectedLessonIndex]
  const progress = Number(enrollment.progress) || 0
  const completedLessons = Math.floor(progress * enrollment.course.lessons.length)

  // Calculate which lessons are unlocked (first N+1 lessons where N is completed lessons)
  const isLessonUnlocked = (index: number) => {
    return index <= completedLessons // Current lesson + completed lessons are unlocked
  }

  const getLessonStatus = (lesson: Lesson, index: number) => {
    if (!isLessonUnlocked(index)) return "Locked"
    if (index < completedLessons) return "Completed"
    if (index === completedLessons) return "In Progress"
    return "Upcoming"
  }

  const handleLessonSelect = (index: number) => {
    // Only allow selecting unlocked lessons
    if (isLessonUnlocked(index)) {
      setSelectedLessonIndex(index)
    } else {
      toast.error("Complete previous lessons to unlock this one")
    }
  }

  const handlePrevious = () => {
    if (selectedLessonIndex > 0) {
      setSelectedLessonIndex(selectedLessonIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedLessonIndex < enrollment.course.lessons.length - 1 && isLessonUnlocked(selectedLessonIndex + 1)) {
      setSelectedLessonIndex(selectedLessonIndex + 1)
    } else if (!isLessonUnlocked(selectedLessonIndex + 1)) {
      toast.error("Complete this lesson to unlock the next one")
    }
  }

  const handleMarkComplete = async () => {
    try {
      setIsUpdating(true)

      // Calculate new progress value (number of completed lessons / total lessons)
      const newCompletedLessons = Math.max(completedLessons, selectedLessonIndex + 1)
      const newProgress = newCompletedLessons / enrollment.course.lessons.length

      // Update progress in the database
      await updateLessonProgress(enrollment.id, newProgress)

      toast.success("Lesson marked as complete!")

      // Refresh the page to get updated enrollment data
      router.refresh()
    } catch (error) {
      console.error("Failed to update progress:", error)
      toast.error("Failed to update progress")
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12 text-gray-900">
        {enrollment.course.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4 bg-white shadow-md rounded-lg p-4 md:p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Lessons</h2>
          <div className="mb-4 bg-gray-100 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Your Progress</span>
              <span className="text-sm font-bold text-blue-600">{Math.round(progress * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress * 100}%` }}></div>
            </div>
          </div>
          <ul className="space-y-3">
            {enrollment.course.lessons.map((lesson, index) => {
              const status = getLessonStatus(lesson, index)
              return (
                <li
                  key={lesson.id}
                  onClick={() => handleLessonSelect(index)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    selectedLessonIndex === index ? "ring-2 ring-blue-500" : ""
                  } ${
                    status === "Locked"
                      ? "bg-gray-100 opacity-70"
                      : status === "Completed"
                        ? "bg-green-100 hover:bg-green-200"
                        : status === "In Progress"
                          ? "bg-blue-100 hover:bg-blue-200"
                          : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {status === "Locked" && <FaLock className="text-gray-500" />}
                    <span className={`font-medium ${status === "Locked" ? "text-gray-500" : "text-gray-800"}`}>
                      {index + 1}. {lesson.title}
                    </span>
                  </div>
                  <span
                    className={`text-xs rounded px-2 py-1 ${
                      status === "Completed"
                        ? "bg-green-500 text-white"
                        : status === "In Progress"
                          ? "bg-blue-500 text-white"
                          : status === "Locked"
                            ? "bg-gray-500 text-white"
                            : "bg-gray-400 text-white"
                    }`}
                  >
                    {status}
                  </span>
                </li>
              )
            })}
          </ul>
        </aside>

        <main className="flex-1 bg-white shadow-md rounded-lg p-6 md:p-8">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Video Placeholder"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <FaPlay className="text-white text-3xl" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{selectedLesson.title}</h2>
          <p className="text-gray-700 mb-6">
            {selectedLesson.content[0]?.content || "No content available for this lesson."}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={selectedLessonIndex === 0}
                className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <IoIosArrowBack /> Previous
              </button>
              <button
                onClick={handleNext}
                disabled={
                  selectedLessonIndex === enrollment.course.lessons.length - 1 ||
                  !isLessonUnlocked(selectedLessonIndex + 1)
                }
                className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <IoIosArrowForward />
              </button>
            </div>
            <button
              onClick={handleMarkComplete}
              disabled={isUpdating || getLessonStatus(selectedLesson, selectedLessonIndex) === "Completed"}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUpdating
                ? "Updating..."
                : getLessonStatus(selectedLesson, selectedLessonIndex) === "Completed"
                  ? "Completed"
                  : "Mark as Complete"}
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

