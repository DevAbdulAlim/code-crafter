import React from "react";
import ButtonLink from "@/components/ui/buttonLink";
import { PencilIcon } from "lucide-react";
import ContentDeleteForm from "./ContentDeleteForm"; // You might need to create this component

export default function ContentTable({ data }: { data: any }) {
  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-slate-50 md:pt-0">
          <div className="md:hidden">
            {data?.map((item: any) => (
              <div
                key={item.id}
                className="w-full p-4 mb-2 bg-white rounded-md"
              >
                <p>{item.id}</p>
                <p>{item.contentId}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.media}</p>
                <p>{item.lessonId}</p>
                <div className="flex justify-between mt-2">
                  <ButtonLink
                    href={`/admin/contents/${item.id}/edit`}
                    variant="ghost"
                    className="px-2 border"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </ButtonLink>
                  <ContentDeleteForm id={item.id} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Content ID
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Description
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Media
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Lesson ID
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((item: any) => (
                <tr
                  key={item.contentId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="px-3 py-3 whitespace-nowrap">
                    {item.contentId}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">{item.title}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">{item.media}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {item.lessonId}
                  </td>
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex justify-end gap-3">
                      <ButtonLink
                        href={`/admin/contents/${item.id}/edit`}
                        variant="ghost"
                        className="px-2 border"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </ButtonLink>
                      <ContentDeleteForm id={item.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}