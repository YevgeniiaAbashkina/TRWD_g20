import React, {useContext} from "react";
import { CategorieContext } from "./Main";

const Category= ({category})=>{
    const context=useContext(CategorieContext)
    
    return(
        <div className= "col-12 col-sm-4 col-md-3">
            <div className="card my-2">
                <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory}/>
                    <div className="card-body">
                        <button 
                            type="button" className="btn btn-secondary my-1 w-100 card-title"
                            onClick={()=>{
                                context.changeCategorie(category.strCategory)
                            }}>{category.strCategory}
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Category;
