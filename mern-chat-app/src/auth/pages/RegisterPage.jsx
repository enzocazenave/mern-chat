import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthStore, useForm } from '../../hooks/';


const initialForm = {
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: ''
}

export const RegisterPage = () => {

    const { startRegister, errorMessage } = useAuthStore();
    const { name, surname, email, password, password2, onInputChange } = useForm(initialForm);

    const registerSubmit = (event) => {
        event.preventDefault();

        if (password !== password2) return console.log('Contraseñas distintas'); // TODO: mostrar de alguna forma los errores

        startRegister({ name, surname, email, password });
    }

    useEffect(() => {
        console.log(errorMessage);
    }, [errorMessage])

    return (
        <div className="LoginPage-container fadeIn">
            <div className="LoginPage-container_box">
                <p className="LoginPage-container_box__text">
                    Crea una cuenta, disfruta de conectarte con gente nueva e interactua con ellos.
                </p>
            </div>

            <form onSubmit={ registerSubmit } className="LoginPage-container_form" >
                <h1 className="LoginPage-container_form__title">Crear cuenta</h1>
                
                <input 
                    className="form-input" 
                    placeholder="Nombre" 
                    type="text" 
                    name="name"
                    value={ name }
                    onChange={ onInputChange }
                />
                <input 
                    className="form-input" 
                    placeholder="Apellido" 
                    type="text" 
                    name="surname"
                    value={ surname }
                    onChange={ onInputChange }
                />
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
                <input 
                    className="form-input" 
                    placeholder="Repite tu contraseña" 
                    type="password" 
                    name="password2"
                    value={ password2 }
                    onChange={ onInputChange }
                />
                
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