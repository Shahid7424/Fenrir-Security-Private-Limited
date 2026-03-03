function SeverityBadge({ type, count }) {
  const colors = {
    Critical: "bg-red-500 text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-yellow-400 text-black",
    Low: "bg-green-500 text-white"
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-md ${colors[type]}`}
    >
      {count !== undefined ? count : type}
    </span>
  );
}

export default SeverityBadge;