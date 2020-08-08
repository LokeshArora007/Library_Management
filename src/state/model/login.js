import { action, thunk } from 'easy-peasy';
import * as loginService from '../../services/login';
import LocalStorageService from '../../services/localStorage';
const localStorageService = LocalStorageService.getService();

const loginModel = {
    authenticate: thunk(async (actions, payload) => {
        return await loginService.login(payload);
    }),
    logout: thunk(async (actions) => {
        // await loginService.logout().then((response) => {
        //     //console.log("Success", response.data);
        //     localStorageService.clearToken();
        //     window.location = '/login';
        // })
        // .catch((error) => {
        //     //console.log("Error", error);
        // });;
        localStorageService.clearToken();
            window.location = '/login';
    }),
    forgotPassword: thunk(async (actions, payload) => {
        return await loginService.forgotPassword(payload);
    }),
    changePassword: thunk(async (actions, payload) => {
        return await loginService.changePassword(payload);
    })
};

export default loginModel;
