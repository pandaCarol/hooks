import React, { useState }from "react"
import './App.css';

const a = 1;
function initialationNums() {
  console.log("run initial nums");
  return a;
}


export default function UseStateHooks() {

  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(() => initialationNums());
  const [cats, setCats] = useState({num: 0, color: "gray"});
  //const catNum = cats.num;
  //const catColor = cats.color;

  const handelCountbutton = (e) => {
    // *** Use console.dir can check the prop of e
    //console.dir(e.target.textContent);
    //const spanValue = document.querySelector("span").textContent;
    const isPlus = e.target.textContent.indexOf("+") > -1 ? 1 : -1;
    if(e.target.textContent.length === 1) {
      setCount(preCount => preCount + isPlus);
    } else {
      setCount(preCount => preCount + isPlus);
      setCount(preCount => preCount + isPlus);
    }
  }

  // initial function should be outside of main func, if def inside as const, system can't recognize it as function
  /*
  const initialationNums = () => {
    console.log("run initial nums");
    return 4;
  }*/

  const handelMultiplication = (e) => {
    setNums(preNum => preNum * 2)
  }

  const handelNumcatsClick = (e) => {
    const isIncrease  = e.target.textContent === "+" ? 1 : -1;
    setCats(preCats => {
      return {
        ...preCats, 
      num: preCats.num + isIncrease,
      color: preCats.num >= 4 ? "coffee white (no more inke)" : preCats.color
      }
    })
  }

  return(
    <>
      <div id = "useStateFunc">
        <h2>useState</h2>
        <div value = "funcInSetCount">
          <h5>1. for count button, use "setCount(preCount => preCount + 1)" instead of "setCount(count + 1)"</h5>
          <button onClick={handelCountbutton}>--</button>
          <button onClick={handelCountbutton}>-</button>
          <span value={count}> {count} </span>
          <button onClick={handelCountbutton}>+</button>
          <button onClick={handelCountbutton}>++</button>
        </div>
        <div value = "initialUseState">
          <h5>2. useState initial"</h5>
          <span> {nums} </span>
          <button onClick={handelMultiplication}>x2</button>
        </div>
        <div value = "stateAsObj">
          <h5>3. update the state as obj: number and type of cats</h5>
          <button onClick={handelNumcatsClick}>-</button>
          <span>{cats.num} {cats.color}</span>
          <button onClick={handelNumcatsClick}>+</button>
          <span> cat(s)</span>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

