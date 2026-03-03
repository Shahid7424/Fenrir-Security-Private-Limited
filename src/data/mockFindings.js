const mockFindings = [
  {
    id: "f-1",
    severity: "Critical",
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access."
  },
  {
    id: "f-2",
    severity: "High",
    time: "10:48:12",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Low-privilege user accessed metadata of other users due to missing access control checks."
  },
  {
    id: "f-3",
    severity: "Medium",
    time: "10:52:44",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts, allowing brute-force attacks."
  },
  {
    id: "f-4",
    severity: "Low",
    time: "10:55:20",
    title: "Missing Security Headers",
    endpoint: "/",
    description:
      "Security headers such as X-Frame-Options and Content-Security-Policy were not properly configured."
  }
];

export default mockFindings;