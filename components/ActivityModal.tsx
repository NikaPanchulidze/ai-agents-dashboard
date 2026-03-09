"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Activity } from "@/lib/types";
import { format } from "date-fns";

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
}

const statusColors = {
  success: "text-green-600",
  failed: "text-red-600",
  processing: "text-amber-600",
};

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <Dialog
      key={activity.id}
      defaultOpen
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent className="max-w-lg ring-0">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Activity Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <p className="text-sm text-gray-500">Activity ID</p>
            <p className="font-medium break-all">{activity.id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">User</p>
            <p className="font-medium">{activity.user}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Type</p>
            <p className="font-medium">{activity.type}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className={`font-medium ${statusColors[activity.status]}`}>
              {capitalize(activity.status)}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Created At</p>
            <p className="font-medium">
              {format(new Date(activity.createdAt), "d MMM yyyy, HH:mm")}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p className="font-medium">{activity.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityModal;
