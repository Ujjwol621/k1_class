import { useContext } from "react";
import { ValueContext } from "./context/ValueProvider";
function Box3() {
  const fullName = useContext(ValueContext);
  console.log(fullName);
  return <div>Box3: {fullName}</div>;
}

export default Box3;
