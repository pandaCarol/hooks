import React, { useState, useEffect } from "react";

export default function WindowWidthReadJson () {
    const [resourcesType, setResourcesType] = useState("users");
    const [resourcesData, setResourceData] = useState([]);
    const [windowWidth, setWindowwidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourcesType}`)
            .then(response => response.json())
            .then(json => setResourceData(json))
        //console.dir(resourcesData[1]), need to check data type of json, ususlly it should be obj, 
        // we should use JSON.stringify(item) to transfer it to string
        window.addEventListener("resize", handelResize)

        // ** important to ummount !! 
        return () => {
            window.removeEventListener("resize", handelResize)
        }
    }, [resourcesType, windowWidth])

    const handelClick = (e) => {
        setResourcesType(e.target.textContent);
    }

    const handelResize = () => {
        setWindowwidth(window.innerWidth);
    }

    return(
        <>
            <div id = "useEffectFunc">
                <h2>useEffect</h2>
                <div>window width is:  <strong>{windowWidth}</strong></div><br />
                <span value = "jsonInfo">
                    <button onClick = {handelClick}>posts</button>
                    <button onClick = {handelClick}>users</button>
                    <button onClick = {handelClick}>comments</button>
                </span>
                <h5>{resourcesType}</h5>
                <div>
                    {resourcesData.map((item, index) => {
                        return <pre key={index}>{JSON.stringify(item)}</pre>
                    })}
                </div>
                
            </div>
            <hr></hr>
        </>
    )

}
    