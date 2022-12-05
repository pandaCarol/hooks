
import React, { useRef } from "react";
import FormInput from "./child";


const Fahter = ()=> {
    const oneRef = useRef(null);
    const two = null;

    const onChange = (e) => {
        oneRef.current.focus();
    }

    const onSubmit =(e) => {
        let two = (oneRef.current.value) *2
        e.preventDefault();
        console.log(oneRef.current.value, two);
        return two;
    }
    

    return(
        <div>
            <FormInput  
                name = "1"
                value = {oneRef}
                onChange = {onChange}
                onSubmit = {onSubmit}
            />
            <FormInput 
                name="2" 
                value={two}
            />  
        </div>
    );
}

/*
function handelChange(v) {
    setCount(v*2);
};
*/

export default Fahter;