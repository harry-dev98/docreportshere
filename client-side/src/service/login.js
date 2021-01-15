import API, {
    postFetcher,
} from './config';

const loginAPI = ( data ) => postFetcher(data, "");

const signupAPI = ( data ) => postFetcher(data, "");


export {
    loginAPI,
    signupAPI,
}