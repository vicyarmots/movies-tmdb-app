export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-500";
    case "Medium":
      return "bg-orange-500";
    case "Low":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};
