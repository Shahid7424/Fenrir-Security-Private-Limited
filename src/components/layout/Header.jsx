import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 h-13 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f]">
      
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <span>Scan</span>
        <span>/</span>
        <span>Private Assets</span>
        <span>/</span>
        <span className="text-teal-500">New Scan</span>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        
        <button className="px-4 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent">
          Export Report
        </button>

        <button style={{backgroundColor: '#ef4444'}} className="px-4 py-1.5 text-sm rounded-md text-white">
          Stop Scan
        </button>

      </div>
    </header>
  );
};

export default Header;