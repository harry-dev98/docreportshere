const API = "http://localhost:8000/api/";

const postFetcher = (url, data, token) => {
    return fetch(API+url, {
        body: JSON.stringify(data),
        headers: {
            Authorization: `Token ${token}`,
        },
        method: 'POST',
    }).then((response)=>response.json());
};

const putFetcher = (url, data, token) => {
    return fetch(API+url, {
        headers: {
            Authorization: `Token ${token}`,
        },
        method: 'PUT',
    }).then((response)=>response.json());
};


const getFetcher = (url, token) => {
    return fetch(API + url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    }).then((response)=>response.json());
}
export default API;

export {
    postFetcher,
    getFetcher,
    putFetcher,
};