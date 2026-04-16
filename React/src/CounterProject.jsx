import { useState } from "react"
function CounterProject() {
    const[initial, setInitial] = useState()
    const[val, setVal] = useState(10);

  return (
    <div>
        <h2>Value : {val}</h2>
        <button onClick={()=>{setVal(val+5)}}>Add 5</button>
        <button onClick={()=>{setVal(val-5)}}>Subtract 5</button>
        <label>Enter the value to add : </label>
        <input onChange = {(e)=>{
            setInitial(Number(e.target.value));
        }} type = "text" placeholder='Enter Number....'></input> 
        <button onClick = {()=>{
            setVal(initial + val);
        }}>Set</button>
    </div>
  )
}

export default CounterProject