import React from "react";
import { UseThemeContext, UseThemeUpdate } from "./themeContexts"; 

export default function FuncitonContextComponent () {
    const darkTheme = UseThemeContext();
    const toggleTheme = UseThemeUpdate();

    const themeStyle = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        width: "80%", 
        height: "360px"
    }

    return(
        <div style={themeStyle} value={darkTheme}>
            <h2>useContext</h2>
            <div className="toggle">
                <button onClick={toggleTheme}></button>
                <button className="off"></button>
                <button className="on"></button>
            </div>
            
            {/*<div>Hello, current backgrond is {darkTheme ? "dark" : "light"}</div> */}
        </div>
    )
}