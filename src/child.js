import React, {useState, useEffect}from "react"



const FormInput = (props)=>{
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                {"child " + props.name + " value"}
                <input type="number" value={props.value} onChange={props.onChange}></input>
            </label>
            <button type="submit"> submit </button>
        </form>
    );
}


export default FormInput;