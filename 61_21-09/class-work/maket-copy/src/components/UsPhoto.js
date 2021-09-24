const UsPhoto=({photo})=>{
    return(
        <div className="col">
            <div className="card text-center h-100">
                <div className="card-body">
                    <img scr={photo.src} className="cart-img-top" alt="..."/>
                </div>
                <h5 className="card-title mb-3">{photo.title}</h5>
            </div>
        </div>
    )
}

export default UsPhoto;