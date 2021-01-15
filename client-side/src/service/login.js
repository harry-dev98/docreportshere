import {
    postFetcher,
} from './config';

const loginAPI = ( data ) => postFetcher("login/", data);

const signupAPI = ( data ) => postFetcher("signup/", data);

const lookUpLocalStorage = () => {
    console.log(localStorage);
    return {
        'token': localStorage.getItem('token'),
        'is_hospital': localStorage.getItem('is_hospital'),
    };
}
export {
    loginAPI,
    signupAPI,
    lookUpLocalStorage,
}