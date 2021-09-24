import { useContext} from "react";


import { AppContext } from "./App";
import { useHistory } from "react-router-dom";

const Album=({album})=>{
    const {currentAlbum}=useContext(AppContext);
    const history=useHistory();

    return(
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 m-2">
                <img src={album.cover} className="card-img-top" alt="..." /> 
            <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                {!currentAlbum && <>
                <button className="w-100 btn btn-warning"
                onClick={()=>history.push("/album/photos")}>add photo</button>
                </>}
            </div>
        </div>
    )
}

export default Album;