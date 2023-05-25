import { useContext } from "react";
import { ColorContext } from "../context/ColorProvider";

export const useColors = () => useContext(ColorContext);
