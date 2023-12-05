"use client";
import OutlineButton from "@/components/Buttons/OutlineButton";
import SearchInput from "@/components/Form/SearchInput";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CourseSearchForm() {
    const [title, setTitle] = useState('');
    const router = useRouter();
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    router.push(`/admin/courses/list?title=${title}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-4">
        <SearchInput title="Search By Title" onChange={setTitle} />
        <OutlineButton type="submit">Search</OutlineButton>
      </div>
    </form>
  );
}
