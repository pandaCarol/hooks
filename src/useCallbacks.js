import React, {useState, useCallback, useEffect} from "react";

function OutputList({ getContents }) {
    const [listItem, setListitem] = useState([]);

    useEffect(() => {
        setListitem(getContents());
        console.dir(listItem);
    }, [getContents]);
 
    return listItem.map((item, index) => <div key={index}> {item} </div>)
}

export default function CallbackComponent () {
    const [num, setNum] = useState("");
    const [bgLight, setBgLight] = useState(true);


    //!!!import the different between useMemo and useCallback
    // useMemo => return the valu of that function;
    // useCallback => it takes a function but that is actually and return this function
    const getNum = useCallback((num) => {
        return [Number(num)-1, Number(num), Number(num)+1];
    }, [num]);

    const bgStyle = {
        color: bgLight ? "rgb(62, 61, 53)" : "rgb(245, 244, 236)" ,
        backgroundColor: bgLight ? "rgb(245, 244, 236)" : "rgb(62, 61, 53)",
    }

    return(
        <>
            <div value = "useCallbackFunc" style={bgStyle}>
                <input type={"number"} value={num} placeholder={"please input a number"} onChange={e => setNum(e.target.value)}></input>
                <button onClick={() => setBgLight(preBg => !preBg)}>Toggle background to {bgLight ? "dark" : "light"} theme</button>
                <OutputList getContents={getNum}/>
            </div>
            <hr></hr>
        </>
    )
}

