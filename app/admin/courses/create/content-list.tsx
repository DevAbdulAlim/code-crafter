"use client";

import { ContentInput } from "./content-form";

interface ContentListProps {
  content: ContentInput;
  contentIndex: number;
  lessonIndex: number;
  handleEditContent: (LessonIndex: number, contentIndex: number) => void;
  handleDeleteContent: (LessonIndex: number, contentIndex: number) => void;
}

export default function ContentList({
  content,
  contentIndex,
  lessonIndex,
  handleEditContent,
  handleDeleteContent,
}: ContentListProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <span>
        {content.type}: {content.content.substring(0, 80)}
        ...
      </span>
      <div>
        <button
          type="button"
          onClick={() => handleEditContent(lessonIndex, contentIndex)}
          className="text-blue-500 hover:text-blue-600 mr-2"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDeleteContent(lessonIndex, contentIndex)}
          className="text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
