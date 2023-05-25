import { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData);

  const onRemove = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const onRating = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const onNewColor = (title, color) => {
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

  return (
    <>
      <ColorList
        colors={colors}
        onRemoveColor={onRemove}
        onRateColor={onRating}
      />
      <AddColorForm onNewColor={onNewColor} />
    </>
  );
}

export default App;
