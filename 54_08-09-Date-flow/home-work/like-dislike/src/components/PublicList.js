import Public from "./Public";
import "../css/PublicList.css"

export default function PublicList({publics, clickingOnLike, clickingOnDislike}){
    return(
        <div className="public-list">
            {publics.map((publication)=>
            <Public
                key={publication.id}
                publication={publication}
                clickingOnDislike={clickingOnDislike}
                clickingOnLike={clickingOnLike}

            />)}
        </div>
    )
}