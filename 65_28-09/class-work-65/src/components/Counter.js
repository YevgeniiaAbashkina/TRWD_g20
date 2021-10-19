import { connect } from "react-redux";
import * as Actions from "./../store/counter/ActionCreater"

const Counter =({count, inc, dec, addNum, subNum, addAsync})=>{
    return(
        <>
        <h2>Counter:{count}</h2>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <br/>
        <button onClick={()=> addNum(10)}>add 10</button>
        <button onClick={()=> subNum(10)}>sub 10</button>
        <button onClick={addAsync}>add async</button>
        </>
    )
}

const mapStateToProps=({counterReducer})=>{
    return{
        count: counterReducer.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        inc: ()=>dispatch(Actions.incCount()),
        dec: ()=>dispatch(Actions.decCount()),
        addNum: num => dispatch(Actions.addNum(num)),
        subNum: num => dispatch(Actions.subNum(num)),
        addAsync: ()=>dispatch(Actions.incCounterAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


/* import { connect } from "react-redux";
import { counterActionType as Types } from "../store/counter/ActionType";

const Counter =({count, inc, dec, addNum, subNum})=>{
    return(
        <>
        <h2>Counter:{count}</h2>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <br/>
        <button onClick={()=> addNum(10)}>add 10</button>
        <button onClick={()=> subNum(10)}>sub 10</button>
        </>
    )
}

//const mapStateToProps=(state)=>{
    return{
        count: state.counter.count
    }
} 

const mapStateToProps=({counter})=>{
    return{
        count: counter.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        inc: ()=>dispatch({type: Types.inc}),
        dec: ()=>dispatch({type: Types.dec}),
        addNum: num => dispatch({type: Types.addNum, payload: {num}}),
        subNum: num => dispatch({type: Types.subNum, payload: {num}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) */