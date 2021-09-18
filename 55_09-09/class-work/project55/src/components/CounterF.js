import { useContext } from "react";
import { MyContext } from "./App";
//import { MyCnt } from "./AppF";
//with huk
const CounterF = ({id, quantity}) =>{
    const cnt=useContext(MyContext)
    return(
            <div className = 'counter'>
                <h4>Quantity: {quantity} </h4>
                <button onClick = {()=>cnt.onDecClickHandler(id)}>-</button>
                <button onClick = {()=>cnt.onIncClickHandler(id)}>+</button>
            </div>
            )
}

export default CounterF;

/* const CounterF = ({id, quantity}) =>{
    return(
        <MyContext.Consumer>
            {{onDecClickHandler, onIncClickHandler}=>{
                return(
                <div className = 'counter'>
                    <h4>Quantity: {quantity} </h4>
                    <button onClick = {()=>onDecClickHandler(id)}>-</button>
                    <button onClick = {()=>onIncClickHandler(id)}>+</button>
                </div>
                )
                }
            }
        </MyContext.Consumer> 
    )
}  */

////paspacovka
/* import { MyContext } from "./App";

const CounterF = ({id, quantity}) =>{
    return(
        <MyContext.Consumer>
            {cnt=>{
                //console.log(cnt.book_1_title)
                return(
                <div className = 'counter'>
                    <h4>Quantity: {quantity} </h4>
                    <button onClick = {()=>cnt.onDecClickHandler(id)}>-</button>
                    <button onClick = {()=>cnt.onIncClickHandler(id)}>+</button>
                </div>
                )
                }
            }
        </MyContext.Consumer> 
    )
} */
