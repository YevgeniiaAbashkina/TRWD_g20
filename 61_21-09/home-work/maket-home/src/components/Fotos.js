import { useState, useContext } from "react";
import{AppContext} from "./App"
import Foto from "./Foto"


const Fotos=()=>{
    const {currentAlbum, currentUserFotos, addNewFotos}=useContext(AppContext);
    
    const [foto, setFotos]=useState({
        albumId: {currentAlbum},
        title:"",
        image:"",
        like:0,
        dislike:0
    })

    const changeFieldHandler=(event)=>{
        setFotos({...foto, [event.target.name]:event.target.value})
    }

    const userFotos=currentUserFotos()

    return(
        <div className="container text-center p-3 my-2">
            <h3>My photos of this albom</h3>
            <div className ='row mt-5'>
                {userFotos.map(foto=> <Foto key={foto.id} foto={foto} />)}
            </div>
            <button className="w-100 btn btn-warning"
                type="button"
                data-bs-toggle="modal" data-bs-target="#addFotoModal">
                add new photo</button>
                
            <div className="modal fade" id="addFotoModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add your photos to the album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type album title"
                                value={foto.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="cover"
                                placeholder="Type image src"
                                value={foto.image}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={()=> addNewFotos(foto)}
                                >
                                Add photos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

 export default Fotos;