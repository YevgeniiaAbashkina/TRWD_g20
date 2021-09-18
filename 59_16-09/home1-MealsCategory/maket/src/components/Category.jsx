import React, {useContext} from "react";
import { CategorieContext } from "./Main";

const Category= ({category})=>{
    const context=useContext(CategorieContext)
    return(
        <div className= "col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory}/>
                    <div className="card-body">
                        <h5 className="card-title">{category.strCategory}</h5>
                        <p className="card-text">{category.strCategoryDescription}</p>
                        <button type="button" className="btn btn-outline-primary my-1 w-100"
                        onClick={()=>{
                            context.changeCategorie(category.strCategory)
                        }}>{category.strCategory}</button>
                    </div>
            </div>
        </div>
    )
}

export default Category;


/* /* <button type="button"
                className="btn btn-outline-primary my-1 w-100"
                onClick={()=>{
                    context.changeCountry(country.strArea)
                }}>
                    {country.strArea}
            </button> */