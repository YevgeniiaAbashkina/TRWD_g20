import './App.css';
import Counter from './components/Counter';
import PostPage from './components/posts/PostPage';
import PlaceHolderPosts from './components/posts/PlaceHolderPosts';


function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <PostPage/>
      <hr/>
      <PlaceHolderPosts/>
    </div>
  );
}

export default App;
