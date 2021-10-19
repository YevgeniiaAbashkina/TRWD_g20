import React from "react";

import Error from "./Error";
import Category from "./Category";
import MealsApi from "../store/data";

export default class Categories extends React.Component{
    state={
        categories:[],
        error: null
    }

    componentDidMount() {
		MealsApi.getCategories()
			.then(data =>  { this.setState({ ...this.state,  categories: [...data.categories] })})
			.catch((error) => {
				this.setState({ ...this.state, error: error.message })
				})
                
	}

    renderСategories(){
        return(
            <>
            <h1 className="mb-4">Choose a category</h1>
                {this.state.error ? 
                <Error message={this.state.error} /> : 
                this.state.categories.map(category => 
                <Category key={category.idCategory} category={category}/>)}
            </>
        )
    }


    render(){
        return(
            <div className="row">
                {this.renderСategories()}
            </div>
        )
    }
}
