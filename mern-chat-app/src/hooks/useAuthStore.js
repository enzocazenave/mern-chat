import { useSelector, useDispatch } from 'react-redux';
import { api } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store';

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const startRegister = async({ email, password, name, surname }) => {
        try {
            const { data } = await api.post('/auth/new', { email, password, name, surname });
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: data.name,
                surname: data.surname,
                username: data.username,
                profile_img: data.profile_img,
                uid: data.uid,
            }));
        } catch(error) {
            dispatch(onLogout(error.response.data?.msg || ''));
            setTimeout(() => dispatch(clearErrorMessage()), 10);
        }
    }   

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await api.post('/auth', { email, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                name: data.name,
                surname: data.surname,
                username: data.username,
                profile_img: data.profile_img,
                uid: data.uid,
            }));
        } catch(error) {
            dispatch(onLogout('Credenciales incorrectas'));

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
    
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await api.get('/auth/renew');
            console.log(data);

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch(onLogin({
                name: data.name,
                surname: data.surname,
                username: data.username,
                profile_img: data.profile_img,
                uid: data.uid,
            }));
        } catch(error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startUpdateUsername = async({ username }) => {
        
    }



    return {
        //* PROPIEDADES
        status,
        user,
        errorMessage,

        //* METODOS
        startRegister,
        startLogin,
        checkAuthToken,
        startUpdateUsername
    }
}
