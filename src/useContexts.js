import React from "react";
import FuncitonContextComponent from "./functionContextComponent";
import { ThemeProviders } from "./themeContexts";

export default function BgToggle() {

    return(
        <>
            <div id="useContextFunc">
                <ThemeProviders>
                    <FuncitonContextComponent />
                </ThemeProviders>
            </div>
            <hr></hr>
        </>
        
    )
}