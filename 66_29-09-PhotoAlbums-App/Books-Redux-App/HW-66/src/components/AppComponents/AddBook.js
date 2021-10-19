import { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../books_store/bookReducer/ActionCreator";


const AddBook=({add, history})=>{

    const [formData, setFormData]=useState({
        title:"",
        author:"",
        cover:"",
        description:"",
        pageQuantity:""
    })


    const changeFieldHandler = event=>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const submitHandler = event =>{
        event.preventDefault()
        if (!formData.title.trim() || !formData.description.trim() || !formData.cover) return
        else{
        } add(formData);
        history.push('/books');
    }

    return(
        <div className="container">
                <div className="w-50 mx-auto mt-5">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Book title</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="title"
                                    value = {formData.title} 
                                    onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="author"
                                    value = {formData.author} 
                                    onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Cover</label>
                            <input type="text" 
                                className="form-control" 
                                name="cover"
                                value = {formData.cover} 
                                onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" 
                                className="form-control" 
                                name="description" 
                                value = {formData.description}
                                onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group mb-2">
                            <label>Page Quantity</label>
                            <input type="number" 
                                className="form-control" 
                                name="pageQuantity"
                                value = {formData.pageQuantity} 
                                onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-danger w-100 text-dark mt-4"
                            >Add your book</button>
                        </div>
                    </form>
                </div>
            </div>
    )

}

const mapStateToProps=({BookReducer})=>{
    console.log(BookReducer.books)
    return{
        books: BookReducer.books

    }
}

const mapDispatchToProps=dispatch=>{
    return{
        add: (book)=> dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);