import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export const CounterContext = createContext();
const initialState = {
  val: 0,
};
const counterReducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "increment":
      toast.success("🦄 1 Added Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return { val: state.val + 1 };
    case "decrement":
      return { val: state.val - 1 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
