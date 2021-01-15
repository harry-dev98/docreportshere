import { 
    CURRPATIENT,
    SETPATIENTS, 
} from '../../actionTypes';

const initalState = {
    patients: [
        // {
        //     id: '1',
        //     name: 'testuser1',
        //     gender: 'male',
        //     age: 35,
        //     domain: ['ENT', ],
        //     isAssigned: true,
        //     doctorData: {
        //         id: 'doc1',
        //         name: 'doctor1',
        //         specialist: [],
        //     },
        //     scans: [
        //         {
        //             date: "10-01-2021",
        //             src: "./img/scan1.jpeg",
        //             isReported: true,
        //             report: "this is the report for the scan demo demo!!",
        //         },
        //         {
        //             date: "10-01-2021",
        //             src: "./img/scan2.jpg", 
        //             isReported: false,
        //         },
        //         {
        //             date: "10-01-2021",
        //             src: "./img/scan3.jpg",
        //             isReported: false,
        //         }, 
        //     ],
        // },
        // {
        //     id: '2',
        //     name : 'testuser2',
        //     gender: 'female',
        //     age: 42,
        //     dateOfScan: '11-01-2021',
        //     online: false,
        //     domain: ['Skin', ],
        //     isAssigned: false,
        //     doctorData: {},
        //     isReported: false,
        //     scans: [],
        // },
    ],
};

const reducer = (state = initalState, action) => {
    switch(action.type){
        case SETPATIENTS:
            return {
                ...state,
                patients: [
                    ...state.patients,
                    ...action.payload,
                ]
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