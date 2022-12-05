import React, { useState, useContext } from "react";

const ThemeContextWrapper = React.createContext();
const ThemeToggel = React.createContext();

export function UseThemeContext() {
    return useContext(ThemeContextWrapper)
}

export function UseThemeUpdate() {
    return useContext(ThemeToggel)
}

export function ThemeProviders({children}) {
    const [dark, setDark] = useState(true);
    
    function handelClick () { 
        setDark(preDark => !preDark)
    }

    return(
        <ThemeContextWrapper.Provider value={dark}>
            <ThemeToggel.Provider value={handelClick}>
                {children}
            </ThemeToggel.Provider>
        </ThemeContextWrapper.Provider>
    )
}