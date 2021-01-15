import {
    postFetcher,
    getFetcher,
    putFetcher,
} from './config';

const getDoctorsAPI = (token) => getFetcher('getdoctors/', token);

const addReportAPI = (data, token) => postFetcher('addreport/', data, token);

const approveDoctorAPI = (data, token) => postFetcher('validatedoctor/', data, token);

export {
    addReportAPI,
    getDoctorsAPI,
    approveDoctorAPI,
};