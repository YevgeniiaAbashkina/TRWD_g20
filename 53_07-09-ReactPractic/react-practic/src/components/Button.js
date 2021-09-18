const Button=(props)=>{
    return(
        <button onClick={props.clickHandler}>click me</button>
    )
}

export default Button;



/* function clickHandler(e){
    console.log(e)
} *///                          -->version 2

//<button onClick={(e)=>console.log(e)}>click me</button> -->version 1