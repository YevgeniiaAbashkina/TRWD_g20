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
			.then(data =>  { this.setState({ ...this.state,  countries: [...data.meals] })})
			.catch((error) => {
				this.setState({ ...this.state, error: error.message })
				})
	}

    renderСategories(){
        return(
            <>
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
