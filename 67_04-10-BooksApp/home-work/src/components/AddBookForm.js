import Field from "./Field";
import Textarea from "./TextArea";
import { useForm, set } from "react-cool-form";
import * as yup from "yup";
import { connect } from "react-redux";
import { addBookToBooks } from "../store/booksReducer/BooksActionCreators";

const AddBookForm=({addBook, history})=>{
    
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
        title: yup.string().min(3).required(),
        author: yup.string().min(3).required(),
        cover: yup.string().url(),
        description: yup.string().required().min(20),
        pageQnt: yup.number().required().positive().integer()
        });

    const { form, use } = useForm({
            defaultValues: { 
                title: "", 
                author: "", 
                cover: "", 
                description:"", 
                pageQnt:""},
            validate: validateWithYup(yupSchema),
            onSubmit: (values,{reset}) => {
                console.log("onSubmit: ", values)
                addBook({...values, id: Date.now(), comments:[], rate: 0})
                reset()
                history.push(`/books`)
            }
        });
    const errors = use("errors", { errorWithTouched: true }); // Default is "false"
    
    return(
        <div className="container mt-5">
            <h2>Add your favorite book</h2>
            
            <form className="w-50 mx-auto mt-4 text-start" ref={form} noValidate>
                <Field 
                    autoFocus
                    label="Book title"
                    id="title"
                    name="title"
                    placeholder="type book title"
                   /*  required
                    minLength={2} */
                    error={errors.title}>
                    {/* <label htmlFor="title" className="form-label">Book title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="type book title" /> */}
                </Field>
                <Field 
                    label="Book author"
                    id="author"
                    name="author"
                    placeholder="type book author"
                   /*  required
                    minLength={2} */
                    error={errors.author}>
                    {/* <label htmlFor="author" className="form-label">Book author</label>
                    <input type="text" className="form-control" id="author" name="author" placeholder="type book author" /> */}
                </Field>
                <Field 
                    label="Book cover"
                    id="cover"
                    name="cover"
                    placeholder="type book cover"
                   /*  required */
                    error={errors.cover}>
                    {/* <label htmlFor="cover" className="form-label">Book cover</label>
                    <input type="cover" className="form-control" id="cover" name="cover" placeholder="type book cover link" /> */}
                </Field>
                <Field 
                    label="Page quantity"
                    id="pageQnt"
                    name="pageQnt"
                    placeholder="type book page quantity"
                    /* required */
                    error={errors.pageQnt}>
                    {/* <label htmlFor="pageQnt" className="form-label">Page quantity</label>
                    <input type="pageQnt" className="form-control" id="pageQnt" name="pageQnt" placeholder="type book page quantity" /> */}
                </Field>
                <Textarea
                    label="Book description"
                    id="description"
                    name="description"
                    placeholder="type book description"
                    required
                    error={errors.description}>
                </Textarea>
                <input type="submit" className="btn btn-primary  w-100 mb-3" />
            </form>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        addBook:(book)=>dispatch(addBookToBooks(book))
    }
}

export default connect(null, mapDispatchToProps)(AddBookForm);

/* {error ? <p className="text-danger p-0 m-0">{error}</p> : <p className="p-0 m-0" style={{opacity: '0'}}>Invisible :)</p>} */
