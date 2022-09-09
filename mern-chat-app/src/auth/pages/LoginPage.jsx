import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthStore, useForm } from '../../hooks';

const initialForm = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { email, password, onInputChange } = useForm(initialForm);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email, password })
    }

    useEffect(() => {
        console.log(errorMessage);
    }, [errorMessage])

    return (
        <div className="LoginPage-container fadeIn">
            <div className="LoginPage-container_box">
                <p className="LoginPage-container_box__text">
                    Bienvenido de nuevo, inicia sesión y vuelve a interactuar con la gente.
                </p>
            </div>

            <form onSubmit={ loginSubmit } className="LoginPage-container_form">
                <h1 className="LoginPage-container_form__title">Iniciar sesión</h1>
                
                <input 
                    className="form-input" 
                    placeholder="Correo electrónico" 
                    type="email" 
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-input" 
                    placeholder="Contraseña"
                    type="password" 
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                />

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
