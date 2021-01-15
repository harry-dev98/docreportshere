import {
    SETPATIENTS,
} from '../../actionTypes';

const setPatients = (data) => ({type: SETPATIENTS, payload: data});

export {
    setPatients,
};