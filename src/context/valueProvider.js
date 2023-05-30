import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ValueContext = createContext();

export function ValueProvider({ children }) {
    const [value, dispatch] = useReducer(reducer, 0);

    const handleClick = (type) => {
        dispatch({ type: type });
    };

    return (
        <ValueContext.Provider value={{ value, handleClick }}>
            {children}
        </ValueContext.Provider>
    );
}
