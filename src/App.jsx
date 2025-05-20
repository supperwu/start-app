import React, { useState } from "react";
import colorData from './colororganizer/color-data.json'
import ColorList from './colororganizer/ColorList'
import './App.css'

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <ColorList colors={colors} />
  )
}

export default App
