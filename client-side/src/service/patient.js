import {
    API,
    postFetcher,
    getFetcher,
    putFetcher,
} from './config';

const addPatientAPI = (data, token)=>{
    return postFetcher('addpatient/', data, token);
};

const getPatientsAPI = (token) => getFetcher('getpatients/', token);

const addScanAPI = (imgs, patient, token) => {
    const date = new Date();
    return Promise.all(imgs.map(async (img) => {
        let data = new FormData();
        data.append('src', img, img.name);
        data.append('date', date.toDateString());
        data.append('patient', patient);
        return await fetch(API+'addscan/', {
            method: 'POST',
            body: data,
            headers: {
                Authorization: `Token ${token}`,
            }
        });
    }));
};

const assignDoctorAPI = (data, token) => postFetcher('assigndoctor/', data, token);

export {
    addPatientAPI,
    getPatientsAPI,
    addScanAPI,
    assignDoctorAPI,   
}