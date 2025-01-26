"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SortOption {
  label: string;
  value: string;
}

interface SortProps {
  options: SortOption[];
  value: string;
  direction: "asc" | "desc";
}

export default function Sort({ options, value, direction }: SortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([name, value]) => {
      params.set(name, value);
    });
    return params.toString();
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    router.push(
      `${pathname}?${createQueryString({
        orderBy: newValue,
        orderDirection: direction,
      })}`
    );
  };

  const handleDirectionChange = () => {
    const newDirection = direction === "asc" ? "desc" : "asc";
    router.push(
      `${pathname}?${createQueryString({
        orderBy: value,
        orderDirection: newDirection,
      })}`
    );
  };

  return (
    <div className="flex items-center space-x-2">
      <select
        value={value}
        onChange={handleSortChange}
        className="p-2 border rounded w-[180px]"
      >
        <option value="">Sort by</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={handleDirectionChange}
        className="p-2 border rounded"
        aria-label={`Sort ${direction === "asc" ? "ascending" : "descending"}`}
      >
        {direction === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
}
