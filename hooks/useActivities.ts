import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/lib/api/getActivities";

export const useActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });
};
