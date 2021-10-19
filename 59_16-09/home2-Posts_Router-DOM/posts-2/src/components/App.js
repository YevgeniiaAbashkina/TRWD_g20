import React from "react";
import {Route, Switch} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import PostsComponent from "./PostsComponent";


export default function App(){

      return (
      <div className="App">
        <HeaderComponent/>
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/posts" component={PostsComponent}/>
          </Switch>
      </div>
    );
  }
