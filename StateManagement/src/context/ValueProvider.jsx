import { createContext } from "react";
export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
    const fullName = "John Doe";
    return (
        <ValueContext.Provider value={fullName}>
            {children}
        </ValueContext.Provider>
    )
}