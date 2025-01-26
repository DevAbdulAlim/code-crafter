import Search from "./search";
import Sort from "./sort";
import Pagination from "./pagination";

interface TableLayoutProps {
  children: React.ReactNode;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  searchValue: string;
  sortOptions: Array<{ label: string; value: string }>;
  sortValue: string;
  sortDirection: "asc" | "desc";
}

export default function TableLayout({
  children,
  totalItems,
  currentPage,
  itemsPerPage,
  searchValue,
  sortOptions,
  sortValue,
  sortDirection,
}: TableLayoutProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Search placeholder="Search..." />
        <Sort
          options={sortOptions}
          value={sortValue}
          direction={sortDirection}
        />
      </div>
      {children}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}
