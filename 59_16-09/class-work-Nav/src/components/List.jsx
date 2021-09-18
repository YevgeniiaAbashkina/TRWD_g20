import { Link, Route } from "react-router-dom";
import ViewListComponent from "./ViewListComponent";

const List =()=>{
    return(
        <div style={{display:"flex"}}>
            <ul style={{width: "30%"}}>
                <li><Link to="/list/1/hello">Item 1</Link></li>
                <li><Link to="/list/2/world">Item 2</Link></li>
                <li><Link to="/list/3/hi">Item 3</Link></li>
            </ul>
            <Route path="/list/:id/:title" component={ViewListComponent}/> 
        </div>
    )
}

export default List;

//<li><Link to={`/list/1/${user.id}/hello`}>Item 1</Link></li>