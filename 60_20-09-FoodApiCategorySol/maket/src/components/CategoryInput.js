import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const CategoryInput=()=>{
    const [input, setInput]=useState("");

    const history=useHistory();

    const optimateInput=(str)=>{
        return str.slice(0,1).toUpperCase()+str.slice(1)
    }

    const inputHandler=(event)=>{
        setInput(event.target.value)
    }

    return(
        <div className="input-group my-5">
            <input type="text" className="form-control"
                placeholder="type category"
                aria-describedby="search-btn"
                value = {input}
                onChange = {inputHandler}
            />
            <button className="btn btn-primary"
                    onClick = {()=>{                   
                        console.log(optimateInput(input));
                        history.push(`/${optimateInput(input)}`)
                        setInput('');
                    }}
                    id="search-btn"
            >search category</button>
        </div>
    )
}

export default CategoryInput;



/* import { useContext, useState } from "react";
import { CategoryContext } from "./App";


const CategoryInput=()=>{
    const [input, setInput]=useState("");

    const context=useContext(CategoryContext);

    const optimateInput=(str)=>{
        return str.slice(0,1).toUpperCase()+str.slice(1)
    }

    const inputHandler=(event)=>{
        setInput(event.target.value)
    }

    return(
        <div className="input-group my-5">
            <input type="text" className="form-control"
                placeholder="type category"
                aria-describedby="search-btn"
                value = {input}
                onChange = {inputHandler}
            />
            <button className="btn btn-primary"
                    onClick = {()=>{                   
                        console.log(optimateInput(input));
                        context.changeCategory(optimateInput(input));
                        setInput('');
                    }}
                    id="search-btn"
            >search category</button>
        </div>
    )
}

export default CategoryInput; */