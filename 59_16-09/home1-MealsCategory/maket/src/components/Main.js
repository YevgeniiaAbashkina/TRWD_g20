import React from 'react';
import Categories from './Categories';
//import Meals from './Meals';

export const CategorieContext=React.createContext()

class Main extends React.Component {
  state={
    //isShow:true
    currentCategorie:null
  } 

  changeCategorie=(category)=>{
    console.log(category)
    this.setState({...this.state, currentCategorie: category})
  }


  render() {
    return (
    <>
    <CategorieContext.Provider value={{
      changeCountry:this.changeCountry
    }}>
      <div className="container my-5">
        <Categories />
      </div>
      </CategorieContext.Provider>
      
    </>
    );
  }
  
}

export default Main;

/* <div className="container my-5">
        {this.state.currentCategorie ? <Meals category={this.state.currentCategorie}/> :null}
      </div> */