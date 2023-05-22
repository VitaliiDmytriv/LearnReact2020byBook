import { useState } from "react";
import ColorList from "./components/ColorList";
import colorData from "./data/color-data.json";
import AddColorForm from "./components/AddColorForm";

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
    console.log(title, color);
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
