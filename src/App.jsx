/*
import React, { useState } from "react";
import colorData from './colororganizer/color-data.json'
import ColorList from './colororganizer/ColorList'
import AddColorForm from './colororganizer/AddColorForm'
import './App.css'
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData)

  const removeColor = (id) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map(color => {
      if (color.id === id) {
        return { ...color, rating }
      }
      return color;
    });
    setColors(newColors);
  }

  const createColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ];
    setColors(newColors);
  };

  return (
    <>
      <AddColorForm
        onNewColor={createColor}
      />
      <ColorList
        colors={colors}
        onRemove={removeColor}
        onRateColor={rateColor}
      />
    </>
  )
}
*/

import React, { useState } from "react";
import ColorList from "./colororganizer/ColorList";
import AddColorForm from "./colororganizer/AddColorForm";

function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

export default App
