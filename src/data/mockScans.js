const mockScans = [
  {
    id: "scan-1",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 12, high: 23, medium: 18, low: 5 },
    lastScan: "4d ago"
  },
  {
    id: "scan-2",
    name: "Internal APIs",
    type: "Blackbox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: "Scheduled"
  },
  {
    id: "scan-3",
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 45,
    vulnerabilities: { critical: 3, high: 7, medium: 12, low: 4 },
    lastScan: "3d ago"
  },
  {
    id: "scan-4",
    name: "Production Infrastructure",
    type: "Greybox",
    status: "In Progress",
    progress: 62,
    vulnerabilities: { critical: 5, high: 9, medium: 14, low: 2 },
    lastScan: "10m ago"
  },
  {
    id: "scan-5",
    name: "Payment Gateway",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 8, high: 11, medium: 6, low: 3 },
    lastScan: "1d ago"
  },
  {
    id: "scan-6",
    name: "Staging Environment",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 4, medium: 9, low: 6 },
    lastScan: "2d ago"
  },
  {
    id: "scan-7",
    name: "Admin Portal",
    type: "Greybox",
    status: "Failed",
    progress: 78,
    vulnerabilities: { critical: 6, high: 13, medium: 7, low: 2 },
    lastScan: "5h ago"
  },
  {
    id: "scan-8",
    name: "Cloud Storage Nodes",
    type: "Blackbox",
    status: "In Progress",
    progress: 34,
    vulnerabilities: { critical: 2, high: 5, medium: 4, low: 1 },
    lastScan: "15m ago"
  },
  {
    id: "scan-9",
    name: "Partner API Gateway",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
    lastScan: "Scheduled"
  },
  {
    id: "scan-10",
    name: "Mobile Backend Services",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 4, high: 10, medium: 15, low: 8 },
    lastScan: "6h ago"
  }
];

export default mockScans;