import { useState } from 'react';
import { useRef } from 'react';
import { uploadProfileImage } from '../helpers/uploadProfileImage';
import { useAuthStore, useForm } from '../hooks'; 

const initialForm = {
    username: ''
}

export const SetInfo = () => {
    
    const { username, onInputChange } = useForm(initialForm);
    const { user } = useAuthStore();
    const [image, setImage] = useState([]);

    const setInfoSubmit = async(event) => {
        event.preventDefault();
    }

    const onFileInputChange = (event) => {
        setImage(event.target.files[0]);
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
                <input 
                    type="file" 
                    onChange={ onFileInputChange }
                    ref={ fileInputRef }
                    accept="image/*"
                />

                <button type="button" onClick={ () => fileInputRef.current.click() } >Seleccionar foto de perfil</button>

                <button type="submit">Actualizar</button>
            </form>
        </div>
    )
}