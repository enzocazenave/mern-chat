import { useAuthStore, useForm } from '../hooks/';

const initialForm = {
    username: ''
}

export const SetInfo = () => {
    const { username, onInputChange } = useForm(initialForm);
    const { startUpdateUsername, user } = useAuthStore();

    const startUpdateUser = (e) => {
        e.preventDefault();
        if (username.length > 0) return startUpdateUsername({ username, uid: user.uid });
        console.log('muy corto')

    }

    return (
        <div className="SetInfo-container fadeIn">
            <h2 className="SetInfo-container_title">Agregar información</h2>
            <form className="SetInfo-container_form">
                <input 
                    className="form-input" 
                    placeholder="Nombre de usuario" 
                    type="text"
                    name="username"
                    value={ username }
                    onChange={ onInputChange }
                />
                <button onClick={ startUpdateUser }>Actualizar</button>
            </form>
        </div>
    )
}