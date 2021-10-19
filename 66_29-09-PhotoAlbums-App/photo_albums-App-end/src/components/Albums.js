import { useContext } from 'react';
import { AppContext } from '../App';
import Album from './Album';
import { connect } from 'react-redux';

const Albums = ({match, users})=>{
    let {albums} = useContext(AppContext)
    

    const userId = +match.params.id;

    

    if(userId){
        albums = albums.filter(album => album.userId === userId)
    }

    return(
        <div className = 'container'>
            {users.length === 0 ? <span className="spinner-border mx-auto me-2" role="status" aria-hidden="true"></span> : <>
        <h1 className = 'text-center my-5'>{userId ? `Albums by ${findUserNameById(userId, users)}`:'All our albums'}</h1>
        <div className = "row row-cols-2 row-cols-md-4">
          {albums.map(album => <Album key = {album.id} album ={album} userName = {findUserNameById(album.userId, users)}/>)}
        </div> </>}        
    </div>

    )
}
const mapStateToProps=({usersReducer})=>{
    return{
        users: usersReducer.users
    }
}

const findUserNameById=(id, usersArray)=>{
    return usersArray.find(user=> user.id === id).fName
}


export default connect(mapStateToProps,null)(Albums);