import React from "react";

function CounterButtons({ setCount }) {
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function reset(){
    setCount(0)
  }
  return (
    <div>
        
      <button
        onClick={increment}
        style={{ padding: "8px 10px", marginRight: "20px", cursor: "pointer" }}
      >
        Increment
      </button>
      <button onClick={decrement} style={{ padding: "8px 10px", cursor: "pointer",marginRight: "20px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ padding: "8px 10px", cursor: "pointer" }}>
       Reset
      </button>
    </div>
  );
}

export default CounterButtons;
