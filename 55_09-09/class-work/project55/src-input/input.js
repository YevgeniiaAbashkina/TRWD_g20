import React from "react";

export default class Input extends React.Component{

    state={
        input:""
    }

    buttonClickHandler=()=>{
        //console.log(document.querySelector("input").value);
        console.log(this.state.input);
        this.setState({...this.state, input:""})
        //document.querySelector("input").value="";
        
    } 
    
    inputHandler=(event)=>{
        this.setState({...this.state, input: event.target.value});
        console.log(this.state.input)
    }

    render(){
        return(
            <>
            <input
                type="text"
                placeholder="some text"
                value={this.state.input}//full-control
                onChange={this.inputHandler}
                onKeyDown={(event)=>{
                    if(event.key === "Enter"){
                        console.log(this.state.input)
                        this.setState({...this.state, input:""})
                    }
                }}
            />
            <button onClick={this.buttonClickHandler}>send</button>
            </>
        )
    }
}