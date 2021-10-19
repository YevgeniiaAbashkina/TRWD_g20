export const getAlbums=()=>{
    return JSON.parse(localStorage.getItem("albums")) ?? [] // || []
}

export const setAlbumsToLocalStorage=(albums)=>{
    localStorage.setItem("albums", JSON.stringify(albums))
}

export const setCurrentAlbumToLocalStorage=(id)=>{
    localStorage.setItem("currentAlbumId", JSON.stringify(id)) 
}

export const getCurrentAlbumId=()=>{
    return JSON.parse(localStorage.getItem("currentAlbumId"))
}

export const resetCurrentAlbum=()=>{
    localStorage.removeItem("currentAlbumId")
}