import React from "react";

function Popup({ popup, setPopup, title, description }) {
  return (
    <div>
      {popup && (
        <div className="flex justify-center items-center w-screen h-screen bg-black/50 absolute top-0 left-0">
          <button
            onClick={function () {
              return setPopup(false);
            }}
            className="absolute top-4 right-4 bg-red-700"
          >
            Close
          </button>
          <div className="flex justify-center items-center flex-col gap-5 w-full h-full max-w-120 max-h-70 bg-[#242424] rounded-2xl">
            <h1 className="text-2xl">⚠️ Confirm {description}</h1>
            <p className="text-xl my-3">
              Are you sure you want to {title} this?
            </p>
            <div className="flex gap-5 ">
              <button className="bg-[tomato]">Yes</button>
              <button className="bg-green-500">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
