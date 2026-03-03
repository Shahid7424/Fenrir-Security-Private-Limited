function StatusChip({ status }) {
  const styles = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    Scheduled:
      "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    "In Progress":
      "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusChip;