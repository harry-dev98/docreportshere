import API, {
    postFetcher,
} from './config';

const addPatientAPI = (data, token)=>{
    return postFetcher(data, token);
};

export {
    addPatientAPI,
}