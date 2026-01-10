import React, { useState } from "react";
import Popup from "./components/Popup";

function App() {
  const [popupDelete, setPopupDelete] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center gap-3">
      {/**delete */}
      <button className="bg-red-700" onClick={() => setPopupDelete(true)}>
        Delete
      </button>
      <Popup
        popup={popupDelete}
        setPopup={setPopupDelete}
        title="delete"
        description="Delete"
      />

      {/**edit */}
      <button className="bg-green-500" onClick={() => setPopupEdit(true)}>
        Edit
      </button>
      <Popup
        popup={popupEdit}
        setPopup={setPopupEdit}
        title="Edit"
        description="Edit"
      />
    </div>
  );
}

export default App;
