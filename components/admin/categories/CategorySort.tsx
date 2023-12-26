"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function CategorySort() {
  const router = useRouter();

  const handleSubmit = (selectedSort: string) => {
    const [orderBy, sortBy] = selectedSort
      .split(" ")
      .map((word) => word.toLowerCase().replace(/[()]/g, ""));
    const currentUrl = new URL(window.location.href);

    // Update the 'order' value with 'desc'
    currentUrl.searchParams.set("order", orderBy);
    currentUrl.searchParams.set("sort", sortBy);

    // Use window.location.href to navigate to the same page with the updated query parameter
    router.push(currentUrl.toString());
  };

  return (
    <form>
      <div className="flex items-center ml-4 space-x-4">
        <Select onValueChange={handleSubmit}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Name</SelectLabel>
              <SelectItem value="Name (Asc)">Name (Asc)</SelectItem>
              <SelectItem value="Name (Desc)">Name (Desc)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}
