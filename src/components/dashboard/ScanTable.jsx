import { useNavigate } from "react-router-dom";
import StatusChip from "../ui/StatusChip";
import ProgressBar from "../ui/ProgressBar";
import SeverityBadge from "../ui/SeverityBadge";

function ScanTable({ scans }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm text-left">
        
        <thead className="bg-gray-50 dark:bg-[#121212] border-b dark:border-gray-800">
          <tr>
            <th className="px-6 py-3 font-medium text-gray-600">Scan Name</th>
            <th className="px-6 py-3 font-medium text-gray-600">Type</th>
            <th className="px-6 py-3 font-medium text-gray-600">Status</th>
            <th className="px-6 py-3 font-medium text-gray-600">Progress</th>
            <th className="px-6 py-3 font-medium text-gray-600">Vulnerabilities</th>
            <th className="px-6 py-3 font-medium text-gray-600">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => navigate(`/scan/${scan.id}`)}
              className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white cursor-pointer transition "
            >
              <td className="px-6 py-4 font-medium">
                {scan.name}
              </td>

              <td className="px-6 py-4 text-gray-500">
                {scan.type}
              </td>

              <td className="px-6 py-4">
                <StatusChip status={scan.status} />
              </td>

              <td className="px-6 py-4 w-48">
                <ProgressBar value={scan.progress} />
              </td>

              <td className="px-6 py-4 flex gap-2 flex-wrap">
                <SeverityBadge type="Critical" count={scan.vulnerabilities.critical} />
                <SeverityBadge type="High" count={scan.vulnerabilities.high} />
                <SeverityBadge type="Medium" count={scan.vulnerabilities.medium} />
                <SeverityBadge type="Low" count={scan.vulnerabilities.low} />
              </td>

              <td className="px-6 py-4 text-gray-500">
                {scan.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScanTable;