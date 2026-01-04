import React from "react";

function TextInput({ setText }) {
  function inputhandle(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input
        className="px-5 py-3 border-2 rounded-xl shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        type="text"
        placeholder="Enter text"
        onChange={inputhandle}
      />
    </div>
  );
}

export default TextInput;
