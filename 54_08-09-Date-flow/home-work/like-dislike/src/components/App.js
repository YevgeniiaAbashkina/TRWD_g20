import { useState } from 'react';
import '../css/App.css';
import "../css/Title.css";
import "../index.css";
import PublicList from './PublicList';
import Title from './Title';
import {getPublics} from "../store/store"

const App=()=> {
  const [publics, setPublics]=useState(getPublics());

  const changeCounter=(id, isLike, isDislike)=>{
    const newPublics = [...publics];
    console.log(newPublics)
    const index = newPublics.findIndex(publication=>publication.id===id);
    if(index>=0){
      const publication={...newPublics[index]};
      if(isLike){
        console.log("islike")
        publication.like++
      }if(isDislike){
        console.log("dislike")
        publication.dislike++
      }
      newPublics[index]=publication;
      setPublics(newPublics)
    }
  }

  const clickingOnLike=(id)=>{
    changeCounter(id, true, false)
  }

  const clickingOnDislike=(id)=>{
    changeCounter(id, false, true)
  }

  return (
    <div className="App">
      <div className="header"></div>
      <div className="container" >
        <Title/>
      <PublicList publics={publics}
                  clickingOnLike={clickingOnLike}
                  clickingOnDislike={clickingOnDislike}/>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
