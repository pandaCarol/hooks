import React, {useState, useCallback, useEffect} from "react";

function OutputList({ getContents }) {
    const [listItem, setListitem] = useState([]);

    useEffect(() => {
        setListitem(getContents());
        console.dir(listItem);
        console.dir(getContents());
    }, [getContents]);
 
    return listItem.map((item, index) => isNaN(item) ? <div key={index}>""</div> : <div key={index}> {item} </div>)
}

export default function CallbackComponent () {
    //if put useState() empty, system will pop up a warning that "a component is changing an uncontrolled input to be controlled."
    //best way to solve this issue: def a type of data on this useState, e.g. useState(0)
    const [num, setNum] = useState();
    const [bgLight, setBgLight] = useState(true);

    //!!!import the different between useMemo and useCallback
    // useMemo => return the valu of that function;
    // useCallback => it takes a function but that is actually and return this function
    const getNum = useCallback(() => {
        return [Number(num)-1, Number(num), Number(num)+1];
    }, [num]);

    const bgStyle = {
        color: bgLight ? "rgb(62, 61, 53)" : "rgb(245, 244, 236)" ,
        backgroundColor: bgLight ? "rgb(245, 244, 236)" : "rgb(62, 61, 53)",
    }

    return(
        <>
            <div value = "useCallbackFunc" style={bgStyle}>
                <h2>useCallback</h2>
                <p>The different between useCallback and useMemo</p>
                <ul>
                    <li>useMemo -> return the value of that function </li>
                    <li>useCallback -> it takes a function but that is actually and return this function</li>
                </ul>
                <pre>e.g.</pre>
                <input type={"number"} value={num} placeholder={"please input a number"} onChange={e => setNum(e.target.value)}></input>
                <button onClick={() => setBgLight(preBg => !preBg)}>Toggle background to {bgLight ? "dark" : "light"} theme</button>
                <OutputList getContents={getNum}/>
            </div>
            <hr></hr>
        </>
    )
}

