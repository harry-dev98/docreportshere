import {
    LOGIN,
    LOGOUT,
    USERDATA,
} from '../../actionTypes';

import {
    lookUpLocalStorage
} from '../../service/api';

const data = lookUpLocalStorage();
let initalUserState;
if (data && data.token){
    initalUserState = {
        isLoggedIn: true,
        token: data.token,
        userData: data.userData || {},
        is_hospital: data.is_hospital==="true"?true:false,
    }
} else {
    initalUserState = {
        isLoggedIn: false,
        token: '',
        userData: {},
        is_hospital: false,
    };
}

const userReducer = (state = initalUserState, action) => {
    switch(action.type){
        case LOGIN:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('is_hospital', action.payload.is_hospital);
            console.log(localStorage)
            return {
                isLoggedIn: true,
                token: action.payload.token,
                is_hospital: action.payload.is_hospital,
            };
        case LOGOUT:
            localStorage.clear()
            console.log(localStorage)
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