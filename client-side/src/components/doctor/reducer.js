
const initialState = {
    doctors : [
        {
            id: 1,
            name: 'doc1',
            domain: ['ENT', ],
            isValid: true,
        },
        {
            id: 2,
            name: 'doc2',
            domain: ['Skin', ],
            isValid: false,
        },
    ],
};

const reducer = ( state=initialState, action ) => {
    switch(action.type){
        default:
            return state;
    }
};

export default reducer;