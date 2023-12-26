import Breadcrumbs from "@/components/Breadcrumb";
import LessonEditForm from "@/components/admin/lessons/edit-form";
import { getLessonById } from "@/lib/actions/lessonActions";

export default async function LessonEditPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const lesson = await getLessonById(params.id);

    const lessonData = lesson.data as {
      id: string;
      lessonId: number;
      title: string;
      description: string | null;
      courseId: string;
    } | null;
    if (lessonData) {
      const { lessonId, title, courseId, description } = lessonData;
      console.log(lessonId, title, courseId, description);
      return (
        <div className="p-4 md:p-8">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Lessons", href: "/admin/lessons/all" },
              {
                label: "Edit Lesson",
                href: `/admin/lessons/${params.id}/edit`,
                active: true,
              },
            ]}
          />
          <LessonEditForm
            id={params.id}
            lesson={{ lessonId, title, courseId, description }}
          />
        </div>
      );
    } else {
      return <div>Lesson not found.</div>;
    }
  } catch (error) {
    console.error("Error fetching Lesson:", error);

    return <div>Error fetching lesson. Please try again later.</div>;
  }
}
