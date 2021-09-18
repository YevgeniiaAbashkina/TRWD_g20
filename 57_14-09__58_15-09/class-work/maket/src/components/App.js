//import MyComponent from '../MyComponent';
import '../css/App.css';
import React from 'react';
import Countries from './Countries';
import Meals from './MealsF';

export const CountryContext=React.createContext()

class App extends React.Component {
  state={
    //isShow:true
    currentCountry:null
  } 

  changeCountry=(country)=>{
    console.log(country)
    this.setState({...this.state, currentCountry: country})
  }


  render() {
    return (
    <>
    <CountryContext.Provider value={{
      changeCountry:this.changeCountry
    }}>
      <div className="container my-5">
        <Countries />
      </div>
      </CountryContext.Provider>
      <div className="container my-5">
        {this.state.currentCountry ? <Meals country={this.state.currentCountry}/> :null}
      </div>
    </>
    );
  }
  
}

export default App;

/* <button onClick={()=>this.setState({isShow : !this.state.isShow})}>hide</button>
      {this.state.isShow ? <MyComponent name="my component"/> : null} */