import { useContext } from "react";
import { ValueContext } from "../context/valueProvider";

export const useValue = () => useContext(ValueContext);
