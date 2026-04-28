import { useContext} from "react";
import { CounterContext } from "./context/CounterProvider";

function Box3() {
  const { state, dispatch } = useContext(CounterContext);
  console.log(state.val);

  return (
    <div>
      <h1>This Is Counter App</h1>
      <h2>{state.val}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Box3;
