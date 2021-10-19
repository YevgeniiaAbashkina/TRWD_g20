import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import AddBookForm from "./AddBookForm";
import BookInfo from "./BookInfo";

const Page=()=>{
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books"component={Books} />
            <Route path="/add_book"  component={AddBookForm} />
            <Route path="/book/:id"   exact component={BookInfo} />
        </Switch>
    )
}
export default Page;