"use client";

import { ContentType } from "@prisma/client";

export interface ContentInput {
  id?: string;
  type: ContentType;
  content: string;
  duration?: number;
  attachments?: string;
  order?: number;
}

interface ContentFormProps {
  currentContentIndex: number | null;
  currentContent: ContentInput;
  handleContentChange: (
    field: keyof ContentInput,
    value: string | number
  ) => void;
  setIsContentModalOpen: (modal: boolean) => void;
  handleSaveContent: () => void;
}

export default function ContentForm({
  currentContentIndex,
  currentContent,
  handleContentChange,
  setIsContentModalOpen,
  handleSaveContent,
}: ContentFormProps) {
  return (
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
              onChange={(e) => handleContentChange("content", e.target.value)}
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
                handleContentChange("duration", Number.parseInt(e.target.value))
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
                handleContentChange("order", Number.parseInt(e.target.value))
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
  );
}
