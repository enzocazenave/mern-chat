import { useDispatch } from "react-redux";
import { clearErrorMessage, onLogout } from "../store";

export const uploadProfileImage = async(file) => {

    const dispatch = useDispatch();

    if (!file) throw new Error('No recibi un archivo para subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ddjlmtd6z/upload';
    
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData
        });

        if (!resp.ok) throw new Error("No se pudo subir la imagen");

        const { secure_url } = await resp.json();

        return secure_url;
    } catch(error) {
        dispatch(onLogout(error || ''));
        setTimeout(() => dispatch(clearErrorMessage()), 10);
    }
}