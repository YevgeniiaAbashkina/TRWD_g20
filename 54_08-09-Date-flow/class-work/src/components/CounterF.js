const CounterF = ({id, quantity, onIncClickHandler, onDecClickHandler}) =>{
    return(
            <div className = 'counter'>
                <h4>Quantity: {quantity} </h4>
                <button onClick = {()=>onDecClickHandler(id)}>-</button>
                <button onClick = {()=>onIncClickHandler(id)}>+</button>
            </div>
    )
}

export default CounterF;

/* const CounterF = ({min, max}) =>{
    const [count, setCount] = useState(min);

    const inc = ()=>{
        if(count < max)
        setCount(count + 1)
    }

    const dec=()=>{
        if(count > min)
        setCount(count - 1);
    }

    return(
            <div className = 'counter'>
                <h4>Quantity: {count} </h4>
                <button onClick = {inc}>+</button>
                <button onClick = {dec}>-</button>
            </div>
    )
}

export default CounterF; */

