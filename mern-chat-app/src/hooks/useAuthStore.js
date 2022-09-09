import { useSelector, useDispatch } from 'react-redux';
import { api } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store';

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startRegister = async({ email, password, name, surname }) => {
        console.log({email,password,name,surname})
        try {
            const { data } = await api.post('/auth/new', { email, password, name, surname });
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: data.name,
                surname: data.surname,
                uid: data.uid,
            }))
        } catch(error) {
            dispatch(onLogout(error.response.data?.msg || ''));
            setTimeout(() => dispatch(clearErrorMessage()), 10);
        }
    }   

    return {
        //* PROPIEDADES
        status,
        user,
        errorMessage,

        //* METODOS
        startRegister
    }
}
