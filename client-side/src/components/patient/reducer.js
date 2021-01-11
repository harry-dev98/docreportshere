import { 
    CURRPATIENT,
    SETPATIENT, 
} from '../../actionTypes';
const initalState = {
    patients: [
        {
            id: '1',
            name: 'testuser1',
            online: true,
            domain: ['ENT', ],
            avatar: '',
        },
        {
            id: '2',
            name : 'testuser2',
            online: false,
            domain: ['Skin', ],
            avatar: '',
        },
    ],
};

const reducer = (state = initalState, action) => {
    switch(action.type){
        case SETPATIENT:
            return {
                ...state,
                patients: {
                    ...state.patients,
                    ...action.payload,
                }
            }
        // case CURRPATIENT:
        //     return {
        //         ...state,
        //         currPatient: action.payload.id,
        //     };
        default:
            return state;
    }
}

export default reducer;