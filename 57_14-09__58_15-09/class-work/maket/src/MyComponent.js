/* export default function MyComponent(){
    let title="Old title";

    (function(){
        setTimeout(()=>{
            title="New title";
            console.log("All done", title)
        },2000)
    })()//самовызывающаяся функция

    return(
        <h2>{title}</h2>
    )
} */


import React  from "react";

export default class MyComponent extends React.Component{
    state={
        title:"Old title",
        loading:true,
        todos:[]
    }

    constructor (props){
        super(props)
        console.log("constructor")
    }
//вызывается один раз после перезагрузки
    componentDidMount(){
        console.log("componentDidMount")
        setTimeout(()=>{
            //this.setState({title:"New title"})
            fetch("https://jsonplaceholder.typicode.com/todos").
            then(response=> response.json()).
            then(data=>this.setState({...this.state, loading: false, todos: [...data]}))
        },2000) 
        
    }

    static getDerivedStateFromProps(nextProps, nextState){
        console.log("getDerivedStateFromProps", nextProps, nextState);
        return nextState;
        //return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
        return prevState;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate", prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
   
    render(){
        console.log("Render")
        return(
            <>
        {this.state.loading ? 
        <div>loading...</div> :
        <ul>
            {this.state.todos.map((todo, index)=><li key={index}>{todo.title}</li>)}
        </ul>}
        </>
        )
    }
}