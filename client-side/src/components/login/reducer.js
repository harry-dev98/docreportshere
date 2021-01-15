import {
    LOGIN,
    LOGOUT,
    USERDATA,
} from '../../actionTypes';

const initalUserState = {
    isLoggedIn: false,
    userData: {},
};

const userReducer = (state = initalUserState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                isLoggedIn: true,
                userData: action.payload,
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