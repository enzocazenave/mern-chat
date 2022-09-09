import axios from 'axios';

const url = 'http://127.0.0.1:4000/api';

const api = axios.create({
    baseURL: url
});

api.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        
        'x-token': localStorage.getItem('token')
    };
    
    return config;
});

export default api;
