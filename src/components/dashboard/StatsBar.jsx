import mockStats from "../../data/mockStats";

function StatsBar() {
  const stats = [
    {
      label: "Critical Severity",
      data: mockStats.critical,
      color: "text-red-500",
      changeColor: "text-red-500",
    },
    {
      label: "High Severity",
      data: mockStats.high,
      color: "text-orange-500",
      changeColor: "text-red-500",
    },
    {
      label: "Medium Severity",
      data: mockStats.medium,
      color: "text-yellow-500",
      changeColor: "text-green-500",
    },
    {
      label: "Low Severity",
      data: mockStats.low,
      color: "text-blue-500",
      changeColor: "text-red-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 pb-4">
        <div className="flex flex-wrap items-center gap-4 divide-x divide-gray-300 dark:divide-gray-700">
          <span className="pr-4">
            Org:{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Project X
            </span>
          </span>

          <span className="px-4">
            Owner:{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Nammagiri
            </span>
          </span>

          <span className="px-4">
            Total Scans: <span className="font-medium">100</span>
          </span>

          <span className="px-4">
            Scheduled: <span className="font-medium">1000</span>
          </span>

          <span className="px-4">
            Rescans: <span className="font-medium">100</span>
          </span>

          <span className="px-4">
            Failed Scans: <span className="font-medium">100</span>
          </span>
        </div>

        <span className="ml-auto flex items-center gap-2 text-teal-500">
          ⟳ 10 mins ago
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm p-5"
          >
            <p className="text-sm text-gray-500 mb-3">{item.label}</p>

            <div className="flex items-center justify-between">
              <h2 className={`text-2xl font-semibold ${item.color}`}>
                {item.data.count}
              </h2>

              <span className={`text-xs ${item.changeColor}`}>
                {item.data.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
