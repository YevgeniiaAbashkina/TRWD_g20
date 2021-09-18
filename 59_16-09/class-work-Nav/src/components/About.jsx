const About=(props)=>{
    console.log(props)
    return (
        <>
            <h2>About component</h2>
            <button onClick={()=>props.history.push("/")}>Go  to home</button>
            <button onClick={()=>props.history.push("/contacts")}>Go  to Contacts</button>
        </>    
    )
}

export default About;