import ContentEditForm from "@/components/admin/contents/ContentEditForm";
import Breadcrumbs from "@/components/Breadcrumb";
import { getContentById } from "@/lib/actions/contentActions";
import React from "react";

export default async function ContentEditPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const content = await getContentById(params.id);

    const contentData = content.data as {
      id: string;
      contentId: number;
      title: string;
      description: string | null;
      media: string;
      lessonId: string;
    } | null;
    if (contentData) {
      const { contentId, title, description, media, lessonId } = contentData;

      return (
        <div className="p-4 md:p-8">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Contents", href: "/admin/contents/all" },
              {
                label: "Edit Content",
                href: `/admin/contents/${params.id}/edit`,
                active: true,
              },
            ]}
          />
          <ContentEditForm
            id={params.id}
            content={{ contentId, title, description, media, lessonId }}
          />
        </div>
      );
    } else {
      return <div>Content not found.</div>;
    }
  } catch (error) {
    console.error("Error fetching content:", error);

    return <div>Error fetching content. Please try again later.</div>;
  }
}
