//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Book=({book})=>{
    const history=useHistory();
    return(
        <div className="col"> 
            <div className="card text-center h-100 p-1 m-2">
                <div className="card-body">
                    <img src={book.cover} className="card-img-top h-100" alt="..." />
                </div>
                    <h5 className="card-title">{book.title}</h5>
                    <button className ='btn btn-danger mb-3'
                    onClick={()=>
                    history.push(`/books/${book.id}`)}>Open description</button>
                    {/* <Link to = {`/books/${book.id}`}
                        className ='btn btn-danger mb-3' >To learn more</Link>  */}
            </div>
        </div>
    )
}

export default Book;