import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ValueProvider } from "./context/ValueProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ValueProvider>
      <App />
    </ValueProvider>
  </>,
);
