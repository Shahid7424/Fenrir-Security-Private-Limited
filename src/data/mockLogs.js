const mockLogs = [
  { time: "09:00:00", message: "Starting reconnaissance phase on helpdesk.democorp.com" },
  { time: "09:01:12", message: "Port scan detected Apache httpd 2.4.65 running on port 80" },
  { time: "09:02:45", message: "Discovered login endpoint at /api/auth/login" },
  { time: "09:04:10", message: "Potential IDOR vulnerability identified via X-UserId header manipulation" },
  { time: "09:05:50", message: "Testing SQL injection payloads on /api/users/profile" },
  { time: "09:06:33", message: "Time-based blind SQL injection confirmed" },
  { time: "09:07:41", message: "Enumerating hidden directories using automated crawler" },
  { time: "09:08:55", message: "Validating privilege escalation paths" }
];

export default mockLogs;