import React from "react"

export default class SearchInput extends React.Component{

    state={
        input:"",
        message: null
    }
        
    render(){
        return(
            <>
                <div className="navbar-collapse mb-4">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search  your food category or use the selection below..." aria-label="Search"                     
                        />
                        <button className="btn btn-outline-secondary" type="submit"
                        >Search</button>
                    </form>
                </div>
            </>    
            )
    }
    
}


