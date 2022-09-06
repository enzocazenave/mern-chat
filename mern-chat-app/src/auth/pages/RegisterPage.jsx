import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <div className="LoginPage-container fadeIn">
            <div className="LoginPage-container_box">
                <p className="LoginPage-container_box__text">
                    Crea una cuenta, disfruta de conectarte con gente nueva e interactua con ellos.
                </p>
            </div>

            <form className="LoginPage-container_form">
                <h1 className="LoginPage-container_form__title">Crear cuenta</h1>
                
                <input className="form-input" placeholder="Nombre" type="text" />
                <input className="form-input" placeholder="Apellido" type="text" />
                <input className="form-input" placeholder="Correo electrónico" type="email" />
                <input className="form-input" placeholder="Contraseña" type="password" />
                <input className="form-input" placeholder="Repite tu contraseña" type="password" />
                
                <button className="LoginPage-container_form__button" type="submit">Crear cuenta</button>

                <RouterLink 
                    className="LoginPage-container_form__redirect" 
                    to="/auth/login"
                >
                    ¿Ya tienes cuenta? <strong>Inicia sesión</strong>
                </RouterLink>
            </form>
        </div>
    )
}