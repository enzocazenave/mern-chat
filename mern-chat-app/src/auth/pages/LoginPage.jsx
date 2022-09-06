import { Link as RouterLink } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <div className="LoginPage-container fadeIn">
            <div className="LoginPage-container_box">
                <p className="LoginPage-container_box__text">
                    Bienvenido de nuevo, inicia sesión y vuelve a interactuar con la gente.
                </p>
            </div>

            <form className="LoginPage-container_form">
                <h1 className="LoginPage-container_form__title">Iniciar sesión</h1>
                
                <input className="form-input" placeholder="Correo electrónico" type="email" />
                <input className="form-input" placeholder="Contraseña" type="password" />

                <button className="LoginPage-container_form__button" type="submit">Ingresar</button>

                <RouterLink 
                    className="LoginPage-container_form__redirect" 
                    to="/auth/register"
                >
                    ¿No tienes cuenta? <strong>Crea una</strong>
                </RouterLink>
            </form>
        </div>
    )
}
