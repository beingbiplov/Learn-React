import React from 'react'; 
import ChildComponent from './childComponent'
import { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

function ParentComponent() {
  return (
    <div>
        <h3>useEffect</h3>
        <ThemeContext.Provider value={themes.dark}>
        < ChildComponent />
        </ThemeContext.Provider>
    </div>
  );
}

export default ParentComponent;