import { useAuthStore, useForm } from '../hooks'; 

const initialForm = {
    username: ''
}

export const SetInfo = () => {
    
    const { username, onInputChange } = useForm(initialForm);
    const { startUpdateUser, user } = useAuthStore();

    const setInfoSubmit = (event) => {
        event.preventDefault();
        startUpdateUser({ username, uid: user.uid });
    }

    return (
        <div className="SetInfo-container fadeIn">
            <h2 className="SetInfo-container_title">Agregar información</h2>
            <form className="SetInfo-container_form" onSubmit={ setInfoSubmit } >
                {   
                    (!user.username) &&
                        <input 
                           className="form-input" 
                           placeholder="Nombre de usuario" 
                           type="text"
                           name="username"
                           value={ username }
                           onChange={ onInputChange }
                        />
                }
                <input type="file"/>

                <button>Seleccionar foto de perfil</button>
                
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )
}