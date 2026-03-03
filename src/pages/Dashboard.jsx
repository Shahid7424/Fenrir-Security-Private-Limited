import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import mockScans from "../data/mockScans";
import StatsBar from "../components/dashboard/StatsBar";
import ScanTable from "../components/dashboard/ScanTable";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredScans = mockScans.filter((scan) =>
    scan.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <StatsBar />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              placeholder="Search scans by name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white">
              Filter
            </button>

            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-100 dark:bg-[#1a1a1a] dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white">
              Column
            </button>

            <button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-md hover:bg-teal-600">
              + New scan
            </button>
          </div>
        </div>

        <ScanTable scans={filteredScans} />
      </div>
    </AppLayout>
  );
}

export default Dashboard;
