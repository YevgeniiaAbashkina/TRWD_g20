

export default function BookFullInfo({book:{title, author,yearIssue,genre,cover},closeClickHandler}){
    return(
        <div className = 'full-info'>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, year of issue: {yearIssue}</p>
            <img src={cover}  alt = {title}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis delectus consequatur. Distinctio perspiciatis ad earum, in animi nulla saepe quam esse soluta adipisci numquam eum maxime reiciendis quibusdam iure delectus vitae at. Quo, rerum tenetur. A nobis labore commodi quibusdam dolores vero, earum doloribus in cupiditate excepturi dicta quos.</p>
            <button onClick={closeClickHandler}>close</button>
        </div>
    )
}