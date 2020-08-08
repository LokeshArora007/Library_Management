import API from '../utils/api';
import LocalStorageService from './localStorage';
const localStorageService = LocalStorageService.getService();

export const login = (postData) => {
    return API.post('/auth/login', postData);
};

export const logout = () => {
    return API.get('/auth/logout', {
        headers: {
            authorization: `${localStorage.getItem('accessToken')}`,
        },
    });
};

export const forgotPassword = (postData) => {
    return API.post('/auth/forgotpassword', postData);
};

export const changePassword = (postData) => {
    return API.post(`/auth/change-password`, postData, {
        headers: {
            authorization: `${localStorage.getItem('accessToken')}`,
        },
    });
};
