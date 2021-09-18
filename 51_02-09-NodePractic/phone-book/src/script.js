import Contact from "./contact";
import renderAddContact from "./contactForm";
import renderContacts from "./contactList";
import renderHome from "./home";
import renderLogin from "./login";
import navigationView from "./navigation";
import Store from "./store";
import formValidation from "./validation";
import contactView from "./viewContact";

function main(){

    const root = document.querySelector('#root');

    const state={
        currentUser: null,
        location: null,
        contacts: []
    }

    setUp();

    function setUp(){
        const currentUser=Store.getCurrentUser(); //<-- email usera or nothing
        if(!currentUser){
            navigation("home");
            return
        }
        state.currentUser=currentUser;
        state.contacts=Store.getAllContacts(currentUser)//currentUser=email
        navigation("contacts");
    }

    function navigation(path) {
        if(path!==state.location){
            if(path ==="logout"){
                Store.logout();
                state.currentUser=null;
                state.contacts=[];
                state.location="home";
            }else{
                state.location=path;
            }
        }
        app(state.location, state.contacts);
    }

    function app(location, contacts){
        //const root = document.querySelector('#root');
        root.innerHTML="";
        root.append( //navigationView(isAuth, active, navClickHandler)
            navigationView(state.currentUser, location, navClickHandler)
        );
        root.append(document.createElement("hr"));
        const content = contentRender(location, contacts);
        root.append(content);
    }

    function navClickHandler(event){
        event.preventDefault();
        if (event.target.tagName === 'A') {
            navigation(event.target.getAttribute('href'));
        }
    }

    function contentRender(location, contacts){
        const div=document.createElement("div");
        switch(location){
            case "logout":
            case "home": {
                div.className="home";
                div.innerHTML=renderHome();
                break
            }
            case "login": {
                div.className="add-contact";
                div.innerHTML=renderLogin();
                div.querySelector("form").onsubmit = loginSubmitHandler;
                break
            }
            case "contacts":{
                div.className="contacts";
                div.innerHTML=renderContacts(contacts);
                div.querySelector(".list").onclick=contactClickHandler;
                break
            }
            case "add":{
                div.className="add-contact";
                div.innerHTML=renderAddContact();
                div.querySelector("form").onsubmit=addContactHandler;
                break
            }
        }
        return div;
    }

    function loginSubmitHandler(e){
        e.preventDefault();
        const form=e.target;//на событие подписана форма
        const email=form.login.value;
        const password=form.password.value;
        let regSuccess=true;
        if(email===""|| password===""){
            regSuccess=false;
            showMessage(regSuccess, "The data is uncomplete")
        }else{
            if(e.submitter.id =="login-btn"){
                try{
                    Store.login(email, password)
                }catch(err){
                    regSuccess =false;
                    showMessage(regSuccess, err.message)
                }finally{
                    form.reset();
                }
            }if(e.submitter.id === "registration-btn"){
                try{
                    Store.registration(email, password)
                }catch(error){
                    regSuccess=false;
                    showMessage(regSuccess, error.message)
                }
                finally{
                    form.reset()
                }
            }
        }
        if(regSuccess){
            state.currentUser=email;
            state.location="contacts";
            state.contacts=Store.getAllContacts(email);
            app(state.location, state.contacts);
        }
    }

    function addContactHandler(e){
        e.preventDefault();
        const form = e.target
        console.log(form.elements)
        if(!formValidation(form, showMessage)){
            const result=Store.addContact(state.currentUser, new Contact(
                form.name.value,
                form.phone.value,
                form.email.value,
                form.address.value,
                form.description.value
            ));
            if(result){
                showMessage(result, form.name.value);
                state.contacts=Store.getAllContacts(state.currentUser)
            }
        }
        form.reset()
    }

    function contactClickHandler(event) {
        let li = event.target;
        if (li.classList.contains('delete')) {
            Store.deleteContact(state.currentUser, li.dataset.index)
            state.contacts=Store.getAllContacts(state.currentUser);
            if(state.contacts.length===0){
                localStorage.removeItem(state.currentUser)
            }
            app(state.location, state.contacts)
            } else {
            if (li.tagName !== 'LI') {
                li = event.target.parentNode
            }
            root.querySelectorAll("li").forEach((item)=> item.classList.remove("item-active"));
            li.classList.add("item-active");
            const contact=state.contacts[li.dataset.index]
            document.querySelector(".contact-view").innerHTML=contactView(contact)
        }
    }

    function showMessage(formIsComplit, text){
        let div = root.querySelector('.alert');
        if(!div){
            div = document.createElement('div');
            root.querySelector(".add-contact").prepend(div)
        }
        div.className = `alert ${formIsComplit? "alert-success" : "alert-danger"} `;
        div.innerHTML = formIsComplit ? `Contact ${text} was added`: text
    }
}


main()