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

import { Link as RouterLink } from 'react-router-dom';

export const Navbar = ({ isConfig = false }) => {
    return (
        <nav className="Navbar-container" id="navbar">
            <h1 className="Navbar-container_brand">Posts</h1>
            <div>
                {
                    (isConfig) &&
                        <RouterLink
                            className="Navbar-container_button"
                            to="/"
                        >
                            <i className="fas fa-home"></i>
                        </RouterLink>
                }
                <RouterLink
                    to="/config"
                >
                    <img  
                        className="Navbar-container_img"
                        src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" 
                    />
                </RouterLink>
            </div>
        </nav>
    )
}
