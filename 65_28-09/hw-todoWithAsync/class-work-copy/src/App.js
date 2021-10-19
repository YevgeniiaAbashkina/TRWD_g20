import TodoList from './newComponents/TodoList';
import '../src/css/App.css';
import Header from './newComponents/Header';
import {connect} from "react-redux"
import Loader from './newComponents/Loader';

function App({isLoading}) {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <TodoList/>
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
