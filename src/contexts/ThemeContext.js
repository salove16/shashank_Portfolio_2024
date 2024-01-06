// import React, { createContext, useState } from 'react'

// import { themeData } from '../data/themeData'

// export const ThemeContext = createContext()

// function ThemeContextProvider(props) {
//     // eslint-disable-next-line
//     const [theme, setTheme] = useState(themeData.theme)
//     const [drawerOpen, setDrawerOpen] = useState(false)

//     const setHandleDrawer = () => {
//         setDrawerOpen(!drawerOpen)
//     }



//     const value = { theme, drawerOpen, setHandleDrawer }
//     return (
//         <ThemeContext.Provider value={value}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }


// export default ThemeContextProvider


import React, { createContext, useState } from "react";
import { themeData } from "../data/themeData";
export const ThemeContext = createContext();
function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData.theme_1);
  const [toggle, setToggle] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    handleTheme();
  };
  const handleTheme = () => {
    if (theme == themeData.theme_1) {
      setTheme(themeData.theme_2);
    } else {
      setTheme(themeData.theme_1);
    }
  };
  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const value = { theme, drawerOpen, setHandleDrawer, toggle, handleToggle };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;