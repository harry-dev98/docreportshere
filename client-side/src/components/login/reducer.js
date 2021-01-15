import {
    LOGIN,
    LOGOUT,
    USERDATA,
} from '../../actionTypes';

const initalUserState = {
    isLoggedIn: false,
    token: '',
    userData: {},
};

const userReducer = (state = initalUserState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                isLoggedIn: true,
                token: action.payload.token,
                is_hospital: action.payload.is_hospital,
            };
        case LOGOUT:
            return initalUserState;
        case USERDATA: 
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
}

export default userReducer;