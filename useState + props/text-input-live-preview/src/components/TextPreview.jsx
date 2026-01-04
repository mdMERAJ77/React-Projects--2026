import React from "react";

function TextPreview({ text }) {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-white shadow-sm w-80 text-gray-700 font-medium">
      <span className="font-semibold mr-2">Live Preview:</span>{text}
    </div>
  );
}

export default TextPreview;
