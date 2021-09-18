function myName(){
    return(
        "by Abashkina"
    )
};

function pointCreater(n){
    let point="";
    for(let i=0; i<=n; i++){
        point+=".";
    }
    return point
}

export default function Text(){
    return(
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio aliquid qui quia dolor reprehenderit doloremque dolorum repellendus est earum, eveniet cum facere sequi, ut quo labore quas tempora alias laudantium debitis fuga? Natus, dolorem vel voluptatem voluptatibus, exercitationem est enim tempore rerum deleniti voluptas fuga magnam? Dignissimos, in excepturi.<span>{pointCreater(70)}{myName()}</span></p>
    );
}