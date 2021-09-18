 import {Link, NavLink, Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import List from "./List";

/* function App() {
  return (
    <div className="App">
      <ul className="App-nav">
          <li> <a href="/"> Home</a> </li>
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>
      </ul>
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <Navigation/>
      <hr/>
      <Switch>
        
        <Route path="/About" component={About}/>
        <Route path="/Contacts" component={Contacts}/>
        <Route path="/list" component={List}/> 
        <Route  path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

      /* <Route exact path="/" render={()=><h2>Home page</h2>}/>
      <Route path="/About" render={()=><About companyName={"some company"}/>}/>
      <Route path="/Contacts" render={()=><Contacts/>}/> */