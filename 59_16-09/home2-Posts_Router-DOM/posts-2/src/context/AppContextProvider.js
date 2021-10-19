import React from "react";
import getPosts from "../storage/data";
import { AppContext } from "./app-context";

export default class AppContextProvider extends React.Component{
    state={
        posts:getPosts()
    }
}