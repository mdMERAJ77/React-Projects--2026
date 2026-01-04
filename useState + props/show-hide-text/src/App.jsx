import { useState } from "react";
import ShowHideButton from "./components/ShowHideButton";
import ShowHideDisplay from "./components/ShowHideDisplay";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div style={{display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <ShowHideButton setShow={setShow} show={show}/>
        <ShowHideDisplay show={show}/>
      </div>
    </>
  );
}
export default App;