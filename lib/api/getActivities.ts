import { Activity } from "../types";

export const getActivities = async (): Promise<Activity[]> => {
  const res = await fetch("/api/activities");

  if (!res.ok) {
    throw new Error("Failed to fetch activities");
  }

  // Simulate network delay (2 seconds)
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.json();
};
