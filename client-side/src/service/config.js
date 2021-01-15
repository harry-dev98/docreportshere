const HOST = "http://localhost:8000";
const API = HOST + "/api/"

const postFetcher = (url, data, token) => {
    let headers = {
        "Content-Type": "application/json",
    };
    if(token){
        headers = {
            ...headers,
            Authorization: `Token ${token}`,
        };
    }
    return fetch(API+url, {
        body: JSON.stringify(data),
        headers,
        method: 'POST',
    }).then((response)=>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json()
    });
};

const putFetcher = (url, data, token) => {
    let headers = {
        "Content-Type": "application/json",
    };
    if(token){
        headers = {
            ...headers,
            Authorization: `Token ${token}`,
        };
    }
    return fetch(API+url, {
        headers,
        method: 'PUT',
    }).then((response)=>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json()
    });
};


const getFetcher = (url, token) => {
    let headers = {
        "Content-Type": "application/json",
    };
    if(token){
        headers = {
            ...headers,
            Authorization: `Token ${token}`,
        };
    }
    return fetch(API + url, {
        headers,
    }).then((response)=>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json()
    });
}
export default HOST;

export {
    API,
    postFetcher,
    getFetcher,
    putFetcher,
};