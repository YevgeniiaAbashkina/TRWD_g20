
export const getBooks=()=>{
    return JSON.parse(localStorage.getItem("books")) ?? []
}

export const getBookById=()=>{
    return JSON.parse(localStorage.getItem("id"))
}

export const setBooksToLocalStorage=(books)=>{
    localStorage.setItem("books", JSON.stringify(books))
}

