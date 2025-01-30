import CreateForm from "./create-form";

export default function CreateCoursePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
      <CreateForm />
    </div>
  );
}
