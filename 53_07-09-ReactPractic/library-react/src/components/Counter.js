import {useState} from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    
    const inc=()=>{
        if (count<10){
            setCount(count + 1)
        }

    }
    const dec=()=>{
        if (count>0)
        setCount(count -1)
    }


    return(
        <div className="counter">
            <h4>Add to cart: {count}</h4>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
        )
}

export default Counter;