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
import { useAuthStore } from '../hooks';

export const Navbar = ({ isConfig = false }) => {

    const { user } = useAuthStore();

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
                        src={ user.profile_img } 
                    />
                </RouterLink>
            </div>
        </nav>
    )
}
