"use client";

import { Activity, ActivityStatus } from "@/lib/types";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface ActivityTableProps {
  activities: Activity[];
  onRowClick: (activity: Activity) => void;
}

const statusColors: Record<ActivityStatus, string> = {
  success: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
  processing: "bg-amber-100 text-amber-800",
};

const ActivityTable: React.FC<ActivityTableProps> = ({
  activities,
  onRowClick,
}) => {
  if (activities.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No activities match your filters.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <Table className="min-w-[800px] text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Activity ID</TableHead>
            <TableHead className="min-w-[120px]">User</TableHead>
            <TableHead className="min-w-[140px]">Type</TableHead>
            <TableHead className="min-w-[120px]">Status</TableHead>
            <TableHead className="min-w-[180px]">Created Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {activities.map((activity) => (
            <TableRow
              key={activity.id}
              onClick={() => onRowClick(activity)}
              className="cursor-pointer transition-colors hover:bg-gray-200"
            >
              <TableCell>{activity.id}</TableCell>
              <TableCell>{activity.user}</TableCell>
              <TableCell>{activity.type}</TableCell>

              <TableCell>
                <p
                  className={`px-2 py-1text-lg w-20 rounded-full text-xs font-semibold ${statusColors[activity.status]}`}
                >
                  {activity.status.charAt(0).toUpperCase() +
                    activity.status.slice(1)}
                </p>
              </TableCell>

              <TableCell>
                {format(new Date(activity.createdAt), "d MMM yyyy, HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActivityTable;
