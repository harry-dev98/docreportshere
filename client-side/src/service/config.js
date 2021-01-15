const APIHOST = "http://localhost:8000/api/";

const postFetcher = (data, token) => {
    return fetch(API+'addpatient/', {
        body: JSON.stringify(data),
        headers: {
            Authorization: `Token ${token}`,
        },
        method: 'POST',
    }).then((response)=>response.json());
};

export default APIHOST;
export {
    postFetcher,
};