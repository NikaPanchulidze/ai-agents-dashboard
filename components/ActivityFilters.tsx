"use client";

import { ActivityStatus } from "@/lib/types";
import { LucideChevronDown, LucideSearch } from "lucide-react";
import { Input } from "./ui/input";

interface ActivityFiltersProps {
  search: string;
  statusFilter: "all" | ActivityStatus;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: "all" | ActivityStatus) => void;
}

const ActivityFilters: React.FC<ActivityFiltersProps> = ({
  search,
  statusFilter,
  onSearchChange,
  onStatusChange,
}) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {/* Search Input */}
      <div className="relative w-full">
        <LucideSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <Input
          type="text"
          placeholder="Search by user or type..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 py-5 text-lg bg-gray-100 text-gray-800 border-gray-300 focus:ring-2 focus:ring-gray-400 transition-all ease-in-out md:text-lg"
        />
      </div>

      {/* Status dropdown */}
      <div className="relative md:justify-end">
        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusChange(e.target.value as "all" | ActivityStatus)
          }
          className="bg-gray-100 font-semibold rounded-lg py-2 px-2 w-36 text-base border border-gray-300 transition-all appearance-none outline-none"
        >
          <option value="all">All</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="processing">Processing</option>
        </select>

        <LucideChevronDown
          size={20}
          className="absolute top-3 left-28 text-gray-500 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ActivityFilters;
