import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Users from "./Users";
import Albums from "./Albums";
import Home from "./Home";
import Fotos from "./Fotos"
import React, {useState} from "react";
import {getUsers, getCurrentUserId, setCurrentUserLocalStorage, setUsersToLocalStorage, login, resetCurrentUser} from "../data/usersData";
import Registration from "./Registration";
import Login from "./Login";
import UserProfile from "./UserProfile";
import { getAlbums, getCurrentAlbumId, setAlbumsToLocalStorage, setCurrentAlbumToLocalStorage } from "../data/albumsData";
import { getFotos, setFotosToLocalStorage } from "../data/fotosData";

export const AppContext=React.createContext();

function App(){
  const [users, setUsers]=useState(getUsers());
  const [currentUser, setCurrentUser]=useState(getCurrentUserId());
  //const [error, setError]=useState(null);
  const [currentAlbum, setCurrentAlbum]=useState(getCurrentAlbumId());

  const addUser=(user)=>{
    const isUserExist=users.some(us=>us.email===user.email);
    if(!isUserExist){
    const newUser={...user, id: Date.now()};
    const newUsersArray=[...users, newUser];
    setUsers(newUsersArray);
    setUsersToLocalStorage(newUsersArray);
    setCurrentUser(newUser.id);
    setCurrentUserLocalStorage(newUser.id);
    return true;
    }
    return false;
  }

  const changeCurrentUser=(currentUser)=>{
    const  idUser= login(currentUser);
    if(idUser){
      setCurrentUser(idUser);
      setCurrentUserLocalStorage(idUser);
      return true;
    }else{
      return false;
    }
  }

  const getCurrentUser=()=>{
    return(
      users.find(user=> user.id === currentUser)
    )
  }

  const getUserNameById=(id)=>{
    return users.find(user=> +user.id===id).fName
  }

  const logout=()=>{
    setCurrentUser(null)
    resetCurrentUser()
  }

  const updateUser=(user)=>{
    const newUsers=[...users]
    const index=users.indexOf(getCurrentUser()) // users.findIndex(u=>u.id ===user.id)
    console.log(index)
    newUsers[index]={...user}   //newUsers[index]=user
    setUsersToLocalStorage(newUsers)
    
  }

  ////////////////////////albums////////////////////////////
  const [albums, setAlbums]=useState(getAlbums());

  const addNewAlbum=album=>{
    const newAlbum=[...albums, {...album}];
    setAlbums(newAlbum);
    setAlbumsToLocalStorage(newAlbum);
    setCurrentAlbumToLocalStorage(newAlbum);
  }

  const currentUserAlbums=()=>{
    return albums.filter(album => album.userId===currentUser)
  }


  ///////////////fotos////////////////////////////////////
  const [fotos, setFotos]=useState(getFotos());

  const addNewFotos=(foto)=>{
    const newFoto=[...fotos, {...foto, id: Date.now()}];
    setFotos(newFoto);
    setFotosToLocalStorage(newFoto);
  }

  const currentUserFotos=()=>{
    return fotos.filter(foto => foto.albumId===currentAlbum)
  }


  return(
    <AppContext.Provider value={{
      users, 
      addUser,
      changeCurrentUser,
      currentUser,
      getUserNameById,
      logout,
      getCurrentUser,
      updateUser,
      addNewAlbum,
      currentUserAlbums,
      addNewFotos,
      currentUserFotos
    }}>
      <Navigation/>
      <Switch>
        <Route path="/user/:id" component={UserProfile}/>
        <Route path="/users" component={Users}/>
        <Route path="/album/photos" component={Fotos}/>
        <Route path="/albums" component={Albums}/>
        <Route path="/registration" component={Registration}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </AppContext.Provider>
  )
}

export default App;
