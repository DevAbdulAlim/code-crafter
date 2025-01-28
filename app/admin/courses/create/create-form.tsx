"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  type CourseState,
  CourseStatus,
  createCourse,
  SkillLevel,
} from "../actions";
import { ContentType } from "@prisma/client";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
    >
      {pending ? "Creating..." : "Create Course"}
    </button>
  );
}

interface LessonContent {
  id?: string;
  type: ContentType;
  content: string;
  duration?: number;
  attachments?: string;
  order?: number;
}

interface Lesson {
  id?: string;
  title: string;
  description?: string;
  order?: number;
  content: LessonContent[];
}

export default function CourseForm() {
  const [state, formAction] = useFormState(createCourse, { message: "" });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number | null>(
    null
  );
  const [currentContentIndex, setCurrentContentIndex] = useState<number | null>(
    null
  );
  const [currentContent, setCurrentContent] = useState<LessonContent>({
    type: ContentType.TEXT,
    content: "",
    duration: undefined,
    attachments: "",
    order: undefined,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("lessons", JSON.stringify(lessons));
    formAction(formData);
  };

  const handleAddLesson = () => {
    setLessons([
      ...lessons,
      { title: "", description: "", order: lessons.length + 1, content: [] },
    ]);
  };

  const handleDeleteLesson = (index: number) => {
    const updatedLessons = lessons.filter((_, i) => i !== index);
    setLessons(updatedLessons);
  };

  const handleLessonChange = (
    index: number,
    field: keyof Lesson,
    value: string | number
  ) => {
    const updatedLessons = [...lessons];
    updatedLessons[index] = { ...updatedLessons[index], [field]: value };
    setLessons(updatedLessons);
  };

  const handleAddContent = (lessonIndex: number) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentContentIndex(null);
    setCurrentContent({
      type: ContentType.TEXT,
      content: "",
      duration: undefined,
      attachments: "",
      order: lessons[lessonIndex].content.length + 1,
    });
    setIsContentModalOpen(true);
  };

  const handleEditContent = (lessonIndex: number, contentIndex: number) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentContentIndex(contentIndex);
    setCurrentContent(lessons[lessonIndex].content[contentIndex]);
    setIsContentModalOpen(true);
  };

  const handleDeleteContent = (lessonIndex: number, contentIndex: number) => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].content = updatedLessons[
      lessonIndex
    ].content.filter((_, i) => i !== contentIndex);
    setLessons(updatedLessons);
  };

  const handleContentChange = (
    field: keyof LessonContent,
    value: string | number
  ) => {
    setCurrentContent((prev) => ({
      ...prev,
      [field]: field === "type" ? (value as ContentType) : value,
    }));
  };

  const handleSaveContent = () => {
    if (currentLessonIndex === null) return;

    const updatedLessons = [...lessons];
    if (currentContentIndex === null) {
      // Adding new content
      updatedLessons[currentLessonIndex].content.push(currentContent);
    } else {
      // Editing existing content
      updatedLessons[currentLessonIndex].content[currentContentIndex] =
        currentContent;
    }
    setLessons(updatedLessons);
    setIsContentModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Create New Course</h2>

        {/* Course basic information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="salePrice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sale Price
            </label>
            <input
              type="number"
              id="salePrice"
              name="salePrice"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skill Level
            </label>
            <select
              id="level"
              name="level"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.values(SkillLevel).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.values(CourseStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="video"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Video URL
            </label>
            <input
              type="url"
              id="video"
              name="video"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" name="isFeatured" className="mr-2" />
              Featured Course
            </label>
          </div>
          <div>
            <label
              htmlFor="maxStudents"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Max Students
            </label>
            <input
              type="number"
              id="maxStudents"
              name="maxStudents"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="seoTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SEO Title
            </label>
            <input
              type="text"
              id="seoTitle"
              name="seoTitle"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="seoDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SEO Description
            </label>
            <textarea
              id="seoDescription"
              name="seoDescription"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="seoKeywords"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              SEO Keywords
            </label>
            <input
              type="text"
              id="seoKeywords"
              name="seoKeywords"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category ID
            </label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Lessons */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Lessons</h3>
          {lessons.map((lesson, lessonIndex) => (
            <div
              key={lessonIndex}
              className="mb-6 p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium">
                  {lesson.title || `Lesson ${lessonIndex + 1}`}
                </h4>
                <button
                  type="button"
                  onClick={() => handleDeleteLesson(lessonIndex)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete Lesson
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Lesson Title"
                  value={lesson.title}
                  onChange={(e) =>
                    handleLessonChange(lessonIndex, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Lesson Description"
                  value={lesson.description || ""}
                  onChange={(e) =>
                    handleLessonChange(
                      lessonIndex,
                      "description",
                      e.target.value
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <input
                  type="number"
                  placeholder="Lesson Order"
                  value={lesson.order || ""}
                  onChange={(e) =>
                    handleLessonChange(
                      lessonIndex,
                      "order",
                      Number.parseInt(e.target.value)
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                  <h5 className="font-semibold mt-2 mb-1">Content</h5>
                  {lesson.content.map((content, contentIndex) => (
                    <div
                      key={contentIndex}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <span>
                        {content.type}: {content.content.substring(0, 30)}...
                      </span>
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            handleEditContent(lessonIndex, contentIndex)
                          }
                          className="text-blue-500 hover:text-blue-600 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteContent(lessonIndex, contentIndex)
                          }
                          className="text-red-500 hover:text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddContent(lessonIndex)}
                    className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                  >
                    Add Content
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddLesson}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add Lesson
          </button>
        </div>
      </div>

      <SubmitButton />

      {state.message && <p className="mt-4 text-green-500">{state.message}</p>}

      {/* Content Modal */}
      {isContentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {currentContentIndex === null ? "Add" : "Edit"} Content
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contentType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type
                </label>
                <select
                  id="contentType"
                  value={currentContent.type}
                  onChange={(e) => handleContentChange("type", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.values(ContentType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contentText"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content
                </label>
                <textarea
                  id="contentText"
                  value={currentContent.content}
                  onChange={(e) =>
                    handleContentChange("content", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="contentDuration"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  id="contentDuration"
                  value={currentContent.duration || ""}
                  onChange={(e) =>
                    handleContentChange(
                      "duration",
                      Number.parseInt(e.target.value)
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contentAttachments"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Attachments
                </label>
                <input
                  type="text"
                  id="contentAttachments"
                  value={currentContent.attachments || ""}
                  onChange={(e) =>
                    handleContentChange("attachments", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contentOrder"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Order
                </label>
                <input
                  type="number"
                  id="contentOrder"
                  value={currentContent.order || ""}
                  onChange={(e) =>
                    handleContentChange(
                      "order",
                      Number.parseInt(e.target.value)
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsContentModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveContent}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
