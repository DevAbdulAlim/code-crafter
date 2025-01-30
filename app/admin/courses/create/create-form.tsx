"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createCourse } from "../actions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContentList from "./content-list";
import { ContentType } from "@prisma/client";
import ContentForm, { ContentInput } from "./content-form";
import CourseForm from "./course-form";

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

interface Lesson {
  id?: string;
  title: string;
  description?: string;
  order?: number;
  content: ContentInput[];
}

export default function CreateForm() {
  const [state, formAction] = useFormState(createCourse, { message: "" });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number | null>(
    null
  );
  const [currentContentIndex, setCurrentContentIndex] = useState<number | null>(
    null
  );
  const [currentContent, setCurrentContent] = useState<ContentInput>({
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
    field: keyof ContentInput,
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
        <CourseForm />

        {/* Lessons */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Lessons</h3>
          <Accordion type="multiple" className="w-full">
            {lessons.map((lesson, lessonIndex) => (
              <AccordionItem value={`lesson-${lessonIndex}`} key={lessonIndex}>
                <AccordionTrigger className="text-left">
                  <div className="flex justify-between items-center w-full">
                    <span>{lesson.title || `Lesson ${lessonIndex + 1}`}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteLesson(lessonIndex);
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete Lesson
                    </button>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
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
                        <ContentList
                          key={contentIndex}
                          contentIndex={contentIndex}
                          lessonIndex={lessonIndex}
                          content={content}
                          handleEditContent={handleEditContent}
                          handleDeleteContent={handleDeleteContent}
                        />
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <ContentForm
          currentContentIndex={currentContentIndex}
          currentContent={currentContent}
          handleContentChange={handleContentChange}
          setIsContentModalOpen={setIsContentModalOpen}
          handleSaveContent={handleSaveContent}
        />
      )}
    </form>
  );
}
