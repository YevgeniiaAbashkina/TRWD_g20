export const getFotos=()=>{
    return JSON.parse(localStorage.getItem("fotos")) ?? [] // || []
}

export const setFotosToLocalStorage=(fotos)=>{
    localStorage.setItem("fotos", JSON.stringify(fotos))
}
