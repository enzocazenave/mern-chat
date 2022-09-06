export const Post = () => {
    return (
        <div className="Posts-container_post">
            <div className="Posts-container_post__profile">
                <img 
                    className="Posts-container_post__profile___img"
                    src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                />
                <div>
                    <p className="Posts-container_post__profile___username">@chikicazenave_</p>
                    <p className="Posts-container_post__profile___date">fecha de publicacion</p>
                </div>
            </div>
            
            <p className="Posts-container_post__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eius? Non hic mollitia, architecto reiciendis repellat officia sunt omnis maiores, facere asperiores dolores voluptates adipisci laboriosam totam in aperiam aspernatur? lorem</p>
            
            <div className="Posts-container_post__buttons">
                <button><i className="far fa-heart"></i></button>
                <p>0</p>
            </div>
        </div>
    )
}
