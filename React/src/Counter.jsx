import { useState } from "react";
function Counter() {
  // hooks are used to manage state in functional components (inbuilt functions that allow us to use state and other React features in functional components)
  //   let val = 1;
  let [val, setVal] = useState(1); // useState is a hook that allows us to add state to functional components. It returns an array with two elements: the current state value and a function to update it.
  //   let increment = () => {
  //     setVal(val + 1);
  //   };
  return (
    <div>
      <h1>Counter Component</h1>
      <p>Value: {val}</p>
      <button
        onClick={() => {
          if (val < 10) {
            setVal(val + 1);
          }
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (val > 1) {
            setVal(val - 1);
          }
        }}
      >
        Decrement
      </button>
        <button
          onClick={() => {
            setVal(1);
          }}
        >
          Reset
        </button>
    </div>
  );
}

export default Counter;
