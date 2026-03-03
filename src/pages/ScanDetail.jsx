import AppLayout from "../components/layout/AppLayout";
import mockScans from "../data/mockScans";
import mockLogs from "../data/mockLogs";
import mockFindings from "../data/mockFindings";
import SeverityBadge from "../components/ui/SeverityBadge";

function ScanDetail() {
  const scan = mockScans.find((s) => s.id === "scan-2");

  if (!scan) return <div>Scan not found</div>;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-sm shadow-sm  dark:border-gray-800 p-8">
          <div className="flex gap-12 items-start">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#1f2937"
                  strokeWidth="10"
                  fill="#0f1720"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#14b8a6"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="314"
                  strokeDashoffset="314"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sky-500 text-2xl font-semibold">
                  {scan.progress}%
                </span>
                <span className="text-gray-400 text-sm">In Progress</span>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              {/* STEP TRACKER */}
              <div className="relative flex justify-between items-center">
                {/* connector line */}
                <div className="absolute top-6 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700"></div>

                {[
                  "Spidering",
                  "Mapping",
                  "Testing",
                  "Validating",
                  "Reporting",
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium
                        ${
                          index === 0
                            ? "bg-teal-500 text-white shadow-md"
                            : "bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 text-gray-400"
                        }`}
                    >
                      {index === 0 ? "🔍" : index + 1}
                    </div>

                    <span
                      className={`mt-2 text-xs ${
                        index === 0
                          ? "text-teal-500 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-8 text-sm border-t pt-6 dark:border-gray-700">
                <div>
                  <p className="text-gray-400 text-xs">Scan Type</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {scan.type}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Targets</p>
                  <p className="font-medium dark:text-white">google.com</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs ">Started At</p>
                  <p className="font-medium dark:text-white">Nov 22, 09:00AM</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Credentials</p>
                  <p className="font-medium dark:text-white">2 Active</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Files</p>
                  <p className="font-medium dark:text-white">Control.pdf</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Checklists</p>
                  <p className="font-medium text-teal-500">40 / 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONSOLE + FINDINGS ================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* CONSOLE */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm  dark:border-gray-800">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-800 bg-gray-50 dark:bg-[#111]">
              <div className="flex items-center gap-3 text-sm font-medium dark:text-white">
                <span className="w-2 h-2 bg-green-500 rounded-full "></span>
                Live Scan Console
                <span className="text-gray-400 text-xs ml-2">Running...</span>
              </div>

              <div className="text-gray-400 cursor-pointer text-lg">×</div>
            </div>

            {/* tabs */}
            <div className="flex gap-8 px-5 pt-4 text-sm border-b dark:border-gray-800">
              <button className="pb-3 border-b-2 border-teal-500 text-teal-500 font-medium">
                Activity Log
              </button>
              <button className="pb-3 text-gray-400">Verification Loops</button>
            </div>

            {/* console body */}
            <div className="bg-gray-50 dark:bg-[#0b0b0b] p-5 h-80 font-mono text-xs overflow-y-auto text-gray-700 dark:text-gray-300">
              {mockLogs.map((log, index) => (
                <p key={index} className="mb-3 leading-relaxed">
                  <span className="text-gray-400">[{log.time}]</span>{" "}
                  {log.message}
                </p>
              ))}
            </div>
          </div>

          {/* FINDINGS */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl dark:text-white dark:border-gray-800 p-5 space-y-4">
            <div className="text-sm font-medium border-b pb-4 dark:border-gray-800">
              Finding Log
            </div>

            {mockFindings.map((finding) => (
              <div
                key={finding.id}
                className="rounded-xl p-4 dark:border-gray-700 hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <SeverityBadge type={finding.severity} />
                  <span className="text-xs text-gray-400">{finding.time}</span>
                </div>

                <h3 className="font-semibold text-sm mb-1">{finding.title}</h3>

                <p className="text-xs text-teal-500 mb-2">{finding.endpoint}</p>

                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {finding.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default ScanDetail;
