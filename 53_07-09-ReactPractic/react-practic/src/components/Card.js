import "./../css/Card.css"
import Button from "./Button"
import Counter from "./CounterFunction";

export default function Card({title, subtitle, text, src}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{text ?? "unknown"}</p>
            <img src={src} alt={title}/>
            <Button clickHandler={clickHandler}/>
            <Counter/>
        </div>
    )
}

function clickHandler(e){
    console.log(e.target.parentNode);
    //const event=e.nativeEvent //syntetic --> native
    console.log(e.nativeEvent)
    e.target.parentNode.querySelector("img").classList.toggle("w100")
    
}

//export default function Card({title, subtitle, text="unknown"}-->version 1
//<p>{text ? text : "unknown"}</p> --->version 2

/* export default function Card(props){
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <h5>{props.subtitle}</h5>
            <p>{props.text}</p>
        </div>
    )
} */