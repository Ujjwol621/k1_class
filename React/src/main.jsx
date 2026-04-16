import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import InputData from "./InputData.jsx";
import CounterProject from "./CounterProject.jsx";


createRoot(document.getElementById("root")).render(
  <div>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <InputData /> */}
    <CounterProject/>
  </div>,
);
