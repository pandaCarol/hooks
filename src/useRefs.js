import React, { useState, useEffect, useRef } from "react";

/*
function TextInptWithFocusButton() {
    const inputEl = useRef(null);

    const onClick = ()=> {
        inputEl.current.focus();
        console.log("focus");
    }

    const toSubmit =() => {
        console.log(inputEl.current.value);
    }


    return(
        <div>
            <label htmlFor="message"> </label>
            <input ref={inputEl} type="text" id="message"/>
            <button onClick={onClick}> focus the input</button>
            <button onClick={toSubmit}> submit </button>
        </div>
    );
}
*/

function FormTest() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handelOnClick = (e) => {
        alert(emailRef.current.value + "has been submitted with the following password" + passwordRef.current.value);

        //The preventDefault() method cancels the event if it is cancelable, 
        //meaning that the default action that belongs to the event will not occur.
        //For example, Clicking on a "Submit" button, prevent it from submitting a form
        //or Clicking on a link, prevent the link from following the URL
        e.prevenDefault();
        console.log({
            email: emailRef.current.value, 
            password: passwordRef.current.value,       
        })
    };

    return(
        <div value="emailPasswordInput">
            <h5>2. Email and password updating</h5>
           <form>
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="text" id="email" />
                <label htmlFor="password"> Password</label>
                <input ref={passwordRef} type="password" id="password"/>
                <button onClick={handelOnClick}> submit </button>
            </form> 
        </div>
        
    );
}

function OnFocusRef () {
    const [inputInfo, setInputinfo] = useState("");
    const focusRef = useRef();
    const previousRef = useRef();

    useEffect(() => {
        previousRef.current = inputInfo;
    }, [inputInfo])

    function handelClick(e) {
        focusRef.current.focus();
        //focuseRef.current.value() is wrong, because it is not a function !!
        //in ".placeholder" to initial tipps
        focusRef.current.placeholder = "Please input some info...";
    }

    /*
    function handelTouchStart(e) {
        const cur = inputInfo === "Please input some info..." ? "" : e.target.value;
        setInputinfo(cur);
    }*/

    function handelChange(e) {
        setInputinfo(e.target.value);
    }

    return (
        <div value="onFousefunc">
            <h5>1. on fouse:</h5>
            <input ref={focusRef} type="text" value={inputInfo} onChange={handelChange}></input>
            <button onClick={handelClick}>focus on text input</button>
            <pre>The currrent input is {inputInfo}, and previous input is {previousRef.current}</pre>
        </div>
    )
}


export default function FocusSavingPreviousInfo() {
    return (
        <>
            <div id="useRefFunc">
                <h2>useRef</h2>
                <OnFocusRef />
                <FormTest />
            </div>
            <hr></hr>
        </>
    )
};