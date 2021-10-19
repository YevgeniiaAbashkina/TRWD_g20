import TodoList from './components/TodoList';
import '../src/css/App.css';
//import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
