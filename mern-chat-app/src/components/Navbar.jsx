let location = window.pageYOffset;

window.onscroll = () => {
    let current_movement = window.pageYOffset;
    
    if (current_movement > 60) {
        if (location >= current_movement) {
            document.getElementById("navbar").style.top = '0';
        } else {
            document.getElementById("navbar").style.top = '-100px';
        }

        location = current_movement;
    }
}

export const Navbar = () => {
    return (
        <nav className="Navbar-container" id="navbar">
            <h1 className="Navbar-container_brand">ChatVZ</h1>
            <img  
                className="Navbar-container_img"
                src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" 
            />
        </nav>
    )
}
