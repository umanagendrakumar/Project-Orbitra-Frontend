export const statusColors = {
  APPLIED: "bg-blue-100 text-blue-700",

  OA_RECEIVED: "bg-indigo-100 text-indigo-700",
  OA_COMPLETED: "bg-indigo-200 text-indigo-800",

  GD_SCHEDULED: "bg-amber-100 text-amber-700",
  GD_COMPLETED: "bg-amber-200 text-amber-800",

  TR1_SCHEDULED: "bg-purple-100 text-purple-700",
  TR1_COMPLETED: "bg-purple-200 text-purple-800",

  TR2_SCHEDULED: "bg-violet-100 text-violet-700",
  TR2_COMPLETED: "bg-violet-200 text-violet-800",

  HR_SCHEDULED: "bg-pink-100 text-pink-700",
  HR_COMPLETED: "bg-pink-200 text-pink-800",

  AWAITING_RESULT: "bg-gray-200 text-gray-700",

  OFFER_RECEIVED: "bg-green-100 text-green-700",

  REJECTED: "bg-red-100 text-red-700",

  GHOSTED: "bg-gray-400 text-white"
};


export const jobTypes = [
  "FULL_TIME",
  "PART_TIME",
  "INTERNSHIP",
  "APPRENTICESHIP",
  "TRAINEE",
  "CONTRACT",
  "FREELANCE",
  "REMOTE",
  "TEMPORARY"
];

export const applicationStatuses = [
  "APPLIED",
  "OA_RECEIVED",
  "OA_COMPLETED",
  "GD_SCHEDULED",
  "GD_COMPLETED",
  "TR1_SCHEDULED",
  "TR1_COMPLETED",
  "TR2_SCHEDULED",
  "TR2_COMPLETED",
  "HR_SCHEDULED",
  "HR_COMPLETED",
  "AWAITING_RESULT",
  "OFFER_RECEIVED",
  "REJECTED",
  "GHOSTED"
];

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });