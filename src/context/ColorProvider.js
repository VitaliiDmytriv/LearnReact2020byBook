import { createContext, useState } from "react";
import colorData from "../data/color-data.json";
import { v4 } from "uuid";

export const ColorContext = createContext();

function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color,
            },
        ];
        setColors(newColors);
    };

    const rateColor = (id, rating) => {
        const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
    };

    const removeColor = (id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
    };

    return (
        <ColorContext.Provider
            value={{ colors, addColor, rateColor, removeColor }}
        >
            {children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;
