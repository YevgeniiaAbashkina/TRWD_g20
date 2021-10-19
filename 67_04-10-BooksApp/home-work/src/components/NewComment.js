import Field from "./Field";
import Textarea from "./TextArea";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";
import { connect } from "react-redux";
import { addBookToBooks, addCommentToBook } from "../store/booksReducer/BooksActionCreators";

const NewComment =({comment, book})=>{

    const validateWithYup = (schema) => async (values) => {
        let errors = {};

        try {
            await schema.validate(values, { abortEarly: false });
        } catch (yupError) {
            yupError.inner.forEach(({ path, message }) => set(errors, path, message));
        }

        return errors;
        };

    const yupSchema = yup.object().shape({
        name: yup.string().min(3).required(),
        text: yup.string().min(4).required(),
        });

    const { form, use } = useForm({
        defaultValues: { 
            name: "", 
            text: "",
            rate: 0}, 
            
        validate: validateWithYup(yupSchema),
        onSubmit: (values,{reset}) => {
            console.log("onSubmit: ", values)
            addComment({...values})
             //как отнести к книге rate????
            reset()
            
        }
    });
    const errors = use("errors", { errorWithTouched: true }); 

    return(
        <div className="card mt-3 bg-light ">
            <div className="card-body text-start">
                <div className="h4 card-title">New comment</div>
                    <form className="w-50 mx-auto mt-4 text-start" ref={form} noValidate>   
                        <div className="mb-3">
                            <Field 
                            autoFocus
                            label="Your name"
                            id="nameText"
                            name="name"
                            placeholder="type your name"
                            error={errors.title}>
                            </Field>
                        </div>    
                        <div className="mb-3">
                        <Textarea
                            label="Comment"
                            id="commentText"
                            name="text"
                            placeholder="type your comment"
                            required
                            error={errors.description}>
                        </Textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Note: </label>
                            <select className="form-select"
                                    aria-label="Default select example"
                                    name="rate"
                                    value={rate}
                                    
                            >
                                <option >Open this select menu</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="button" className="btn btn-sm btn-success"
                            >Add Comment</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        addComment:(comment)=>dispatch(addCommentToBook(comment)),
        addBook:(book)=>dispatch(addBookToBooks(book))
    }
}

export default connect(null, mapDispatchToProps)(NewComment)
