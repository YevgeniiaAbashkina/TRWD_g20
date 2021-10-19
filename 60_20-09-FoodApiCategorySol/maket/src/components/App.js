//import MyComponent from '../MyComponent';
import '../css/App.css';
import React, { useState } from 'react';
import Categories from './Categories';
import Meals from './Meals';
import { Switch,Route } from 'react-router-dom';
import MealDetails from './MealDatails';

export const CategoryContext=React.createContext()

const App =()=>{
 
    return (
    <Switch>
      <Route exact path="/" component={Categories}/>
      <Route exact path="/:category" component={Meals}/>
      <Route path="/:category/:idMeal" component={MealDetails}/>
    </Switch>
    )
  
}

export default App;


///without Router
/* export const CategoryContext=React.createContext()

const App =()=>{
  const [category, setCategory]=useState(null);

  const changeCategory=(category)=>{
     console.log(category)
  setCategory(category)
  }
 

 
    return (
    <>
    <CategoryContext.Provider value={{
      changeCategory, category
    }}>
      <div className="container my-5">
        <Categories />
      </div>
      </CategoryContext.Provider>
      <div className="container my-5">
        {category ? <Meals category={category}/> :null}
      </div>
    </>
    
    )
  
}

export default App; */

/* <button onClick={()=>this.setState({isShow : !this.state.isShow})}>hide</button>
      {this.state.isShow ? <MyComponent name="my component"/> : null} */