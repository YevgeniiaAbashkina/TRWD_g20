import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import AddBook from "./AddBook";
import About from "./About";

const Page=()=>{
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/books" exact component={Books}/>
            <Route path="/books/:id" component={About}/> 
            <Route path="/add_book" exact component={AddBook}/>
        </Switch>
    )
}

export default Page;