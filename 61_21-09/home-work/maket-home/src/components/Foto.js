import { useState, useContext } from "react";
import { AppContext } from "./App";


const Foto=({foto})=>{
    return(
        <div>
            <p>{foto.title}</p>
            <p>{foto.image}</p>
        </div>
        
    )
}

export default Foto;