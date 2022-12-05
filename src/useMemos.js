import React, { useState, useEffect, useMemo } from "react";

export default function CounterAndBgToggle() {
    const [num, setNums] = useState(0);
    const [dark, setDark] = useState(false);

    //point 1: for very expensive calculation use "useMemo" to avoid high spend
    //const doubledNum = slowfunction(num);
    const doubledNum = useMemo(() => slowfunction(num), [num]);

    //point 2: even there is no changing on themeColor when compononet has been updated, 
    //system also think the previous one and current one are not the same
    //so we could use useMemo() to reduce the runing time
    const themeColor = useMemo(() => {
        return{
            backgroundColor: dark ? "gray" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])
    
    
    /*const themeColor = {
        backgroundColor: dark ? "gray" : "white",
        color: dark ? "white" : "black"
    }*/

    //point3: use "useEffect" could check if the theme has been reupdate...(see the calculation spend)
    useEffect(() => {
        console.log("Theme has been changed!")
    }, [])

    /*useEffect(() => {
        console.log("Number has been changed!")
    }, [num])*/

    return (
        <>  
            <div id="useMemoFunc">
                <h2>useMemo</h2>
                <p>prerformance hooks -> 
                    jump to unnecessary calculation (esp. expensive calculation) when component has been fired</p> 
                <input type = "number" value={num} onChange = {e => parseInt(setNums(e.target.value))}></input>
                <button onClick={() => setDark(preColor => !preColor)}>background change</button>
                <pre style={themeColor}>
                    <p>The double results is: </p>
                    <span><big><strong>{doubledNum}</strong></big></span>
                </pre>
                
            </div>
            <hr></hr>
        </>
    )
}

function slowfunction(val) {
    console.log("start slow function");
    for(let i = 1; i<1000000000; i++) {}
    return val * 2
}