import React, { useState } from "react";

const Sidebar = () => {
  // State to manage the visibility of text in the sidebar
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col items-center ${expanded ? "w-1/4" : "w-1/12"}`}
    >
      {/* Icon for Notes */}
      <div
        className="my-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Your icon code here */}
        <span className="text-xl">📝</span>
        {expanded && <span className="ml-2">Notes</span>}
      </div>

      {/* Icon for Archive */}
      <div
        className="my-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Your icon code here */}
        <span className="text-xl">🗄️</span>
        {expanded && <span className="ml-2">Archive</span>}
      </div>

      {/* Icon for Trash */}
      <div
        className="my-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Your icon code here */}
        <span className="text-xl">🗑️</span>
        {expanded && <span className="ml-2">Trash</span>}
      </div>
    </div>
  );
};

export default Sidebar;
