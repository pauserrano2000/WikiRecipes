import React, {useState, useContext} from "react";

const ThemeContext = React.createContext({
  darkTheme: false,
  toggleHandler: () => {},
});

const ThemeContextProvider = (props) => {
    const [darkTheme,setDarkTheme] = useState(false)
    const toggleHandler = () => {
        setDarkTheme(prevState=>!prevState);
    }
    const contextValue = {
        darkTheme,
        toggleHandler
    }
    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}
//We will use this to connect our containers/components to the theme context
export const useDarkThemeContext = () => {
    return useContext(ThemeContext)
};

export default ThemeContextProvider;