import { useState } from "react";
import "./App.css";
function App() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails(function (prevData) {
      return { ...prevData, [name]: value };
    });
  };
  const [show, setShow] = useState(false);
  function showData() {
    setShow(true);
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={inputHandler}
          placeholder="enter name"
        />
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={inputHandler}
          placeholder="enter email"
          style={{ margin: "10px 0px" }}
        />
        <input
          type="number"
          name="mobileNumber"
          value={userDetails.mobileNumber}
          onChange={inputHandler}
          placeholder="enter mobile number"
        />

        <button onClick={showData} style={{ margin: "10px 0px" }}>
          Submit
        </button>
        {show && (
          <>
            <h2>Name:{userDetails.name} </h2>
            <p>Email: {userDetails.email}</p>
            <p>Mobile Number: {userDetails.mobileNumber}</p>
          </>
        )}
      </div>
    </>
  );
}
export default App;
