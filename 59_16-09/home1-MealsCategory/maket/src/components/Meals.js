import React from "react";
import Error from "./Error";
import MealsApi from "../store/data";
import Meal from "./Meal";

export default class Meals extends React.Component{
    state={
        meals:[],
        error: null
    }

    renderMeals(){
        const {meals, error}={...this.state}
        
        return error ? <Error message={error}/> : 
        meals.map(meal => <Meal key={meal.idMeal} meal={meal}/>)
    }

    componentDidMount(){
        this.componentChangeCategory(this.props.category)
    }

    componentDidUpdate(prevProps){
        if(prevProps.category !== this.props.category)
        this.componentChangeCategory(this.props.category)
    }

    componentChangeCategory(category){
        this.setState({...this.state, error: null})
        MealsApi.getMealsByCategorie(category)
        .then(data=>{
            console.log(data)
            
                this.setState({
                    ...this.state,
                    meals:[...data.meals]
                })
            
        })
        .catch((error)=>{
            this.setState({
                ...this.state, 
                error: error.message
            })
        })
    }
        


    render () {
        return(
            <div className="row">
                <h3 className="mb-4">Dishes in this category</h3>
                {this.renderMeals()}
            </div>
        )
    }
}