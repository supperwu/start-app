import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import colors from "./colororganizer/color-data.json";

export const ColorContext = createContext();


createRoot(document.getElementById('root')).render(
   <ColorContext.Provider value={{ colors }}>
    <StrictMode>
      <App />
    </StrictMode>
  </ColorContext.Provider>
)
