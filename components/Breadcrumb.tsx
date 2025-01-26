import { clsx } from "clsx";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="w-full mb-4">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={clsx(
              "flex items-center",
              breadcrumb.active
                ? "text-gray-900 font-semibold"
                : "text-gray-500"
            )}
          >
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" />
            )}
            <Link
              href={breadcrumb.href}
              className={clsx(
                "hover:text-gray-700 transition-colors duration-200",
                breadcrumb.active && "cursor-default pointer-events-none"
              )}
              aria-current={breadcrumb.active ? "page" : undefined}
            >
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
