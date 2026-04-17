import { useState } from "react";
import "./CounterProject.css";
function CounterProject() {
  const [initial, setInitial] = useState("");
  const [val, setVal] = useState(10);

  return (
    <div class="container">
      <h1 class="title">React Counter</h1>
      <div class="card">
        <h2>Value : {val}</h2>
        <button
          class="reset-btn"
          onClick={() => {
            setVal(0);
          }}
        >
          Reset
        </button>
        <div class="btn-container">
          <button
            class="btn"
            onClick={() => {
              setVal(val + 5);
            }}
          >
            Add 5
          </button>
          <button
            class="btn"
            onClick={() => {
              setVal(val - 5);
            }}
          >
            Subtract 5
          </button>
        </div>
        <input
          class="input"
          value={initial}
          onChange={(e) => {
            setInitial(Number(e.target.value));
          }}
          type="text"
          placeholder="Enter Number to add"
        ></input>
        <button
          class="btn"
          onClick={() => {
            setVal(initial + val);
            setInitial("");
          }}
        >
          Set
        </button>
      </div>
    </div>
  );
}

export default CounterProject;
