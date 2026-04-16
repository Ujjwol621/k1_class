import { useState } from "react";
function InputData() {
  const [name, setName] = useState("");
  const getData = () => {
    console.log(name);
  };
  return (
    <div>
      <label htmlFor="name">Name : </label>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />
      <br/>
      <button
        onClick={() => {
          getData();
        }}
      >
        Click
      </button>
    </div>
  );
}

export default InputData;
