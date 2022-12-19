import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useReducer }from "react";

const UseContextWrapper = React.createContext();
const UseContextUpdating = React.createContext();

// should use function to call useContext instead of const
function UserContextState() {
    return useContext(UseContextWrapper)
}

function UserContextUpdating () {
    return useContext(UseContextUpdating)
}

const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

function reducer(state, action) {
    switch(action.type) {
        case ACTION.INCREMENT: 
            return {counter: state.counter + 1};
        case ACTION.DECREMENT:
            return {counter: state.counter -1};
        default:
            return state;
    }
}

/*
function UseContextComponent({children}) {
    
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    function reducer(state, action) {
        switch(action.type) {
            case ACTION.INCREMENT: 
                return {counter: state.counter + 1};
            case ACTION.DECREMENT:
                return {counter: state.counter -1};
            default:
                return state;
        }
    }

    return (
        <UseContextWrapper.Provider value = {}>
            <UseContextUpdating.Provider value={}>
                {children}
            </UseContextUpdating.Provider>
        </UseContextWrapper.Provider>
    ) 
}
*/

export default function UseReducerPortions() {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    function increment() {
        return dispatch({ type: "increment" })
    }

    function decrement() {
        return dispatch({ type: "decrement" })
    }

    return (
        <>
            <div value = "useReducerFunc">
                <h2>useReducer</h2>
                <h5>use "useReducer" to build a counter</h5>
                <div className="counter">
                <span>
                    <button onClick={decrement}>-</button>
                        {state.counter}
                    <button onClick={increment}>+</button>
                </span>
        </div>
            </div>
            <hr></hr>
        </> 
    )
}
