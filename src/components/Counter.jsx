import React,{useContext} from "react";
import {CounterContext} from "../context/CounterContext"
const Counter=()=>{
    const counterContext=useContext(CounterContext)
    return(
        <div className="counter">
            <div className="incDec">
            <button onClick={()=>counterContext.setCount(counterContext.count+1)}>Increment</button>
            <button onClick={()=>counterContext.setCount(counterContext.count-1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter