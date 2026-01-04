import { useState } from "react";
import CounterButtons from "./components/CounterButtons";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "20px",
        width: "full",
        height: "500px",
      }}
    >
      <CounterButtons setCount={setCount}/>
      <CounterDisplay count={count}/>
    </div>
  );
}
export default App;
