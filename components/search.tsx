"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Input } from "@/components/ui/input";

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <Input
        type="search"
        placeholder={placeholder}
        className="md:w-[300px]"
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => {
          router.push(
            pathname + "?" + createQueryString("search", e.target.value)
          );
        }}
      />
    </div>
  );
}
