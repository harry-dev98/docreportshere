import {
    postFetcher,
    getFetcher,
} from './config';

const newMessageAPI = (data, token)=>{
    return postFetcher('newmessage/', data, token);
};

const getMessagesAPI = (patient, token) => getFetcher(`messages/?patient=${patient}`, token);

const getNotificationsAPI = (sender, token) => getFetcher(`notifications/?sender=${sender}`, token);

export {
    newMessageAPI,
    getMessagesAPI,
    getNotificationsAPI,
};