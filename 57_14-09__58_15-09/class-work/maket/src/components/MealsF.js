import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import Error from "./Error";
import Meal from "./Meal";
import FoodApi from "../store/data";

const MealsF=({country})=>{

    const [loading, setLoading] = useState(true);
    const [meals, setMeals]=useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        
        //this.setState({...this.state, loading:true, error: null})
        setLoading(true);
        setError(null)
        FoodApi.getMealsByCountry(country)
        .then(data=>{
            console.log(data)
            setTimeout(()=>{
                setLoading(false);
                setMeals(data.meals)
                /* this.setState({
                    ...this.state,
                    loading: false,
                    meals:[...data.meals] */
                
            }, 1500)
        })
        .catch((error)=>{
            setLoading(false);
            setError(error.message)
            /* this.setState({
                ...this.state, 
                loading: false,
                error: error.message
            }) */
        })
    },[country])


    /* state={
        loading: true,
        meals:[],
        error: null
    } */

    /* constructor(props){
        super(props)
    } */

    const renderMeals=()=>{
        return loading && !error ? <Loader/> : error ? <Error message={error}/> : 
        meals.map(meal => <Meal key={meal.idMeal} meal={meal}/>)
    }

    /* componentDidMount(){
        this.componentChangeCountry(this.props.country)
        console.log("kuku")
    }

    componentDidUpdate(prevProps){
        if(prevProps.country !== this.props.country)
        this.componentChangeCountry(this.props.country)
    } */

    /* componentChangeCountry(country){
        this.setState({...this.state, loading:true, error: null})
        FoodApi.getMealsByCountry(country)
        .then(data=>{
            console.log(data)
            setTimeout(()=>{
                this.setState({
                    ...this.state,
                    loading: false,
                    meals:[...data.meals]
                })
            }, 1000)
        })
        .catch((error)=>{
            this.setState({
                ...this.state, 
                loading: false,
                error: error.message
            })
        })
    } */   
        return(
            <div className="row">
                {renderMeals()}
            </div>
        )
}

export default MealsF;