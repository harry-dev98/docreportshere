import {
    postFetcher,
} from './config';

const loginAPI = ( data ) => postFetcher("login/", data);

const signupAPI = ( data ) => postFetcher("signup/", data);


export {
    loginAPI,
    signupAPI,
}