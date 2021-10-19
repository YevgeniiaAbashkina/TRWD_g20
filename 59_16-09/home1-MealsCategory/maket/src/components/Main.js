import React from 'react';
import Categories from './Categories';
import Meals from './Meals';
import MealsApi from "../store/data";
import SearchInput from './SearchInput';

export const CategorieContext=React.createContext()

class Main extends React.Component {
  state={
    
    currentCategorie: null
  } 

  changeCategorie=(category)=>{
    console.log(category)
    this.setState({...this.state, currentCategorie: category})
  }

  


  render() {
    return (
    <>
      <CategorieContext.Provider value={{
        changeCategorie:this.changeCategorie
      }}>
        <div className="container my-5">
          <SearchInput />
          <Categories />
        </div>
      </CategorieContext.Provider>
        <div className="container my-5">
          {this.state.currentCategorie ? 
          <Meals category={this.state.currentCategorie}/> :        
          null}
        </div>
    </>
    );
  }
  
}

export default Main;