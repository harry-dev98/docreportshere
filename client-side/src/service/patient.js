import {
    postFetcher,
    getFetcher,
    putFetcher,
} from './config';

const addPatientAPI = (data, token)=>{
    return postFetcher('addpatient/', data, token);
};

const getPatientsAPI = (token) => getFetcher('getpatients/', token);

const addScanAPI = (data, token) => {
    return postFetcher('addscan/', data, token);
};

const assignDoctorAPI = (data, token) => putFetcher('assigndoctor/', data, token);

export {
    addPatientAPI,
    getPatientsAPI,
    addScanAPI,
    assignDoctorAPI,   
}