import Navigation from './components/AppComponents/Navigation';
import Page from './components/AppComponents/Page';
import './css/App.css';
import {connect} from "react-redux";
import Loader from "./components/AppComponents/Loader";

function App({isLoading}) {
  return (
    <div className="App">
      <Navigation/>
      <Page/>
      {isLoading && <Loader/>}
    </div>
  );
}

const mapStateToProps=({AppReducer})=>{
  return{
    isLoading: AppReducer.isLoading
  }
}

export default connect(mapStateToProps)(App);
