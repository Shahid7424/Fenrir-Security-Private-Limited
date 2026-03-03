# APS Security Dashboard

A frontend implementation of a cybersecurity scanning dashboard based on the provided design reference.

The goal of this project was to recreate the UI accurately while keeping the code modular and easy to extend.

---

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Context API (for theme management)

---

## Features

- Login / Sign up page with full gradient background
- Dashboard with:
  - Severity stats overview
  - Searchable scan table
  - Dynamic progress bars
  - Status indicators
- Scan detail page with:
  - Circular progress indicator
  - Step tracker (Spidering → Reporting)
  - Live console simulation
  - Findings list with severity badges
- Dark / Light theme toggle

---

## Project Structure

The project is structured by responsibility:

- `layout/` → Sidebar, Header, AppLayout
- `ui/` → Reusable components (Button, StatusChip, SeverityBadge, ProgressBar)
- `dashboard/` → StatsBar, ScanTable
- `scan/` → Step tracker, Console panel, Findings
- `data/` → Mock data used to simulate scan results
- `context/` → Theme management

Components were separated to keep pages clean and reusable.

---

## Design Approach

I tried to match the reference design closely, especially:

- Gradient background on auth page
- Scan progress visualization
- Severity color coding
- Step tracking layout
- Clean spacing and alignment

The UI is fully responsive and works across different screen sizes.

---

Clone the repository:
https://github.com/Shahid7424/Fenrir-Security-Private-Limited
